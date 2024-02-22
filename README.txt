reatapp1 by Pukar Subedi

DESCRIPTION:
reatapp1 is a react application that has an authentication system.
server.js file utilizes express to create an api token.
reatapp1 login will verify the token and login.
reatapp1 utilizes Axios to fetch CoinGeko api data and display it.
reatapp1 also loads images.


INSTRUCTIONS TO USE:
you will need React, Node, and express. Start the server api by typing "node server.js"
in your terminal. Then "npm start" to run the react application. You should be able
to use all the features now, good luck!


FILES:
server.js - express server api that when started with "node server.js" runs on
            "http://localhost:8080/login"
Components/AxiosCoinGeko.js - Uses Axios to consume CoinGeko api and store data
Components/Dashboard.js - Used for testing
Components/Login.css - styles the login.js page
Components/Login.js - Login page that checks credentials
Components/Preferences.js - Used for testing