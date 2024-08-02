const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/bfhl', (req, res) => {
    try {
        const { data } = req.body;
        const user_id = "john_doe_17091999";  // Example user_id
        const email = "john@xyz.com";         // Example email
        const roll_number = "ABCD123";        // Example roll number

        const numbers = data.filter(item => /^\d+$/.test(item));
        const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));
        const highest_alphabet = alphabets.length > 0 ? [alphabets.sort().pop()] : [];

        res.json({
            is_success: true,
            user_id,
            email,
            roll_number,
            numbers,
            alphabets,
            highest_alphabet
        });
    } catch (error) {
        res.json({
            is_success: false,
            user_id: "",
            email: "",
            roll_number: "",
            numbers: [],
            alphabets: [],
            highest_alphabet: []
        });
    }
});

app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
