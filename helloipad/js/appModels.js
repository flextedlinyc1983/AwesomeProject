ava.models.User = Backbone.Model.extend({	initialize: function (Id, Name) {		this.set({Id: Id, Name: Name});	}});// ava.models.User = Backbone.Model.extend({//   defaults: {//     Id: '',//     Name: ''//   }// });var ted = new ava.models.User("1", "Ted");var belle = new ava.models.User("2", "Belle");