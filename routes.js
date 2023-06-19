const fs = require('fs');

const requestHandler = (req, res) => {
  // console.log(req)

  const url = req.url;
  const method = req.method;

  //Controller 1
  if (url === '/') {

    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }
  
  //Controller 2 
  if (url === '/message' && method === 'POST') {

    const body = [];

    req.on('data', chunk => {
      console.log(chunk);
      body.push(chunk);
    });

    //return :  Để chắc là thực hiện req.on..'end' trước khi thực hiện final cope : my first page 
    req.on('end', () => {

      const parsedBody = Buffer.concat(body).toString();

      const message = parsedBody.split('=')[1];

      fs.writeFile('message.txt', message, err => { // writeFile : không chặn 
        // redirect về home '/' (index page) khi có error 
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });

    });
  }

  // nếu không có return phía trên -> throw new ERR_HTTP_HEADERS_SENT('set')
  // can not set header sau khi sent to client (return res.end() phía trên )
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
  
};

exports.handler = requestHandler;

exports.someText = 'Some hard coded text';