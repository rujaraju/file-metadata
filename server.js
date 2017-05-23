var express = require('express')
var app = express();
var multer  = require('multer')
var upload = multer();


app.get('/filemetadata', function(req, res) {
  res.sendFile('/home/ubuntu/workspace/filemetadata/hello.html')
})

app.post('/filemetadata/upload', upload.single('file'), function (req, res, next) {
  res.json({"size": req.file.size})

})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
})