const express = require('express');
const app = express();
// require ('dotenv').config();
// const PORT = process.env.PORT || 8000;


app.get('/', (req, res) => {
    res.send('Hello from Express server!'); // Respond with a simple message for the GET request
})
app.get('/api/get_users', (req, res) => {
    res.send({
        user:{
            name: "Chanthorn",
            age: 25,
            contact: 1029328378,
        }, env: process.env.NAME
    }); // Respond with a simple message for the GET request
})

app.listen(8000, () => {
    console.log(`Server is running on port 8000`);
});


// app.listen(process.env.PORT, () => {
//     console.log(`Server is running on port ${process.env.PORT}`);
// })

// app.listen(PORT, '0.0.0.0', () => {
//   console.log(`Server running on port ${PORT}`);
// });

