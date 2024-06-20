//
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const mongoURI = "mongodb+srv://manoharkanth:KITymkgugJ2VgrkG@manohar.dk7cq5t.mongodb.net/?retryWrites=true&w=majority&appName=Manohar";


mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

const formSchema = new mongoose.Schema({
    name: String,
    Lname: String,
    email: String,
    number: String,
    comment: String
});

const Form = mongoose.model("Form", formSchema);

app.use(cors());
app.use(bodyParser.json());

app.post("/submit", (req, res) => {
    const newForm = new Form(req.body);
    newForm.save()
        .then(() => res.status(200).json("Form submitted"))
        .catch(err => res.status(400).json("Error: " + err));
});

app.get("/forms", (req, res) => {
    Form.find()
        .then(forms => res.json(forms))
        .catch(err => res.status(400).json("Error: " + err));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
});

