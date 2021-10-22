// ORGANISE FUNCTION
function organizeFn(dirpath){
    //1. Input directory path given
    let destpath;
    if(dirpath==undefined){
        destpath=process.cwd();
        return ;
    }
    else{
    
        let isExist=fs.existsSync(dirpath); // to check the path exist or not !!!
        if(isExist){
        // 2. create organized folder in directory/folder
        destpath=path.join(dirpath,"organized_files");
        if(fs.existsSync(destpath)==false)fs.mkdir(destpath);    
        }
        
    else{
        console.log("Kindly enter the correct path");
        return ;    
    }
    organizeHelper(dirpath,destpath);
    }
    
}

function organizeHelper(src,dest){
// 3. identify all categories of all files in directory
let children=fs.readFileSync(src);
for(let i=0;i<children;i++){
    let childrenAdd=path.join(src.children[i]);
    let isFile=fs.lstatSync(childrenAdd).isFile();
    if(isFile==true){
    //4. cut and copy the files to folder acc to their extension    
    let category=getCategory(children[i]);
    sendFiles(childrenAdd,dest,category);
    }
    }
}

function sendFiles(srcFilePath,dest,category){
let categoryPath=path.join(dest,category);
if(fs.existsSync(categoryPath)==false){
    fs.mkdirSync(categoryPath);
}
let filename=path.basename(srcFilePath);
let destFilePath=path.join(categoryPath,filename);
fs.copyFileSync(srcFilePath,destFilePath);
fs.unlinkSync(srcFilePath);

}

function getCategory(name){
    let ext=path.extname(name);
    ext=ext.slice(1);
    for(let type in types){
        let cTypeArray=types[type];
        for(let i=0;i<cTypeArray.length;i++){
        if(ext==cTypeArray[i]) return type;
        }
    }
    return "others";
}

module.exports={
    oraganizeKey:organizeFn
}