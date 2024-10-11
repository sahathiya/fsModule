const fs=require("fs")

fs.mkdir('new',(err)=>{
    if(err){
        console.log(err);
        
    }else{
        console.log("folder created");
        
    }
})