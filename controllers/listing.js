const Listing=require("../models/listing");
const mbxGeocoding=require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken=process.env.MAP_TOKEN;
const geocodingClient=mbxGeocoding({accessToken:mapToken});

module.exports.index=async(req,res)=>{
    const allListings=await Listing.find({});
    res.render("index.ejs",{allListings});
};

module.exports.newListing=(req,res)=>{
    res.render("new.ejs");
};

module.exports.showListing=async(req,res)=>{
    let {id}=req.params;
    const list=await Listing.findById(id).populate({path:"reviews",populate:{path:"author"}}).populate("owner");
    if(!list){
        req.flash("error","Listing you requested for does not exist!");
        res.redirect("/listings");
    }
    else res.render("show.ejs",{list});
};

module.exports.createListing=async(req,res)=>{
    //console.log("REQ.BODY:", req.body);
    let response=await geocodingClient
    .forwardGeocode({
        query:req.body.listing.location,
        limit:1,
    })
    .send();
   
    let url=req.file.path;
    let filename=req.file.filename;
    let listings=req.body.listing;
    if(!url){
        url='https://www.dolomitemountains.com/blog/wp-content/uploads/2021/06/20110718_010-Photo-Giuseppe-Ghedina.jpeg';
        filename="imageFile";
    }
    const newListings=new Listing(listings);
    newListings.owner=req.user._id;
    newListings.image={url,filename};
    newListings.geometry=response.body.features[0].geometry;
    await newListings.save();
    req.flash("success","New Listing Created!");
    res.redirect("/listings");
};

module.exports.editListing=async(req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
    let originalImageUrl=listing.image.url;
    originalImageUrl=originalImageUrl.replace("/upload","/upload/h_250,w_250/");
    res.render("edit.ejs",{listing,originalImageUrl});
};

module.exports.updateListing=async(req,res)=>{
    let {id}=req.params;
    let listing=await Listing.findByIdAndUpdate(id,{...req.body.listing});
    if(typeof req.file!=="undefined"){
        let url=req.file.path;
        let filename=req.file.filename;
        listing.image={url,filename};
        await listing.save();
    }
    req.flash("success","Listing has been updated!");
    res.redirect(`/listings/${id}`);
};

module.exports.deleteListing=async(req,res)=>{
    let {id}=req.params;
    let deletedList=await Listing.findByIdAndDelete(id);
    req.flash("success","Listing has been deleted!");
    res.redirect("/listings");
};