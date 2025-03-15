const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');

dotenv.config();

 const app = express();

//Middlewaге
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(require('./middleware/formatResponse'));

//Routes (to be defined later)
app.use(express.static('public'));
app.get("/api-docs", (req, res) => {
res.sendFile(path.join(_dirname, 'public', 'docs.html'));
});
app.use('/users', require('./routes/users'));
app.use('/posts', requirel('./routes/posts'));

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Social Media API '});
});

// Error handler middleware (to be defined later)
app.use(require('./middleware/errorHandler'));

const PORT = process.env. PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
console.log(`Server running in development mode on port ${PORT}`);
});

process.on('unhandled Rejection', (err, promise) => {
console.log(`Error: ${err.message}`);

process.exit(1);
});

app.use(require('./middleware/formatResponse'));