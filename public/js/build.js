/**
 * import dependencies
 * @ nunjucks - templating engine
 * @ fs - file system to write nunjucks rendered html to file
 */
const nunjucks = require('nunjucks');
const fs = require('fs');

/**
 * @ htmlPath - file path that we want to output the staging html file
 * @ htmlPath/index.html - this is the same file gulp will use to run inline-css and premailer
 * @ nunjucks.configure - set parent directory for nunjucks engine
 * @ htmlString - returns an html string with rendered nunjucks data
 */
const htmlPath = './stage/*.html';

nunjucks.configure('.');
const htmlString = nunjucks.render('*.njk', { n: 1 });

/**
 * @ htmlPath - defined above
 * @ htmlString - defined above
 * @ fs.writeFile - writes the nunjucks html string to the file path specified in htmlPath
 */
fs.writeFile(htmlPath, htmlString, err => {
  return err
    ? console.log(`Error saving file: See exception (${err})`)
    : console.log('The file was saved successfully!');
});
