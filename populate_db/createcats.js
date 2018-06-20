module.exports = (Cat) => {
  // Normal cats
  Cat.create({ name: 'Peaches', description: { appearance: 'Tan & Orange', powerLevel: '45', personality: 'Capricious' }, special: false }, function (err) {
    if (err) {
      console.log('Error creating cat');
    }
    else {
      console.log('.');
    }
  });

  Cat.create({ name: 'Rascal', description: { appearance: 'Grey Tuxedo', powerLevel: '140', personality: 'Selfish' }, special: false}, function (err) {
    if (err) {
      console.log('Error creating cat');
    }
    else {
      console.log('.');
    }
  });

  Cat.create({ name: 'Shadow', description: { appearance: 'Solid Grey', powerLevel: '50', personality: 'Peculiar' }, special: false }, function (err) {
    if (err) {
      console.log('Error creating cat');
    }
    else {
      console.log('.');
    }
  });

  Cat.create({ name: 'Willie', description: { appearance: 'Black Tabby', powerLevel: '75', personality: 'Crafty' }, special: false }, function (err) {
    if (err) {
      console.log('Error creating cat');
    }
    else {
      console.log('.');
    }
  });

  // Img assets not finished for these cats
  // Cat.create({ name: 'Cocoa', description: { appearance: 'Brown Tuxedo', powerLevel: '45', personality: 'Indecisive' }, special: false }, function (err) {
  //   if (err) {
  //     console.log('Error creating cat');
  //   }
  //   else {
  //     console.log('.');
  //   }
  // });

  // Cat.create({ name: 'Pumpkin', description: { appearance: 'Orange & White Tabby', powerLevel: '90', personality: 'Spacey' }, special: false }, function (err) {
  //   if (err) {
  //     console.log('Error creating cat');
  //   }
  //   else {
  //     console.log('.');
  //   }
  // });

  // Cat.create({ name: 'Bandit', description: { appearance: 'Tortoiseshell', powerLevel: '180', personality: 'Wild at Heart' }, special: false }, function (err) {
  //   if (err) {
  //     console.log('Error creating cat');
  //   }
  //   else {
  //     console.log('.');
  //   }
  // });

  // Special cats
  Cat.create({ name: 'Saint Purrtrick', description: { appearance: 'Ethereal', powerLevel: '222', personality: 'Awe-Inspiring' }, special: true }, function (err) {
    if (err) {
      console.log('Error creating cat');
    }
    else {
      console.log('.');
    }
  });

  Cat.create({ name: 'Sassy Fran', description: { appearance: 'Waitress', powerLevel: '180', personality: 'Enthusiastic' }, special: true }, function (err) {
    if (err) {
      console.log('Error creating cat');
    }
    else {
      console.log('.');
    }
  });

  Cat.create({ name: 'Tubbs', description: { appearance: 'Fluffy', powerLevel: '130', personality: 'Finicky Feaster' }, special: true }, function (err) {
    if (err) {
      console.log('Error creating cat');
    }
    else {
      console.log('.');
    }
  });

}