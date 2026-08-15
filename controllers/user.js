const User=require("../models/user");

module.exports.userSignupRender=(req,res)=>{
    res.render("users/signup.ejs");
};

module.exports.userSignup=async(req,res,next)=>{
    let {username,email,password}=req.body;
    const newUser=new User({email,username});
    const registeredUser=await User.register(newUser,password);
    req.login(registeredUser,(err)=>{
        if(err) next(err);
        req.flash("success","Welcome to WanderLust!");
        res.redirect("/listings");
    });
};

module.exports.userLoginRender=(req,res)=>{
    res.render("users/login.ejs");
};

module.exports.userLogin=async(req,res)=>{
    req.flash("success","welcome back to WanderLust!");
    let url=res.locals.redirectUrl?res.locals.redirectUrl:"/listings";
    res.redirect(url);
};

module.exports.userLogout=(req,res,next)=>{
    req.logout((err)=>{
        if(err) return next(err);
        req.flash("success","logged you out!");
        res.redirect("/listings");
    });
};
