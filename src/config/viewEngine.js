import express from "express"

let configViewEngine = ()=>{
app.use(express.static("./srx/public"));
app.set("view engine", "ejs");

}
module.exports = configViewEngine