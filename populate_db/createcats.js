module.exports = (Cat) => {
  // Normal cats
  Cat.create({ name: 'Peaches', description: { appearance: 'Tan & Orange', powerLevel: '45', personality: 'Capricious' } }, function (err) {
    if (err) {
      console.log('Error creating cat');
    }
    else {
      console.log('.');
    }
  });

  Cat.create({ name: 'Rascal', description: { appearance: 'Grey Tuxedo', powerLevel: '140', personality: 'Selfish' } }, function (err) {
    if (err) {
      console.log('Error creating cat');
    }
    else {
      console.log('.');
    }
  });

  Cat.create({ name: 'Cocoa', description: { appearance: 'Brown Tuxedo', powerLevel: '45', personality: 'Indecisive' } }, function (err) {
    if (err) {
      console.log('Error creating cat');
    }
    else {
      console.log('.');
    }
  });

  Cat.create({ name: 'Pumpkin', description: { appearance: 'Orange & White Tabby', powerLevel: '90', personality: 'Spacey' } }, function (err) {
    if (err) {
      console.log('Error creating cat');
    }
    else {
      console.log('.');
    }
  });

  Cat.create({ name: 'Bandit', description: { appearance: 'Tortoiseshell', powerLevel: '180', personality: 'Wild at Heart' } }, function (err) {
    if (err) {
      console.log('Error creating cat');
    }
    else {
      console.log('.');
    }
  });

  Cat.create({ name: 'Shadow', description: { appearance: 'Solid Grey', powerLevel: '50', personality: 'Peculiar' } }, function (err) {
    if (err) {
      console.log('Error creating cat');
    }
    else {
      console.log('.');
    }
  });

  Cat.create({ name: 'Willie', description: { appearance: 'Black Tabby', powerLevel: '75', personality: 'Crafty' } }, function (err) {
    if (err) {
      console.log('Error creating cat');
    }
    else {
      console.log('.');
    }
  });

  // Special cats
  Cat.create({ name: 'Saint Purrtrick', description: { appearance: 'Ethereal', powerLevel: '222', personality: 'Awe-Inspiring' } }, function (err) {
    if (err) {
      console.log('Error creating cat');
    }
    else {
      console.log('.');
    }
  });

  Cat.create({ name: 'Sassy Fran', description: { appearance: 'Waitress', powerLevel: '180', personality: 'Enthusiastic' } }, function (err) {
    if (err) {
      console.log('Error creating cat');
    }
    else {
      console.log('.');
    }
  });

  Cat.create({ name: 'Tubbs', description: { appearance: 'Fluffy', powerLevel: '130', personality: 'Finicky Feaster' } }, function (err) {
    if (err) {
      console.log('Error creating cat');
    }
    else {
      console.log('.');
    }
  });

}