const express = require('express');
const app = express();
app.use(express.static("./dist/cornertree-front"));

app.get("/*", function (req, res) {
  res.sendFile("index.html", { root: "./dist/cornertree-front" });
});

// app.listen(process.env.PORT || 8080);

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});
