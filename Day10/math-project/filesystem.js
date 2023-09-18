const fs = require("fs");

fs.readFile("./tekst.txt", "utf-8", (err, file) => {
  console.log(err, file);
});

const text = fs.readFileSync("./tekst.txt", "utf-8");
console.log(text);
