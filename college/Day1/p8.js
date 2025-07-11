const fs=require('fs');
FileSystem.mkdir("mydir",(err)=>{
    if(err){
        console.error("Error creating directory:",err);
        return;
    }
    console.log("Directory created uccesfully");
})