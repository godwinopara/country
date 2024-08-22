# Country Explorer

Country Explorer is a React application that allows users to browse and explore detailed information about countries around the world. The project uses the [REST Countries API](https://restcountries.com/) to fetch and display data about various countries. Users can view a list of countries, click on a country to see detailed information, and navigate back to the list.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Country List:** View a list of all countries, displaying basic information such as the country's name and flag.
- **Country Details:** Click on a country to view detailed information, including population, region, capital, currencies, languages, and more.
- **Responsive Design:** The application is fully responsive, providing a seamless experience on mobile, tablet, and desktop devices.
- **TypeScript Support:** Strong typing with TypeScript ensures code quality and reduces runtime errors.

## Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/country-explorer.git

2. Navigate to the project directory:
 
  ```bash
    cd country-explorer

3. Install Dependencies:
  
  ```bash
    npm install
      # or if you're using yarn
    yarn install

4 Start the development server:

  ```bash
      npm start
        # or if you're using yarn
      yarn start
    
5 Open your browser and go to http://localhost:3000 to see the app in action.

## Usage

### Viewing Countries
On the homepage, you can view a list of countries. The list is fetched from the [REST Countries API](https://restcountries.com/) and displayed in a grid layout.

### Country Details
Click on a country card to view more details about the country, including its flag, population, region, capital, and more.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **TypeScript**: Superset of JavaScript that adds static types.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Router**: Library for handling routing in React.
- **REST Countries API**: External API used to fetch country data.

## API Reference

This project uses the [REST Countries API](https://restcountries.com/) to retrieve country data.

### Endpoints Used

- **Get All Countries**: `https://restcountries.com/v3.1/all`
- **Get Country by Name**: `https://restcountries.com/v3.1/name/{name}`




