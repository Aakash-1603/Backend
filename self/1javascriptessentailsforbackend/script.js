alert("Hello Aakash!!")


// foreach :- Iterate over the array
var arr=[1,2,3,4];
arr.forEach(function(val){
    console.log(val+" Hello");
})

// map :- create the new array of the same size   
var newarr=arr.map(function(val){
    return val+1;
}) 

// note :- on returning value, it puts that value into the new array.

console.log(newarr);

// filter :- creates new array either of same size or smller then the current array after filtering.

var newarr2=arr.filter(function(val){
    if(val>2){
        return val;
    }
})

console.log(newarr2);

// find :- It returns the value if it is present in the array.

var ans=arr.find(function(val){
    if(val===2){
        return val;
    }
})

console.log(ans);


// Object :- stores data in it , in a key-value pair system.

var obj={
    name:"aakash"
}

// freeze is the method which is used in objects to freeze its value , that cannot be changed.



// line by line code chale tho isse kehte hi synchronous.

// jo bhi code async nature ka ho, usee side stack mein bhej do  and agle code ko chalaaoo jo bhi sync nture ka ho, jb bhi sra syn code chal jaye, tab check karo ki async code complete hua ya nahi and agar wo complete hua ho tho usse main stack mai laoo or usse chalaa do.



async function abcd(){
    var res=await fetch(`https://randomuser.me/api/`)
    var anss=await res.json();
    console.log(anss)
} 

abcd();