const callback = err => {
  if (err) {
    console.log(`Error creating object`);
  } else {
    console.log('.');
  }
};

module.exports = (Model, file) => {
  const fs = require('fs');
  const file_contents = fs.readFileSync(`${__dirname}/${file}`, 'utf8');
  const objects = JSON.parse(file_contents);
  objects.forEach(object => {
    Model.create(object, callback);
  });
};
