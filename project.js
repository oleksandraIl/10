const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/file') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end('Файл не знайдено');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    } else {
        res.writeHead(404);
        res.end('Сторінка не знайдена');
    }
});

server.listen(3000, () => {
    console.log('Сервер запущено на порті 3000');
});
