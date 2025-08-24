const express = require('express');
const app = express();
require ('dotenv').config();


app.get('/api/get', (req, res) => {
    res.send('Hello from Express server!'); // Respond with a simple message for the GET request
})
app.get('/api/get_user', (req, res) => {
    res.send({
        user:{
            name: "Chanthorn",
            age: 25,
            contact: 1029328378,
        }, env: process.env.NAME
    }); // Respond with a simple message for the GET request
})

// app.listen(process.env.PORT, () => {
//     console.log('Server is running on port 8000');
// })

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});