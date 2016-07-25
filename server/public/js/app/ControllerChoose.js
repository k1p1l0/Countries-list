function ControllerChoose () {
	var countries = new List(),
		listView = new ListView({
			collection: countries
		}),
		addView = new AddView(),
		$list = $('#country-choose'), 
		$add = $('#country-add'), 
		$desc = $('#country-desc'), 
		descView, descPrev, editView, editPrev;

	mediator.sub('init', init);
	mediator.sub('add', addCountry);
	mediator.sub('edit', showEditForm);
	// mediator.sub('show', showCountry);
	mediator.sub('selected', showCountryById);
	mediator.sub('save', saveCountry);

	function addCountry (country) {
		// We add country in collection but don't trigger about it to other guys(views). Tssss!
		// We do it only for POST request.
		// Than we add new country to view from bd with ID!
		var options = {
				silent: true,
				sort: true
			};

		var fetchOptions = {
				success: function (collection, response, options) {
					// log(collection);
				},

				reset: true
			};

		countries.create(country, options);
		countries.fetch(fetchOptions); // Only add previous country
	}

	function showEditForm (country) {
		if (editPrev) {
			editPrev.remove();
		}

		editView = new EditView({
			model: country
		});

		editPrev = editView;

		$desc.html(editView.render().el);
	}

	function showCountryById (id) {
		var model = countries.get(id);
		
		showCountry(model);
	}

	function showCountry (country) {
		if (descPrev) {
			descPrev.remove();
		}

		descView = new DescriptionView({
			model: country
		});

		descPrev = descView;

		$desc.html(descView.render().el);
	}

	function saveCountry (country) {
		showCountry(country); //Update desc view

		countries.fetch({reset: true}); // Update list view
	}

	function init () {
		$add.append(addView.render().el);
		$list.append(listView.render().el);
	}

	return this;
}