// Import the built-in http module
const http = require("http");

const fs = require('fs').promises; // Async file system methods
const path = require('path'); // For handling file paths

// Create a server
const server = http.createServer(async (req, res) => {
  // Only handle requests to the root URL ('/')
  if (req.url === '/') {
    try {
      // Get the absolute path to index.html
      const htmlPath = path.join(__dirname, 'index.html');
      // Read the file content as a string
      const htmlContent = await fs.readFile(htmlPath, 'utf8');
 
      // Send response: 200 OK, Content-Type = text/html
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(htmlContent);
    } catch (err) {
      // Handle errors (e.g., file not found)
      console.error('Error reading index.html:', err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    }
  } else {
    // Handle other URLs (we’ll add 404 handling next)
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});
 
const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});