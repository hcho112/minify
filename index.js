const imagemin = require('imagemin')
const imageminMozjpeg = require('imagemin-mozjpeg')
const imageminPngquant = require('imagemin-pngquant')
const recursive = require('recursive-readdir')
const ProgressBar = require('progress')
const prompt = require('prompt')
const fs = require('fs-utils')


const { minify } = require('./minify.js')

console.log('Image minifier begin')

prompt.start();

const qualityValidation = {
  name: 'quality',
  description: 'Enter quality value between 1~100 (%)',
  type: 'integer',
  conform: value => {
    if(Number.isInteger(value) && value > 0 && value <= 100) {
      return true
    }
    return false
  },
  message: 'quality must be an integer and range between 1~100',
  default: 20
}

const sourcePathValidation = {
  name: 'sourcePath',
  description: 'Enter full path of source images are stored at',
  type: 'string',
  conform: path => {
    if (fs.isDir(path)) {
      return true
    }
    return false
  },
  message: 'Inserted source path does not exist or invalid',
  required: true
}

const destinationPathValidation = {
  name: 'destinationPath',
  description: 'Enter full path of destination to be stored at',
  type: 'string',
  conform: path => {
    if (fs.isDir(path)) {
      return true
    }
    return false
  },
  message: 'Inserted destination path does not exist or invalid',
  required: true
}

prompt.get([sourcePathValidation, destinationPathValidation, qualityValidation], function (err, result) {

  const sourcePath = result.sourcePath
  const destinationPath = result.destinationPath
  const quality = result.quality

  minify(sourcePath, destinationPath, quality)
});
