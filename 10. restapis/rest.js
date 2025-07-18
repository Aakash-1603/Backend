const express=require('express');
const users=require('./users.json');
const fs=require('fs');
// we are using fs here to read or update the users.json file because we are not using a database in this example.

const app=express();
const port=3000;


app.use(express.urlencoded({extended:false})); // Middleware to parse JSON bodies


// Creating REST API's.....

// ROUTES....

app.get('/',(req,res)=>{
    // Home route
    return res.send('Welcome to the REST API');
})

app.get('/api/users', (req, res) => {
    // List all users
  return res.json(users);
  // List all users in  JSON format
});


// app.get('/users', (req, res) => {
//     const html=`
//     <ul>${users.map((user)=>`<li>${user.first_name} ${user.last_name}</li>`)}</ul>`;
//     return res.send(html); // List all users in HTML format
// });


app.get('/api/users/:id', (req, res) =>{
    // Get user by ID
    const id=Number(req.params.id);
    const user=users.find((user)=>user.id===id);
    if(user){
        return res.json(user); // Get user by ID
    }
    return res.status(404).json({message: 'User not found'}); // If user not found
});





app.post('/api/users', (req, res) => {
    // Create a new user
    const body=req.body;
    console.log(body);
    users.push({body,id:users.length+1}); // Add new user to the users array
    fs.writeFile('./users.json', JSON.stringify(users), (err) => {
        if (err) {
            return res.status(500).json({message: 'Error saving user'});
        }
        return res.status(201).json(body); // Return the created user
    });
});



app.patch('/api/users/:id', (req, res) => {
    // Edit user
    return res.json({status:"pending"});
});



app.delete('/api/users/:id', (req, res) => {
    // delete user
    return res.json({status:"pending"});
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});