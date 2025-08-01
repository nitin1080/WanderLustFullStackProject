const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listing.js");

const mongoUrl="mongodb://127.0.0.1:27017/wonderLust";

main()
.then(()=>{console.log("connected to DB")})
.catch((err)=>{console.log(err)});

async function main() {
    await mongoose.connect(mongoUrl);
}

const initDB=async () => {
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({
        ...obj,owner:"6878b689f7860154fcc9b114",
    }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized!");
}

initDB();