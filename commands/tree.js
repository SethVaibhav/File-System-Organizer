//TREE FUNCTION
function treeFn(dirpath){
    //console.log("tree command",dirpath);
    if(dirpath==undefined){
        treeHelper(process.cwd(),"");
        return ;
    }
    else{
    
        let isExist=fs.existsSync(dirpath); 
        if(isExist){

        treeHelper(dirpath,"");
        }
        
    else{
        console.log("Kindly enter the correct path");
        return ;    
    }
}
}

function treeHelper(dirpath,indent){
let isFile=fs.lstatSync(dirpath).isFile();
// check if it is file 
// if file then print its name 
// if folder then print name of folder and call a recursive fn to childern to get their content 
if(isFile==true){
    let fileName=path.basename(dirpath);
    console.log(indent+"|──" + fileName);
}
else{
    let dirName=path.basename(dirpath);
    console.log(indent+"└──"+dirName);
    let children=fs.readFileSync(dirpath);
    for(let i=0;i<children.length;i++){
        let childPath=path.join(dirpath,children[i]);
        treeHelper(childPath,indent+"\t");
    }
}
}

module.exports={
    treeKey:treeFn
}