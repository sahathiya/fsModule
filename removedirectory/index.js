const fs=require("fs")

fs.rmdir('old',(err)=>{
    if(err){
        console.log(err);
        
    }else{
        console.log("folder deleted");
        
    }
})