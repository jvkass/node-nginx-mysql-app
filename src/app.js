const express = require('express');
const db = require('./db/index');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/add-name', async (req, res) => {
    const { name } = req.body;
    await db.insertName(name);
    const names = await db.getNames();
    res.send(`<h1>Full Cycle Rocks!</h1><ul>${names.map(n => `<li>${n}</li>`).join('')}</ul>`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});