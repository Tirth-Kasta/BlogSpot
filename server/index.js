require("dotenv").config();
const express = require('express');
const app = express();
app.use(express.json());
const PORT = process.env.PORT;
const dbConnect = require('./db');
const cors = require('cors')
const routes = require('./router/routes')



var corsOptions = {
  origin: '*',
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true
};
app.use(cors(corsOptions));



dbConnect().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running on port ${PORT}`)
    })
})

app.use('/api/v1',routes);