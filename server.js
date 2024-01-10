const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const path = require('path');

const app = express();

// Connect to MongoDB (Replace '<dbname>' with your database name)
mongoose.connect('mongodb+srv://prabhatupadhyay282:YdEYdajFOORu52iE@page.r4hczpf.mongodb.net/<dbname>', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Set up middleware for parsing JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

// User schema
const userSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    password: String,
});

const User = mongoose.model('User', userSchema);

// Handle signup POST request
app.post('/signup', async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        // Check if any required field is missing
        if (!fullName || !email || !password) {
            return res.status(400).send('All fields are required');
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).send('User already exists');
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        // const hashedPassword = password;


        // Create new user
        const newUser = new User({
            fullName,
            email,
            password: hashedPassword,
        });

        // Save user to the database
        await newUser.save();

        // Send success message
        res.status(200).send('Signup successful!');
    } catch (err) {
        console.error(err); // Log the actual error for debugging purposes
        res.status(500).send('Error signing up. Please try again.'); // Generic error message for the client
    }
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("data",email, password);
        const user = await User.findOne({email});
        const allUser = await User.find({});
        console.log(user,'user')


        if (!user) {
            return res.status(404).send('User not found');
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        // const passwordMatch = password === user.password ? true : false;
        console.log("matching",passwordMatch, password, user.password)

        if (passwordMatch) {
            res.status(200).send('Login successful!');
        } else {
            res.status(401).send('Incorrect password');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error logging in');
    }
});

// Define a route to handle the contact form submission
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    // For now, log the received data to the console
    console.log('Received contact form data:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Here, you can perform further actions like sending emails, storing data, etc.

    // Send a response to indicate successful form submission
    res.status(200).send('Message received! We will get back to you soon.');
});

// ... (other routes and server setup)




const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
