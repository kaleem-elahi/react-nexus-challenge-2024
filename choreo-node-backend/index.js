const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const todos = [
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Learn Node.js' },
    { id: 3, text: 'Deploy on Choreo' }
];

app.get('/todos', (req, res) => {
    res.json(todos);
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
