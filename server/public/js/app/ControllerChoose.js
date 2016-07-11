function ControllerChoose () {
	var countries = new List(),
		listView = new ListView({collection: countries}),
		addView = new AddView(),
		$list = $('#country-choose'), $add = $('#country-add'), $desc = $('#country-desc'),
		descView, descPrev, editView, editPrev;

	mediator.sub('init', init);
	mediator.sub('add', add);
	mediator.sub('edit', edit);
	mediator.sub('click', click);

	function add (country) {
		// We're adding country in collection but don't trigger about it to other guys(views). Tssss!
		// We do it only for POST request.
		// Than we add new country to view from bd with ID!
		countries.create(country, {silent: true});
		countries.fetch({remove: false}); // Only add previous country
	}

	function edit (country) {
		if (editPrev) {
			editPrev.remove();
		}

		editView = new EditView({
			model: country
		});

		editPrev = editView;

		$desc.html(editView.render().el);
	}

	function click (country) {
		if (descPrev) {
			descPrev.remove();
		}

		descView = new DescriptionView({
			model: country
		});

		descPrev = descView;

		$desc.html(descView.render().el);
	}

	function init () {
		setTimeout(() => {
			$('.loader').hide();
			$('.container').show();
		}, 1);

		$add.append(addView.render().el)
		$list.html(listView.render().el);
	}

	return this;
}