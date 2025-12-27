const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const User = require("./models/userdata");
const dotenv = require("dotenv");
dotenv.config();


const dbUrl = process.env.ATLASDB_URL;

async function main() {
    mongoose.connect(dbUrl);
}

main()
    .then(() => {
        console.log("Connected to the DataBase !");
    })
    .catch(err => {
        console.log(err);
    });



app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.send("this is root route.");
});

app.get("/home", (req, res) => {
    res.render("includes/home.ejs");
});

app.get("/login", (req, res) => {
    res.render("includes/login.ejs");
});

app.get("/test", (req, res) => {
    res.render("includes/test.ejs");
});

app.get("/sign-in", (req, res) => {
    res.render("includes/sign-in.ejs");
});


app.get("/free_hand", (req, res) => {
    res.render("includes/free_hand.ejs");
});

app.get("/test/1minutetest", (req, res) => {
    res.render("includes/one_min_test.ejs");
});

app.get("/test/2minutetest", (req, res) => {
    res.render("includes/two_min_test.ejs");
});

app.get("/test/5minutetest", (req, res) => {
    res.render("includes/five_min_test.ejs");
});

app.get("/logged-in", (req, res) => {
    res.render("includes/logged-in.ejs");
});

app.get("/games", (req, res) => {
    res.render("includes/games.ejs");
});

app.get("/guess", (req, res) => {
    res.render("includes/user_home.ejs");
});

app.post("/logged-in", async (req, res) => {
    try {
        const newUser = req.body.user;
        const user = await User.findOne({ email_id: newUser.email_id });

        if (!user) {
            return res.send("This Email ID does not exist. Please go to the Sign In or Register page.");
        }

        res.render("includes/home.ejs", { user });
    } catch (error) {
        console.error("Error in /logged-in:", error);
        res.status(500).send("Internal Server Error");
    }
});


app.post("/home", async (req, res) => {
    let user = req.body.user;
    let result = await User.findOne({ email_id: user.email_id });
    if (!result) {
        const newUser = new User(user);
        await newUser.save();
        await res.redirect("/home");
    }
    res.send("The Email Id Already Exist. Please Log In.");
});




app.listen(8080, () => {
    console.log("app is listening on port 8080");
});