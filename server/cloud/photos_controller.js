var cloudinary = require('cloudinary').v2;
var product = require('../../api/product/product.model');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();



function add_direct(req, res) {
  // Configuring cloudinary_cors direct upload to support old IE versions
  var cloudinary_cors = "http://" + req.headers.host + "/cloudinary_cors.html";
  // Create a new photo model and set it's default title
  var photo = new Photo();
  Photo.count().then(function (amount) {
        photo.title = "My Photo #" + (amount + 1) + " (direct)";
      })
      .finally(function () {
        res.render('photos/add_direct', {
          photo: photo,
          cloudinary_cors: cloudinary_cors
        });
      });
}

function create_direct(req, res) {
  // In direct mode, the image is uploaded to Cloudinary by the browser,
  // and upload metadata is available in JavaScript (see add_direct.ejs).
  var result = {};
  var photo = new Photo(req.body);
  result.photo = photo;
  // image was not uploaded, returning to edit form
  if (!req.body.image_id) {
    if (req.body.type == 'direct') {
      res.redirect('/photos/add_direct')
    } else {
      res.redirect('/photos/add_direct_unsigned')
    }
    return;
  }
  var image = new cloudinary.PreloadedFile(req.body.image_id);
  // check that image resolved from image_id is valid
  if (image.is_valid()) {
    photo.image = image.toJSON();
    console.dir(photo.image)
  }
  photo.save().then(function (photo) {
        console.log('** photo saved')
      })
      .catch(function (err) {
        result.error = err;
        console.log('** error while uploading file');
        console.dir(err)
      }).finally(function () {
    res.render('photos/create_direct', {photo: photo, upload: photo.image});
  });
}



module.exports.wire = function (app) {
  // index
  app.get('/', index);
  app.get('/product', index);

  // direct photo upload examples
  app.get('/product', add_direct);
  app.post('/product', create_direct);
};
