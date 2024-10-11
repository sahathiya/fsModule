const fs=require("fs")

fs.writeFile('./file1.txt','this is written in a file',(err)=>{
    if(err){
        console.log(err)
        
    }else{
        console.log("content written");
        

    }
})