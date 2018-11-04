const mongoose = require('mongoose');
const { mongoURI } = require('../config/keys');

(async () => {
  await mongoose.connect(mongoURI, err => {if (err) {
		console.log(err);
	}});
  console.log("MongoDB Connected");

	const flagsEnum = { cats: "--cats", items: "--items" };

	if (process.argv.length >= 3 &&
			(process.argv[2] != flagsEnum.cats
				&& process.argv[2] != flagsEnum.items)) {
		console.log("usage: npm run populate-db -- [ --cats | --items ]");
		process.exit(-1);
	}

	const modelsEnum = { '--cats': 'Cat', '--items': 'Item' };
	let modelsToUse = ['Cat', 'Item'];

	if (process.argv.length == 3){
		modelsToUse = [modelsEnum[process.argv[2]]];
	}

	modelsToUse.forEach(model => {
		require(`../models/${model.toLowerCase()}`);
		require("../populate_db/load-from-json")(
			mongoose.model(model), `${model.toLowerCase() + 's'}.json`);
	});

})();