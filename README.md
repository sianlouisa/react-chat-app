This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## React Chat App

This simple chat app was built with React.js and Axios.

It allows users to enter a name, which is then saved to session storage and can be retrieved when they return.

Users can send and receive messages from the API once logged in.

## Install

1. Fork and clone this repository down.
2. Navigate to local root folder.
3. Run `npm i` to install all dependencies.
4. Create a config.js file in the api folder and enter the following line:

   ```
   export const TOKEN = "YOUR_TOKEN_HERE";
   ```

5. Ensure this file is included in your .gitignore.
6. Run `npm start` to run the app locally.
