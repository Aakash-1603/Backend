const express=require('express');
const App=express();
App.use(express.json());
const users=[];
App.get('/api',(req,res)=>{
    res.json(users);
});
App.get('/users',(req,res)=>{
    res.send('Welcome to Backend');
});
App.post('/users',(req,res)=>{
    const data=req.body;
    const newid=users.length>0?users[users.length-1].id+1:1;
    data.id=newid;
    users.push(data);
    res.json({message:' data Mil gaya whuuuuu', data:data, users:users});
});
App.listen(9000,()=>{
    console.log('Server is moving Tabdak Tabdak');
});