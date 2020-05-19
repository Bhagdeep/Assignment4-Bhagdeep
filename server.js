/*
 * Write your server code in this file.
 *
 * name: Bhagdeep Sandhu
 * email: Sandhub@oregonstate.edu
 */
 var http = require("http");
 var fs = require('fs');


 var htmlContent = fs.readFileSync('public/index.html');
 var cssContent = fs.readFileSync('public/style.css');
 var jsContent = fs.readFileSync('public/index.js');
 var fourContent = fs.readFileSync('public/404.html');

 console.log("PORT:", process.env.PORT);

 function requestHandler(req, res) {
   console.log("method:", req.method);
   console.log("url:", req.url);
   console.log("headers:", req.headers);

   if ((req.url == '/index.html') || (req.url == '/')) {
     res.writeHead(200, {
       "Content-Type": "text/html"
     });
     res.write(htmlContent);
   }
   else if (req.url == '/style.css') {
     res.writeHead(200, {
       "Content-Type": "text/css"
     });
     res.write(cssContent);
   }
   else if (req.url == '/index.js') {
     res.writeHead(200, {
       "Content-Type": "text/js"
     });
     res.write(jsContent);
   }
   else if (req.url == '/404.html') {
     res.writeHead(200, {
       "Content-Type": "text/html"
     });
     res.write(fourContent);
   }
   else {
     res.writeHead(404, {
       "Content-Type": "text/html"
     });
     res.write(fourContent);
   }
   res.end();
 }

 var server = http.createServer(requestHandler);

 server.listen(3000, function (err) {
   console.log("Server running on port 3000");
 });
