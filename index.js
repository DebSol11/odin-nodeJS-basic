// Import the built-in http module
const http = require("http");

const fs = require("fs").promises; // Async file system methods
const path = require("path"); // For handling file paths

// Create a server
const server = http.createServer(async (req, res) => {
  // Only handle requests to the root URL ('/')
  if (req.url === "/") {
    try {
      // Get the absolute path to index.html
      const htmlPath = path.join(__dirname, "index.html");
      // Read the file content as a string
      const htmlContent = await fs.readFile(htmlPath, "utf8");

      // Send response: 200 OK, Content-Type = text/html
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(htmlContent);
    } catch (err) {
      // Handle errors (e.g., file not found)
      console.error("Error reading index.html:", err);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    }
  } else if (req.url === "/about") {
    try {
      const htmlPath = path.join(__dirname, "/about.html");
      const htmlContent = await fs.readFile(htmlPath, "utf8");
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(htmlContent);
    } catch (err) {
      console.error("Error reading index.html:", err);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    }
  } else if (req.url === "/contact-me") {
    try {
      const htmlPath = path.join(__dirname, "/contact-me.html");
      const htmlContent = await fs.readFile(htmlPath, "utf8");
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(htmlContent);
    } catch (err) {
      console.error("Error reading index.html:", err);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    }
  } else {
    // Serve 404.html for all other URLs
    try {
      const notFoundPath = path.join(__dirname, "404.html");
      const notFoundContent = await fs.readFile(notFoundPath, "utf8");
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end(notFoundContent);
    } catch (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    }
  }
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
