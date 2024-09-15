const express = require('express');
const router = require('./router/route');
const path = require('path');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use(router);

app.get('/Data', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

