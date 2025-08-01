const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync");
const User=require("../models/user");
const passport = require("passport");
const {saveRedirectUrl}=require("../middleware.js");
const userController=require("../controllers/user.js");

router.get("/signup",userController.userSignupRender);

router.post("/signup",wrapAsync(userController.userSignup));

router.get("/login",userController.userLoginRender);

router.post("/login",saveRedirectUrl,passport.authenticate("local",{
    failureRedirect:"/login",failureFlash:true,
}),wrapAsync(userController.userLogin));

router.get("/logout",userController.userLogout);

module.exports=router;