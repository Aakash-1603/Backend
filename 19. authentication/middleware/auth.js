const { getUser } = require("../service/auth");

async function restrictToLoggedinUserOnly(req,res,next){
    const userUid=request.cookies?.uid;
    if(!userUid){
        return res.redirect("/",login)
    }
    const user=getUser(userUid);
    if(!user){
        return res.redirect("/login")
    }
    req.user=user;
    next();
}

async function checkauth(req,res,next){
    const user=getUser(userUid);
    if(!user){
        return res.redirect("/login")
    }
    req.user=user;
    next();
}

module.exports={restrictToLoggedinUserOnly,
    checkauth
};