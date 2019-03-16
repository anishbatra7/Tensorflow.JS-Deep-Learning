let express = require("express");
let app = express();

app.use(function(req, res, next) {
    console.log(`${new Date()} - ${req.method} request for ${req.url}`);
    next();
});

app.use(express.static("./static"));

app.get("/", function (req, res) {
 	res.sendfile('./static/predict-with-tfjs.html');
});

app.listen(process.env.PORT || 81, function() {
    console.log("Serving static on 81");
});