#!/usr/bin/env node
const fs=require("fs");
const path=require("path");
const helpObj=require("./commands/help");
const treeObj=require("./commands/tree");
const oraganizeObj=require("./commands/organize");

let inputArr=process.argv.slice(2); // input that is wriiten in command line and 0->node and 1-> main.js so we started from 2th index
console.log(inputArr);
// COMMANDS - node main.js tree "directoryPath"
// node main.js organize "directorypath"
// node main.js help

let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}

let command=inputArr[0];
switch(command){
    case "tree":
        treeObj.treeKey(inputArr[1])
        break;
    case "organize":
        organizeObj.organizeKey(inputArr[1]);
        break;
    case "help":
        helpObj.helpKey();
        break;
    default:
        console.log("Please right correct command");            
}





