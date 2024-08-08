import express from "express";
import bodyParser from "body-parser";
import methodOverride from "method-override";

const app = express();
const port = 8080;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method")); // Add method-override middleware

let data = {}; // Store data here temporarily

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/submit", (req, res) => {
    data = {
        opp: req.body.getsay,
        opau: req.body.getAuthor,
        oph: req.body.getHeading,
    };
    res.render("app.ejs", data);
});

app.put("/", (req, res) => {
    // Handle updating logic here, currently just redirects to index
    res.redirect("/");
});

app.delete("/delete", (req, res) => {
    data = { opp: "", opau: "", oph: "" }; // Clear the data
    res.render("app.ejs", data); // Re-render the app.ejs with cleared data
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
