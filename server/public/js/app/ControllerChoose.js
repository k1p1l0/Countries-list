function ControllerChoose () {
	var Collection = new List(),
		chooseView = new ListView({
			collection: Collection
		}),
		addView = new AddView({
			collection: Collection
		});

	mediator.sub('addCountry', (country) => {
		Collection.fetch({reset: true});
	});

	mediator.sub('editCountry', (country) => {
		addView.renderChange(country);
	});

	return this;
}