const fs = require('fs/promises');


const read = async() => {
    const data = await fs.readFile("./newFolder/./data.txt","utf8");

    return data;


}


read().then((data) => {
    console.log(data);
})

console.log("I am before reading folder");

console.log("I am after reading folder");