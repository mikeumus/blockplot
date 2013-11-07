YUI().use('node', 'event', 'node-event-simulate', function (Y) {

	Y.one('.demo-logo').on({
		click: function(){
			Y.one('.upload-world').simulate('click');
		}
	});

});