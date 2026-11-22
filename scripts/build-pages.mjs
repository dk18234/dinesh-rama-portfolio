import{spawnSync}from'node:child_process';import{writeFile}from'node:fs/promises';
const result=spawnSync(process.execPath,['node_modules/vite/bin/vite.js','build','--outDir','docs'],{env:{...process.env,VITE_BASE_PATH:'/dinesh-rama-portfolio/'},stdio:'inherit'});if(result.status!==0)process.exit(result.status??1);await writeFile('docs/.nojekyll','');
