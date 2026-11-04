🎂 Cake Shop
A sweeter way to shop!

<p align="center">
<img src="https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js&logoColor=white" />
<img src="https://img.shields.io/badge/Express.js-Framework-black?style=for-the-badge&logo=express" />
<img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
<img src="https://img.shields.io/badge/EJS-Template-orange?style=for-the-badge" />
</p>

<p align="center">
A modern online cake shopping platform built to make discovering, exploring and ordering delicious cakes simple and convenient.
</p>

<p align="center">
<a href="#-features">Features</a> •
<a href="#-installation">Installation</a> •
<a href="#-project-architecture">Architecture</a> •
<a href="#-contributing">Contribute</a>
</p>

🍰 About The Project

Cake Shop is a web-based e-commerce application designed to provide customers with a convenient online cake shopping experience.

The application brings together product discovery, customer authentication, shopping cart management, order processing and administrative functionality.

The project uses a modular backend architecture with Node.js and Express.js, MongoDB for database management and EJS for dynamic page rendering.

🎯 Project Goals
Create a simple and convenient cake shopping experience.
Provide secure customer authentication.
Organize products into categories.
Make product discovery easier.
Support shopping cart and order functionality.
Provide administrative capabilities.
✨ Features
Feature	Description
👤 Authentication	Customer registration and login
🍰 Product Browsing	Explore available cakes
🔍 Search	Search for products
🏷️ Categories	Browse products by category
🛒 Shopping Cart	Manage shopping cart
📦 Orders	Order management
💳 Payments	Payment-related functionality
🛠️ Admin	Administrative functionality
👨 Profile	Customer profile management
🛠️ Technology Stack
Backend
Node.js
Express.js
MongoDB
Mongoose
Frontend
HTML5
CSS3
JavaScript
EJS
Libraries and Tools
bcryptjs
jsonwebtoken
dotenv
cookie-parser
multer
Git and GitHub
📂 Project Structure
text
cake/
│
├── config/
│
├── controllers/
│
├── middlewares/
│
├── models/
│
├── public/
│
├── routes/
│   ├── authroutes.js
│   ├── homeRoutes.js
│   ├── productRoutes.js
│   ├── cartRoutes.js
│   ├── orderRoutes.js
│   ├── paymentRoutes.js
│   └── adminRoutes.js
│
├── views/
│
├── app.js
├── productcache.js
├── package.json
├── package-lock.json
└── README.md

🏗️ Project Architecture

The application follows a modular MVC-inspired architecture.

mermaid
flowchart TD
    A["👤 Customer / Admin"] --> B["Express Application"]
    B --> C["Routes"]
    C --> D["Controllers"]
    D --> E["Models"]
    E --> F[("MongoDB")]
    D --> G["EJS Views"]
    G --> H["Browser"]
    H --> A

Architecture Components
Component	Responsibility
Config	Database configuration
Routes	Handles application endpoints
Controllers	Contains application logic
Models	Defines database structures
Middlewares	Processes incoming requests
Views	Renders application pages
Public	Stores static assets
🚀 Installation

Follow these steps to run the project locally.

Prerequisites

Make sure you have installed:

Node.js
MongoDB
Git
1. Clone the Repository
bash
git clone https://github.com/joy30000/cake.git

2. Navigate to the Project
bash
cd cake

3. Install Dependencies
bash
npm install

4. Configure Environment Variables

Create a .env file in the root directory.

env
MONGODB_URI=your_mongodb_connection_string


Replace the placeholder with your actual MongoDB connection string.

Never expose database credentials, API keys or secret tokens in a public repository.

5. Start the Application
bash
npm start


If a development script is configured in package.json, you can also use:

bash
npm run dev

6. Open in Browser
text
http://localhost:4000


Make sure the port matches your application configuration.

🔐 Environment Configuration
Variable	Purpose
MONGODB_URI	MongoDB connection string

Additional environment variables may be required depending on your authentication and payment configuration.

🌐 Application Routes
Authentication Routes
Method	Endpoint	Purpose
GET	/auth/signup	Registration page
POST	/auth/signup	Register customer
GET	/auth/signin	Login page
POST	/auth/signin	Authenticate customer
GET	/auth/signout	Sign out
GET	/auth/profile/:id	Customer profile
POST	/auth/profile-update	Update profile
Product Routes
Method	Endpoint	Purpose
GET	/products/list-products	List products
POST	/products/search	Search products
POST	/products/filter	Filter products
GET	/products/category/:category	Browse category
GET	/products/displayProducts/:id	Product details
Additional Route Groups
Route Prefix	Module
/home	Homepage
/cart	Shopping cart
/orders	Order management
/payment	Payment
/admin	Administration

For complete endpoint details, refer to the corresponding route files.

🔄 How The Application Works
mermaid
flowchart TD
    A["Visit Cake Shop"] --> B["Explore Products"]
    B --> C["Search or Filter Cakes"]
    C --> D["Select Product"]
    D --> E["Customer Authentication"]
    E --> F["Shopping Cart"]
    F --> G["Order Process"]
    G --> H["Payment Module"]
    H --> I["Order Management"]

Customer Workflow
Visit the Cake Shop website.
Browse available cakes.
Search or filter products.
Select a desired product.
Register or sign in.
Manage the shopping cart.
Continue to the order and payment modules.
💻 Development Guide
Adding a New Feature
Identify the appropriate route.
Create or update the controller.
Update the model if database changes are required.
Update the relevant EJS view.
Test the functionality.
Verify that existing features still work.
Development Best Practices
Keep controllers organized.
Use reusable middleware.
Validate incoming requests.
Protect sensitive environment variables.
Handle application errors properly.
Write meaningful commit messages.
Test important application workflows.
🤝 Contributing

Contributions are welcome!

If you would like to improve Cake Shop, follow these steps.

Contribution Workflow

1. Fork the repository

Click the Fork button on GitHub.

2. Clone your fork

bash
git clone YOUR_FORK_URL


3. Create a new branch

bash
git checkout -b feature/new-feature


4. Make your changes

Implement your feature or bug fix.

5. Commit your changes

bash
git add .
git commit -m "Add: new feature"


6. Push your branch

bash
git push origin feature/new-feature


7. Create a Pull Request

Submit your changes for review.

🔮 Future Improvements

Some ideas for future development:

Responsive design improvements
Product ratings and reviews
Wishlist functionality
Order tracking
Improved admin dashboard
Better product recommendations
Automated testing
Enhanced security and validation
Improved payment experience
📸 Screenshots

Want to showcase your application?

Add screenshots to your repository and update this section.

text
screenshots/
├── homepage.png
├── products.png
├── product-details.png
├── cart.png
└── admin-dashboard.png


Example:

markdown
![Cake Shop Homepage](screenshots/homepage.png)

👨‍💻 Author

joy30000

GitHub Profile:

https://github.com/joy30000

Project Repository:

https://github.com/joy30000/cake

📄 License

The project package configuration declares the ISC license. Refer to the repository's license file for the complete terms.

⭐ Support

If you like this project:

Give the repository a ⭐ Star.
Fork the project.
Share your feedback.
Contribute improvements.

<p align="center">
<strong>Made with ❤️ and a little extra sweetness.</strong>
</p>

<p align="center">
🎂 Cake Shop — Making every celebration sweeter!
</p>
