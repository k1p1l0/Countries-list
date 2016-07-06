function ControllerInfo () {
	var Collection = new List(),
		View = new ListView({
			collection: Collection,
			el: $('#info')
		});

	mediator.sub('click', (value) => {
		console.log(value);
	});

	// var newAdd = Collection.create({
	// 	id: 6,
	//     Name: 'UK6',
	//     Capital: 'London',
	//     Continent: 'Europe',
	//     Population: 7676
	// });

	return this;
}