const fs=require("fs")
 fs.unlink('./delete.txt',(err)=>{
    if(err){
        console.log(err);
        
    }else{
        console.log("file deleted");
        
    }
 })