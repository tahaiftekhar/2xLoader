var current, obj, current_index = 0;

function twoXLoad(){
	obj = $('[data-load]');
	load_next();
}

function load_next(){
	current = obj.eq(current_index);
	current_index = current_index + 1;

	var load = current.data('load');
	var load_type = current.data('load-type');
	current.attr(load_type, load);

	current.on('load', function() {
		if(current_index < obj.length)
			load_next();
	});
}
