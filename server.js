const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// --- Serve static files from the client build ---
const clientPath = path.join(__dirname, '../client/dist'); // or '../client/build'
app.use(express.static(clientPath));

// --- Example API route ---
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// --- Catch-all to serve index.html for SPA routing ---
app.get('*', (req, res) => {
  res.sendFile(path.join(clientPath, 'index.html'));
});

// --- Start the server ---
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
