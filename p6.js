const fs=require('fs')
const append=()=>{
    fs.appendFile('file.txt',"Hello World",(err)=>{
        if(arr)
            console.log(err);
        else
            console.log("successfully Appended");
    });
};
console.log("Before Appending");
append();
console.log("After Append");