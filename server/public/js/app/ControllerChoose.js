function ControllerChoose () {
	var Collection = new List(),
		chooseView = new ListView({
			collection: Collection
		}),
		descView = new DescriptionView({
			collection: Collection
		});
		addView = new AddView({
			collection: Collection
		});

	mediator.sub('addCountry', (country) => {
		Collection.fetch({reset: true});
	});

	mediator.sub('editCountry', (country) => {
		new EditView({
			model: country,
			collection: Collection
		});
	});

	return this;
}