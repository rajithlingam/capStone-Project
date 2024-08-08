// index.js
import express from 'express';
import bodyParser from 'body-parser';

const app = express();

// Set up EJS as the template engine
app.set('view engine', 'ejs');

// Middleware to parse the request body
app.use(bodyParser.urlencoded({ extended: false }));

// Sample data
let items = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }];

// Route to display the form
app.get('/', (req, res) => {
  res.render('index', { items });
});

// Route to handle PUT request
app.put('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find(item => item.id === id);
  if (item) {
    item.name = req.body.name;
  }
  res.json({ message: 'Item updated', item });
});

// Route to handle DELETE request
app.delete('/items/:id', (req, res) => {
  items = items.filter(item => item.id !== parseInt(req.params.id));
  res.json({ message: 'Item deleted' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
