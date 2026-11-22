import assert from 'node:assert/strict';
import {readFile,writeFile,rm,access} from 'node:fs/promises';
import {transpileModule,ModuleKind,ScriptTarget} from 'typescript';
import {pathToFileURL} from 'node:url';
import {resolve} from 'node:path';
const base='/dinesh-rama-portfolio/',temp=resolve('.portfolio-verify-'+process.pid+'.mjs');
try{
 const text=(await readFile('src/data.ts','utf8')).replaceAll('import.meta.env.BASE_URL',JSON.stringify(base));
 const compiled=transpileModule(text,{compilerOptions:{module:ModuleKind.ESNext,target:ScriptTarget.ES2022}});await writeFile(temp,compiled.outputText);
 const data=await import(pathToFileURL(temp).href);assert.equal(data.projects.length,6);assert.deepEqual(data.projects.map(p=>p.id),[1,2,3,4,5,6]);
 const names=new Set();for(const p of data.projects){assert.ok(!names.has(p.title));names.add(p.title);assert.ok(p.title.length>8&&p.description.length>30&&p.longDescription.length>100);assert.ok(p.technologies.length>=4);assert.ok(!/Project 0\d|Technology \d|will be added/i.test(JSON.stringify(p)));assert.match(p.github,/^https:\/\/github\.com\/dk18234\//);assert.match(p.demo,/^https:\/\/dk18234\.github\.io\//);assert.ok(p.image.startsWith(base));await access('public/'+p.image.slice(base.length));}
 assert.equal(data.projects[4].github,'https://github.com/dk18234/strata-scheduler');assert.equal(data.projects[5].github,'https://github.com/dk18234/dinesh-rama-portfolio');
 assert.ok(data.photoUrl.startsWith(base));await access('public/'+data.photoUrl.slice(base.length));
 if(data.resumeUrl.startsWith(base)){await access('public/'+data.resumeUrl.slice(base.length));assert.ok((await readFile('public/'+data.resumeUrl.slice(base.length))).subarray(0,4).equals(Buffer.from('%PDF')));}else{assert.match(data.resumeUrl,/^mailto:[^?]+\?subject=Resume/);}
 const skillNames=new Set();for(const s of data.skills){assert.ok(!skillNames.has(s.name),'Duplicate skill: '+s.name);skillNames.add(s.name);assert.ok(Number.isInteger(s.level)&&s.level>=1&&s.level<=10,'Skill rating must be an integer from 1 to 10: '+s.name);assert.ok(!/Skill 0[0-9]|placeholder/i.test(s.name));assert.ok(data.skillCategories.includes(s.category),'Unknown skill category: '+s.category);}
 for(const category of data.skillCategories.filter(c=>c!=='All'))assert.ok(data.skills.some(s=>s.category===category),'Empty skill category: '+category);
 assert.ok(data.certifications.length>0);for(const c of data.certifications){assert.ok(c.title&&c.issuer&&c.earned);assert.ok(!/will be added|placeholder/i.test(JSON.stringify(c)));}
 assert.ok(data.conferences.length>=2);for(const c of data.conferences){assert.ok(c.name);assert.ok(['Attendee','Presenter'].includes(c.role));if(c.url)assert.ok(c.url.startsWith('https://'));}
 console.log('Six projects, asset paths, 1–10 skill ratings, nonempty categories, certifications, and conference roles verified.');
}finally{await rm(temp,{force:true});}
