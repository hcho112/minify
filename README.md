# Minify

It's an application to reduce file size of .png and .jpg images by lowering quality of the image.
- It can inherit file structure (eg. nested) of source images to destination path
- It supports .png and .jpg
- Quality of the image can be between range of 1 ~ 100 (%)

### Tech

Minify uses a number of open source projects:
- [imaginmin](https://github.com/imagemin/imagemin)
- [imageminMozjpeg](https://github.com/imagemin/imagemin-mozjpeg)
- [imageminPngquant](https://github.com/imagemin/imagemin-pngquant)
- and more

### Installation & Run

Minify requires [Node.js](https://nodejs.org/) v6+ to run.

```sh
$ cd minify
$ npm install && npm start
```
Application will ask user to insert followings:
- sourcePath (directory, where source images are located at)
- destinationPath (directory, where minified images will be stored at)
- quality (number within range between 1~100 (%) )

### Todos

 - Write Tests
 - Support SVG
 - Make it exportable
 - Import default configuration from template (if provided)

License
----

MIT
