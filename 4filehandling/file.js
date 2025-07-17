const fs=require("fs");


// Create aa new file and put some content in it...

fs.writeFile("text.txt","Hello This is Akdon",function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("File Creted Successfully");
    }
});


// Read the file and console its content...

const read=fs.readFile("text.txt","utf-8",function(err,read){
    if(err){
        console.log(err);
    }
    else{
        console.log("File Readed Successfully");
        console.log(read);

        // Append other content in the current file...
        
        fs.appendFile("text.txt"," or you can call me Aakash",function(err){
            if(err){
                console.log(err);
            }
            else{
                console.log("Content Appended Successfully");

                // copy a exsisting file in a new file after creating it...

                fs.copyFile("text.txt","copy.txt",function(err){
                    if(err){
                        console.log(err);
                    }
                    else{
                        console.log("File Copied Successfully");

                        // delete the copy file...

                        fs.unlink("copy.txt",function(err){
                            if(err){
                                console.log(err);
                            }
                            else{
                                console.log("Cpoied File deleted Successfully")
                            }
                        })
                    }
                });
            }
        });
    }
});


// Create the new file directory or folder...

fs.mkdir("new folder",function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Folder created Successfully");
    }
})


// to create multiple folder in one another...
// note:- for multiple folder in one another , we must write recursive : true to create multiple folders inside each other other wise it will show error .
fs.mkdir("multi-folder/js/backend",{recursive:true},function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Multiple Folder in one-another cretaed");
    }
})
