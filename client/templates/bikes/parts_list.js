var arr = new ReactiveArray([
	{
		"name": "Frame",
		"type": ""
	},
	{
		"name": "Derailleurs",
		"type": ""
	},
	{
		"name": "Crank",
		"type": ""
	},
	{
		"name": "Wheels",
		"type": ""
	},
	{
		"name": "Tires",
		"type": ""
	}
]);

Template.partsList.events({
	'click #btn-part-input-add': function(e) {
		e.preventDefault();
		
		arr.push({
			"name": $('#part-name').val(),
			"type": $('#part-type').val()
		});

		$('#part-name').val('');
		$('#part-type').val('');
		console.log(arr.array());
	},
	'click #component-remove': function() {
		return arr.remove(this);
	}
});

Template.partsList.helpers({
	inputs: function() {
		return arr.list();
	}
})