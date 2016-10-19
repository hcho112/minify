const imagemin = require('imagemin')
const imageminMozjpeg = require('imagemin-mozjpeg')
const imageminPngquant = require('imagemin-pngquant')
const recursive = require('recursive-readdir')
const ProgressBar = require('progress')

const filter = ['.DS_Store', 'Icon']

const minify = (sourcePath, destinationPath, quality) => {
  recursive(sourcePath, filter, function (err, files) {
    console.log(`Converting images from ${sourcePath}`)
    console.log(`${files.length} files...`)
    const bar = new ProgressBar('  Minimising [:bar] :percent :etas', {
      complete: '=',
      incomplete: ' ',
      width: 40,
      total: files.length
    });

    files.forEach((filePath,index)=> {
      let removeSourcePath = filePath.replace(sourcePath, '')
      let extraPath = removeSourcePath.match(/(.*\/)/)
      let targetDestination = destinationPath
      if(extraPath) {
        targetDestination = `${destinationPath}${extraPath[0]}`
      }
      bar.tick(0.5);
      imagemin([filePath], targetDestination, {
        plugins: [
          imageminMozjpeg({quality: quality}),
          imageminPngquant({quality: quality})
        ]
      }).then(files => {
        bar.tick(0.5);
      })
    })
  })
}

exports.minify = minify;
