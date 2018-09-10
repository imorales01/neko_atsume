const callback = () => {
  if (err) {
    console.log(`Error creating object`);
  } else {
    console.log('.');
  }
};

module.exports = (Model, file) => {
  const fs = require('fs');  
  const file_contents = fs.readFileSync(file);
  const objects = JSON.parse(file_contents);
  Model.forEach(object => { 
    Model.create(object, callback);
  });
};