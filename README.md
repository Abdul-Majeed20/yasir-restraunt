# Yasir Restaurant Website

A modern, responsive restaurant website built with React.js for Yasir Restaurant, an authentic Pakistani restaurant located on NH-22 Indus Highway in Jamshoro.

![Yasir Restaurant Website](https://via.placeholder.com/1200x630?text=Yasir+Restaurant+Website)

## 🌐 Live Demo

**[View Live Website](https://yasir-restaurant.netlify.app)** *(Replace with your actual Netlify URL after deployment)*

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Screenshots](#screenshots)
- [Credits](#credits)
- [License](#license)

## 🍽️ Overview

Yasir Restaurant is a modern restaurant website that showcases authentic Pakistani cuisine, the restaurant's rich history since 2010, and its prime location along the NH-22 National Indus Highway in Jamshoro. The website features a elegant design with a dark navy and teal color scheme, responsive layout, and interactive elements that provide visitors with an immersive experience.

## ✨ Features

- **Fully Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Modern UI/UX** - Clean, elegant design with smooth animations
- **Interactive Gallery** - Scrollable photo gallery with hover effects
- **Google Maps Integration** - Interactive location map with directions
- **Dynamic Menu Display** - Showcases traditional Pakistani beverages and dishes
- **Contact Information** - Complete restaurant details and working hours
- **Social Media Links** - Integrated social media icons
- **Newsletter Section** - Email subscription component
- **Optimized Performance** - Lazy loading images and smooth scrolling

## 🛠️ Tech Stack

- **Frontend Framework:** React.js
- **Styling:** CSS3 with custom properties (variables)
- **Icons:** React Icons (Fi, Bs libraries)
- **Maps:** Google Maps Embed API
- **Fonts:** Google Fonts (Playfair Display, Inter, Space Grotesk)
- **Deployment:** Netlify

## 📁 Project Structure

yasir-restaurant/
├── public/
│ └── index.html
├── src/
│ ├── assets/
│ │ └── images/
│ ├── components/
│ │ ├── Navbar/
│ │ ├── MenuItem/
│ │ ├── SubHeading/
│ │ └── ...
│ ├── constants/
│ │ ├── images.js
│ │ └── data.js
│ ├── container/
│ │ ├── AboutUs/
│ │ ├── Chef/
│ │ ├── FindUs/
│ │ ├── Footer/
│ │ ├── Gallery/
│ │ ├── Header/
│ │ ├── Intro/
│ │ ├── Laurels/
│ │ └── SpecialMenu/
│ ├── App.js
│ ├── App.css
│ ├── index.js
│ └── index.css
├── .gitignore
├── package.json
├── README.md
└── netlify.toml (optional)

text

## 🚀 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/yasir-restaurant.git
   cd yasir-restaurant
Install dependencies

bash
npm install
# or
yarn install
Start the development server

bash
npm start
# or
yarn start
Open your browser
Navigate to http://localhost:3000 to view the website

📦 Usage
Development
Run the development server with hot reload:

bash
npm start
Build for Production
Create an optimized production build:

bash
npm run build
The build artifacts will be stored in the build/ folder.

Preview Production Build
bash
npm run serve
🌍 Deployment
Deploy to Netlify
Build the project

bash
npm run build
Drag and drop the build folder to Netlify

Log in to Netlify

Drag the build folder to the deployment area

Your site will be live at a random URL

Connect GitHub for automatic deployments (Recommended)

Click "New site from Git"

Connect your GitHub repository

Set build command: npm run build

Set publish directory: build

Click "Deploy site"

Custom Domain (Optional)

In Netlify dashboard, go to "Domain settings"

Add your custom domain or use the provided netlify.app URL

Netlify Deployment Configuration
Create a netlify.toml file in the root directory:

toml
[build]
  command = "npm run build"
  publish = "build"

[build.environment]
  NODE_VERSION = "16"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
📸 Screenshots
Homepage
https://via.placeholder.com/800x400?text=Homepage+Screenshot

Menu Section
https://via.placeholder.com/800x400?text=Menu+Section

About Us
https://via.placeholder.com/800x400?text=About+Us

Gallery
https://via.placeholder.com/800x400?text=Gallery

Location Map
https://via.placeholder.com/800x400?text=Location+Map

🎨 Color Scheme
Color	Hex Code	Usage
Deep Navy	#0A192F	Primary Background
Mint Teal	#64FFDA	Accent Color, Headers
Cool Gray	#8892B0	Body Text
Off-White	#E6F1FF	Headings
Dark Blue	#020C1B	Secondary Background
📱 Responsive Breakpoints
Desktop: 2000px+ (ultra-wide)

Laptop: 1150px - 1999px

Tablet: 850px - 1149px

Mobile: 650px - 849px

Small Mobile: 450px - 649px

🔧 Customization
Update Content
Restaurant Information: Edit src/container/FindUs/FindUs.js

Menu Items: Update src/constants/data.js

Images: Replace images in src/assets/images/ and update src/constants/images.js

Change Color Theme
Modify the CSS variables in src/index.css:

css
:root {
  --color-primary: #0A192F;    /* Primary background */
  --color-secondary: #64FFDA;   /* Accent color */
  --color-gray: #8892B0;        /* Text color */
  /* ... other variables */
}
📄 Credits
Original inspiration from JS Mastery tutorial

Customized and enhanced for Yasir Restaurant

Icons by React Icons

Fonts by Google Fonts

👨‍💻 Author
Abdul Majeed

GitHub: https://github.com/abdul-Majeed20/

Portfolio: https://my-portfolio-three-weld-91.vercel.app/

LinkedIn: www.linkedin.com/in/abdul-majeed-baloch

📞 Contact
For any inquiries or collaboration opportunities:

Email: abdulmajeed.professional@gmail.com

LinkedIn :www.linkedin.com/in/abdul-majeed-baloch

📝 License
This project is open source and available under the MIT License.

🚀 Quick Deployment Checklist
Replace placeholder images with actual screenshots

Update your name and contact information

Add actual Netlify URL after deployment

Update email and phone numbers in the code

Test all links and map functionality

Optimize images for production

Add favicon

Update meta tags for SEO

Submit sitemap to search engines

⭐ Don't forget to star this repository if you found it helpful!

