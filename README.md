# base64-encode-images

Replace external image url links with inline base64 data strings. 

The primary usage is to create html email templates without the need to host images.

Uses the [grunt-inline npm](https://github.com/chyingp/grunt-inline) package. 

## Usage
* Run `npm install` to install packages.
* Place your html template under the *src/* directory. 
* Update the template source by adding *?__inline=true* onto the end of the img urls to transform.
* Update *Gruntfile.js* so *src* references your html template.
* Run `grunt` to process your html file. The transformed file will be under a new *target* directory.
