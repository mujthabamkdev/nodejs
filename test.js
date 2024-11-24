import dateFormat from 'dateformat';
import fs from 'fs';

// inbuilt modules use
fs.readdir("./myfiles", (_, files) =>{
    files.forEach((file)=>{
        if(/01/.test(file)){
            const month = file.substring(0, file.indexOf('.'));
           // console.log(file, dateFormat(month, "dddd, mmmm dS, yyyy, h:MM:ss TT"))
        }
    })
})

// import modules from npm modules
import {modFunction} from './mod1.cjs'
modFunction();