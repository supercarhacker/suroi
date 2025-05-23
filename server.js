const express = require('express');
const app = express();

// Use the port Render provides, or default to 8000 locally
const PORT = process.env.PORT || 8000;

// Example route
app.get('/', (req, res) => {
  res.send('🎮 Battle Royale server is running!');
});

// Start the server on all network interfaces
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
});
