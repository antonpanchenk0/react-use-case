# Project Description - Data Collection and Filtering Tool

## Overview

This project aims to develop a powerful data collection and filtering tool that performs calls to a public API and collects data in a chosen file format, such as JSON or XML. The tool will provide users with the ability to implement filtering rules, pagination functionality, and data sorting, enabling them to efficiently consume only the necessary data in selected amounts.

## Features

1. **API Data Collection**: The tool will be capable of making API calls to a specified public API to fetch data.

2. **Data Storage**: Users can choose the desired file format (JSON, XML, etc.) to save the collected data for easy access and manipulation.

3. **Filtering Rules**: Users will have the ability to define filtering rules based on specific criteria. This feature ensures that only relevant data is collected and stored.

4. **Pagination Functionality**: To manage large datasets efficiently, the tool will support pagination, allowing users to retrieve data in smaller, manageable chunks.

5. **Data Sorting**: Users can sort the collected data based on various parameters, enabling seamless and effective consumption of the dataset.

## How it works

1. **API Integration**: The tool will provide an interface for users to input the endpoint of the public API they wish to fetch data from.

2. **Data Collection**: Upon initiating the process, the tool will send requests to the API and retrieve the relevant data.

3. **Filtering**: Users can specify filtering criteria, such as date range, keywords, or specific attributes, to collect only the data that meets their requirements.

4. **Pagination**: To handle large datasets, the tool will divide the data into pages and allow users to choose the number of items per page.

5. **Sorting**: Users can choose the data sorting parameters, such as ascending or descending order, and sort the data accordingly.

6. **Save Data**: Once the desired data is collected, filtered, paginated, and sorted, users can choose the file format (JSON, XML, etc.) to save the data for future use.

## Benefits

- Provides an efficient and customizable way to collect and manage data from a public API.
- Saves time and resources by filtering and paginating data according to user preferences.
- Enables users to easily sort and access data in a seamless manner.
- Offers flexibility in choosing the output file format, making it easier to integrate the data with other applications.

# How to Run in Development and Production Mode

This README.md file provides a step-by-step guide on how to run a React application in both development and production modes. Before proceeding, make sure you have Node.js and npm (Node Package Manager) installed on your system. If not, you can download and install them from the official Node.js website (https://nodejs.org/).

## Install Dependencies
Before running the application, you need to install the required dependencies. In the project directory, run the following command:

```bash
npm install
```

This will install all the necessary packages specified in the package.json file.

## Run in Development Mode
To run the React application in development mode, use the following command:

```bash
npm start
```

This will start the development server, and your application will be available at http://localhost:3000 by default. Any changes you make to the code will automatically trigger a hot-reload, allowing you to see the changes in the browser without manually refreshing the page.

## Build for Production
When you're ready to deploy your React application to production, you need to build the optimized production-ready bundle. Run the following command:

```bash
npm run build
```

This will create a build folder in your project directory, containing all the necessary files to deploy your application.

## Run in Production Mode
To run the React application in production mode, you can use a static server to serve the built files. There are various ways to achieve this, but one common method is by using the serve package. If you don't have it installed globally, you can install it with the following command:

```bash
npm install -g serve
```

Once serve is installed, navigate to your project directory and run the following command:

```bash
serve -s build
```

This will serve your application at http://localhost:5000. Note that the port number (5000 in this case) might vary depending on your system's configuration.

# Congratulations!
Your React application is now up and running both in development and production modes. When running in production, your application will be optimized for performance and ready to be deployed to a web server or a cloud platform of your choice.

Remember to update this README.md file with any specific instructions or additional steps required for your particular React application. Happy coding!