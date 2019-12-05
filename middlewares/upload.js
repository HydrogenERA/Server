const gcsUpload = require('gcs-upload')

module.exports = gcsUpload({
  limits: {
    fileSize : 1e6
  },
  gcsConfig: {
    keyFilename: './keyfile.json',
    bucketName: 'hydrogen-images'
  }
})