const router = require('express').Router()
const ImageController = require('../controllers/image')
const upload = require('../middlewares/upload')

router.post('/upload', upload.single('file'), ImageController.upload)
/*
from postman 


{
    "_id": "5de9280c8012c72aae140a17",
    "url": "https://storage.googleapis.com/hydrogen-images/1575561226996-get-ios-11-default-wallpaper.jpg",
    "createdAt": "2019-12-05T15:53:48.795Z",
    "updatedAt": "2019-12-05T15:53:48.795Z"
}

*/
router.get('/', ImageController.find)
router.get('/:id', ImageController.findOne)

module.exports = router