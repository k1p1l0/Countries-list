function ControllerChoose () {
	var Collection = new List(),
		chooseView = new ListView({
			collection: Collection
		}),
		addView = new AddView({
			collection: Collection
		});

	mediator.sub('addCountry', (country) => {
		// Alert when we successfully added country
	});

	mediator.sub('editCountry', (country) => {
		addView.renderChange(country);
	});

	return this;
}