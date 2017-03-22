# Ready Offline Book Store
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

It uses :
- Redux for State Management
- Redux Persist for storing state in localStorage (offline mode)
- React Router for application router
- Material-UI for UI components
- axios (for creating XMLHttpRequests)
- sw-precache for caching static content (offline mode)
- json-server for creating fake RESTful api
- etc..

It has 4  routes:
- `/` Home Page (Show All Available Books)
- `/order-history` Order History Page
- `/checkout` Checkout Page
- `/admin` Admin Page (Create/ Add New Book)

## Setup 

### `npm install`
Install all dependencies

### `node api-server.js`
Run Fake RESTFul server on <http://localhost:3004>



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**