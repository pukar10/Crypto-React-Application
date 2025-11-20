<div align="center">
            
# Crypto React App

</div>

### Description
* React application utilizing an authentication system.
* Utilizes express to create api tokens. Login will verify the token and login.
* Utilizes Axios to fetch CoinGeko api data and display it.
* React application will also optimize loading of images.

#### Files
* `server.js` - Express server api when started runs on `http://localhost:8080/login`
* `Components/AxiosCoinGeko.js` - Uses Axios to consume CoinGeko api and store data
* `Components/Dashboard.js` - Testing
* `Components/Login.css` - Styles the login.js page
* `Components/Login.js` - Authentication page
* `Components/Preferences.js` - Testing

### Local Setup
#### Prerequisites
* React
* Node
* Express  

1. Start server api with `node server.js`.
2. Go to http://localhost:8080/login (password is test123).
3. `npm start` to run the react application (http://localhost:3000/).
4. Username: `user` Password: `test123`

Success!
