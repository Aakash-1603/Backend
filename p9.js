const fs=require('fs');
FormData.rmdir("mydir",(err)=>{
    if(err){
        console.log("Erroe Deleting Directory:",err);
    }
    else{
        console.log("Directory deleted successfully");
    }
})