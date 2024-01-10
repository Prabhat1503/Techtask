# Techtask
This project is a web application designed to manage user authentication (signup and login) and handle a contact form submission. It uses Express.js as the server framework, MongoDB as the database to store user information and contact form data, and bcrypt for password hashing. The application consists of multiple HTML pages (e.g., index, login, signup, contact) that are connected to the backend server endpoints. Users can sign up for accounts, log in, and submit contact queries through the provided forms.


### Description
Briefly describe your project here.

### Prerequisites
List any prerequisites or dependencies needed to run the project.
- Node.js
- MongoDB
- Express.js
- bcrypt

### Installation
1. Clone the repository: `git clone <https://github.com/Prabhat1503/Techtask>`
2. Navigate to the project directory: `cd project-directory`
3. Install dependencies: `npm install`

### Configuration
1. Ensure you have MongoDB installed and running.
2. Set up the MongoDB connection URI in the server.js file:
   ```javascript
   // Replace '<dbname>' with your database name
   mongoose.connect('mongodb+srv://username:password@your-cluster.mongodb.net/<dbname>', {
       useNewUrlParser: true,
       useUnifiedTopology: true,
   });
   ```

### Running the Application
1. Start the server: `node server.js`
2. Open a web browser and access the application at `http://localhost:3000`

### Usage

#### Signup
- Access the signup page by navigating to `http://localhost:3000/signup`
- Fill in the required details and click "Create Account"

#### Login
- Access the login page by navigating to `http://localhost:3000/login`
- Enter your credentials and click "Login"

#### Contact Us
- Access the contact page by navigating to `http://localhost:3000/contact`
- Fill in the contact form and submit

### Additional Notes
Add any extra information, troubleshooting steps, or other relevant details here.

---

Feel free to tailor this README according to your project's specifics. If there's more information you'd like to include or if you need details on a particular aspect, just let me know!