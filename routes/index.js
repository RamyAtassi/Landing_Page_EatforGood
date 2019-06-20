var express = require("express");
var router = express.Router();
var request = require("request");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index");
});

router.get("/cgu", function(req, res, next) {
  res.render("cgu", { title: "Express" });
});

router.post("/inscription", function(req, res, next) {
  //console.log("Reception de l'email -->", req.body);
  request(
    `https://hooks.zapier.com/hooks/catch/4606809/vzqbep/?email=${
      req.body.email
    }`,
    function(err, res, body) {
      if (err) {
        console.log(err);
      }
    }
  );
  res.render("index");
});

module.exports = router;
