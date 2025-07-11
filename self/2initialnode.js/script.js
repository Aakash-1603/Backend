const fs = require('fs');

// Step 1: Create hey.txt and write to it
fs.writeFile("hey.txt", "Hello Aakash", function (err) {
    if (err) {
        return console.log("Write Error:", err);
    }
    console.log("File Created");

    // Step 2: Rename hey.txt to hello.txt
    fs.rename("hey.txt", "hello.txt", function (err) {
        if (err) {
            return console.log("Rename Error:", err);
        }
        console.log("File Renamed");

        // Step 3: Append to hello.txt
        fs.appendFile("hello.txt", " or I would say Hello Akdon", function (err) {
            if (err) {
                return console.log("Append Error:", err);
            }
            console.log("Text Appended");

            // Step 4: Copy to content of hello.txt to copy.txt
            fs.copyFile("hello.txt","copy.txt",function(err){
                if(err){
                    console.log("Copy Error:",err);
                }
                else{
                    console.log("Text Copied");

                    // Step 5: Unlink the file (means Deleting the file).
                    fs.unlink("copy.txt",function(err){
                        if(err){
                            console.log(err);
                        }
                        else{
                            console.log("File Deleted");
                        }
                    });
                }
            });
        });
    });
});



// note there is rmdir -> it is used to remove the folder from the ditrectory. , it will only delete or remove the folder when the folder is empty.

// there is rm -> it can remove or delete the folder even if there will be any file in t he folder.




// */------------------------------------------/*


// http module.
