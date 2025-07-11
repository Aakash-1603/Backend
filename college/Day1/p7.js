const fs=require('fs');
fs.unlink("./data.txt",(err)=>{
    if(err){
        console.error(`Error deleting file: ${err}`);
        return;
    }
    console.log("File deletd succesfully");
});