const express = require("express");
const {PORT} = require('./config/serverConfig');
const app = express();


const setUpAndStartServer = async () => {

app.listen(PORT, () => {
    console.log(`Server Started in ${PORT}`);
});

}

setUpAndStartServer();