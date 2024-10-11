const fs=require("fs")

fs.appendFile('./append.txt',"appended content",(err)=>{
    if(err){
        console.log(err);
        
    }else{
        console.log("content append to a file");
        
    }
})