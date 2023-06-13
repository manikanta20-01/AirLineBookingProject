const express = require("express");
const app = express();

const PORT = 3000;
const setUpAndStartServer = async () => {


app.listen(PORT, () => {
    console.log(`Server Started in ${PORT}`);
});

}

setUpAndStartServer();