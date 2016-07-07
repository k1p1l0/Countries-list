function ControllerChoose () {
	var Collection = new List(),
		chooseView = new ListView({
			collection: Collection
		}),
		addView = new AddView({
			collection: Collection
		});

	mediator.sub('addCountry', (country) => {
		Collection.create(country);
	});

	// setTimeout(() => {
	// 		var newAdd = Collection.create({
	// 			id: '3',
	// 		    Name: 'UK6',
	// 		    Capital: 'London',
	// 		    Continent: 'Europe',
	// 		    Population: 7676
	// 		});
	// 	}, 2000);

	return this;
}