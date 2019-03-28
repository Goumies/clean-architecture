const http = require("http");
const api = require("..");
const PORT = parseInt(process.env.PORT, 10) || 3000;

// server starting instructions
api().then(app => {
    const server = http.createServer(app);
    server.listen(PORT);
});
