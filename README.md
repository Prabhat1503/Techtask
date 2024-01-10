# Techtask

### Description
This project is a web application designed to manage user authentication (signup and login) and handle a contact form submission. It uses Express.js as the server framework, MongoDB as the database to store user information and contact form data, and bcrypt for password hashing. The application consists of multiple HTML pages (e.g., index, login, signup, contact) that are connected to the backend server endpoints. Users can sign up for accounts, log in, and submit contact queries through the provided forms.

### Prerequisites
List any prerequisites or dependencies needed to run the project.
- Node.js
- MongoDB
- Express.js
- bcrypt

### Installation
1. Clone the repository: `git clone https://github.com/Prabhat1503/Techtask`
2. Navigate to the project directory: `cd project-directory`
3. Install dependencies: `npm install`

### Configuration
1. Ensure you have MongoDB installed and running.
2. Set up the MongoDB connection URI in the index.js file:
   ```javascript
   // Replace '<dbname>' with your database name
   mongoose.connect('mongodb+srv://username:password@your-cluster.mongodb.net/<dbname>', {
       useNewUrlParser: true,
       useUnifiedTopology: true,
   });
   ```

### Running the Application
1. Start the server: `node index.js`
2. Open a web browser and access the application at `http://localhost:3000` or `https://prabhat-tech-task.onrender.com``

### Usage
#### Index page
- Access all the pages by navigating to `http://localhost:3000`
![Alt text](index.png)


#### Signup
- Access the signup page by navigating to `http://localhost:3000/signup`
- Fill in the required details and click "Create Account"
![Alt text](signup.png)

#### Login
- Access the login page by navigating to `http://localhost:3000/login`
- Enter your credentials and click "Login"
![Alt text](image.png)

#### Contact Us
- Access the contact page by navigating to `http://localhost:3000/contact`
- Fill in the contact form and submit
![Alt text](contactus-1.png)

### Database connectivity
- By running server.js file you can easily connect with the database.
![Alt text](database.png)

### Other Relavent Screenshots of the project

