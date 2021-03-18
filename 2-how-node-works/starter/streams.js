const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  //Solution 1
  //   fs.readFile("starter/test-file.txt", (err, data) => {
  //     if (err) console.log(err);
  //     res.end(data);
  //   });

  //Solution 2: Streams --- backpressure may be a problem
  //   const readable = fs.createReadStream("starter/test-file.txt");
  //   readable.on("data", (chunk) => {
  //     res.write(chunk);
  //   });

  //   readable.on("end", () => {
  //     res.end("Thats all folks");
  //   });

  //   readable.on("error", (err) => {
  //     console.log(err);
  //     res.statusCode = 500;
  //     res.end("File Not Found");
  //   });

  //Solution 3: Pipe
  const readable = fs.createReadStream("starter/tesst-file.txt");
  readable.pipe(res);
});

server.listen("8000", "127.0.0.1", () => {
  console.log("listening...");
});
