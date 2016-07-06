var log = console.log.bind(console),
	dir = console.dir.bind(console);

function template (tpl, data) {
	for (let key in data) {
		if (typeof data[key] === 'object') {
			var info = [];

			for (let sKey in data[key]) {
				info.push(data[key][sKey]);
			}

			tpl = tpl.replace(':' + key, info);

			continue;
		}
		data[key] = validateInformation(data[key]);
		tpl = tpl.replace(':' + key, data[key]);
	}

	return tpl;
}

function validateInformation (string) {
	if (string <= 0) {
		string = 'No information';
	}

	return string;
}

function extend (Parent, Child) {
	var Surrogat = function(){};
	Surrogat.prototype = Parent.prototype;

	Child.prototype = new Surrogat();
	Child.prototype.constuctor = Child;
	Child.prototype.super = Parent.prototype;
}
