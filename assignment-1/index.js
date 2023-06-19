
const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {

    const URL = request.url;

    console.log(`${new Date().toISOString()} ${request.method} ${request.url}`);

    switch (URL) {
        case '/': {
            const content = Home();
            response.write(content);
            break;
        }
        case '/about': {
            const content = About();
            response.write(content);
            break;
        }
        case '/dashboard': {
            const content = Dashboard();
            response.write(content);
            break;
        }
        case '/hang': {
            while (true);
            break;
        }
        default: {
            const content = NotFound();
            response.write(content);
            break;
        }
    }

    response.end();

});

function Home() {
    const fileContent = fs.readFileSync('./pages/index.html', 'utf8');
    return fileContent;
}

function About() {
    const fileContent = fs.readFileSync('./pages/about.html', 'utf8');
    return fileContent;
}

function Dashboard() {
    const fileContent = fs.readFileSync('./pages/dashboard.html', 'utf8');
    return fileContent;
}

function NotFound() {
    const fileContent = fs.readFileSync('./pages/404.html', 'utf8');
    return fileContent;
}


const PORT = process.env.PORT || 4500;

server.listen(PORT, () => {
    console.log(`Server started listening on port: ${PORT}`);
})