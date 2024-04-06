const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/submit-form', (req, res) => {
  const { name, email, phone } = req.body;
  console.log(`Received form submission: ${name}, ${email}, ${phone}`);
  res.json({ message: 'Form submitted successfully!' });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
