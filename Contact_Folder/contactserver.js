const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://kishriya333:ofST5rgxS56EN0Ad@cluster0.f5c3uoi.mongodb.net/ContactFormDB?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB Atlas connected"))
  .catch(err => console.error("❌ Connection error", err));

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  status: String,
  college: String,
  collegeLocation: String,
  company: String,
  companyLocation: String,
  type: String,
  message: String
});

const Contact = mongoose.model("Contact", ContactSchema);

app.post("/submit", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(200).send("✅ Form submitted successfully");
  } catch (error) {
    res.status(500).send("❌ Error submitting form");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

