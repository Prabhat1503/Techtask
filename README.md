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
2. Open a web browser and access the application at `http://localhost:3000` or `https://prabhat-tech-task.onrender.com``

### Usage
#### Index page
- Access all the pages by navigating to `http://localhost:3000`
![index](https://github.com/Prabhat1503/Techtask/assets/121659603/ca7dfafd-0a2c-4e4a-9520-e17b7d3467e2)



#### Signup
- Access the signup page by navigating to `http://localhost:3000/signup`
- Fill in the required details and click "Create Account"
![signup](https://github.com/Prabhat1503/Techtask/assets/121659603/5181130e-3d6b-474c-8d66-5ea79d0f5392)


#### Login
- Access the login page by navigating to `http://localhost:3000/login`
- Enter your credentials and click "Login"
- ![image](https://github.com/Prabhat1503/Techtask/assets/121659603/440550dc-76a0-4dda-be52-8bb87bd9dd01)



#### Contact Us
- Access the contact page by navigating to `http://localhost:3000/contact`
- Fill in the contact form and submit
![contactus](https://github.com/Prabhat1503/Techtask/assets/121659603/689e92b7-3afd-4f55-bdc5-23adb3306b52)


### Database connectivity
- By running server.js file you can easily connect with the database.
![database](https://github.com/Prabhat1503/Techtask/assets/121659603/b80dd37c-6efa-45a4-a948-7f42720a10d8)

### Other Relavent Screenshots of the project


