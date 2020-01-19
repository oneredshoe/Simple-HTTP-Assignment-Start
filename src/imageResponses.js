const fs = require('fs');

const pic = fs.readFileSync(`${__dirname}/../client/spongegar.png`);
const getPic = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(pic);
  response.end();
};

module.exports.getPic = getPic;
