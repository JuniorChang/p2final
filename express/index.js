const express = require("express");
const hbs = require("hbs");
const wax = require("wax-on");

require('dotenv').config();
const MongoUtil = require("./MongoUtil");


async function main() {
    //A: setting up express
    let app = express();
    //B: setting up view engine
    app.set("view engine", "hbs");
    var helpers = require("handlebars-helpers")({
        handlebars:hbs.handlebars
    });
    //C: setting up static folder
    app.use(express.static("public"));
    //D: setting up wax-on templates
    wax.on(hbs.handlebars);
    wax.setLayoutPath("./views/layouts");
    // E: Enable the forms
    app.use(express.urlencoded({ 
        'extended': false 
    }));
    // F: Connecting to Mongo
    
    try {
        await MongoUtil.connect(process.env.MONGO_URL,'testingOne');
    } catch (error) {
        console.log(error)
    }
    

    // add routes here

    app.get("/", function (req, res) {
    res.render("index.hbs");
    })

    app.get("/add-food", function (req, res) {
    res.render("add_food");
    })

    app.post('/add-food', function(req,res){
        let { foodName, calories, tags} = req.body;
        let db = MongoUtil.getDB();
        if (!Array.isArray(tags)){
            tags = [tags];
        }

        db.collection("food").insertOne({
            foodName,
            calories,
            tags,
        });

        res.redirect('/add-food')
    });

    app.get('/player-data', function(req,res){
        res.render("player_data");
    })

    app.get("/display-food-summary", async (req,res)=>{
        let db = MongoUtil.getDB();
        let foodRecords = await db
            .collection("testingOne.food")
            .find()
            .toArray();
        res.render("display_food_summary",{
            foodRecords
        });
    });

    

 
    app.listen(3000, () => {
    console.log("Server started");
    });
}

main();
