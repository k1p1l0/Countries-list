var mediator = new Mediator(), 
	tpl = {};

$(function() {
	(function loader() {
		let key = {
				'first': 'Soft',
				'second': 'Serve'
			};

		$('body').append(_.template(tpl['loader'], key));
	})();

	new ControllerChoose();
});