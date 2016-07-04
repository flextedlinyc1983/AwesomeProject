function User() {
	this.Id = "";
	this.Name = "";
}




function IUserRepository() {
	this.Add = function (user) {
		
	};

	this.Remove = function (id) {
		
	};

	this.GetAll = function () {
		return new Array();
	};
}


function UserManager(userRepository){

	var _userRepository = userRepository;

	this.Add = function (user) {
		_userRepository.Add(user);
	}

	this.Remove = function (id) {
		_userRepository.Remove(id);
	}


	this.Update = function (user) {
		_userRepository.Remove(user.Id);
		_userRepository.Add(user);
	}

	this.GetAll = function () {
		return _userRepository.GetAll();
	}
}


function MockUserRepository() {
	
	var _userCollection	= new Array();

	this.Add = function (user) {
		_userCollection.push(user);
	}


	this.Remove = function (id) {
		for (var i = 0; i < _userCollection.length; i++) {
			if(_userCollection[i].Id == id) {
				_userCollection.splice(i,1)	;
				return;
			}
		}
	}

	this.GetAll = function () {
		return _userCollection;
	}

}


MockUserRepository.prototype = new IUserRepository();




var userManager = new UserManager(new MockUserRepository());


var user01 = new User();
user01.Name = "Ted";
user01.Id = "001";
userManager.Add(user01);

var user02 = new User();
user02.Name = "Belle";
user02.Id = "002";

userManager.Add(user02);





var user03 = new User();
user03.Name = "Belle&& Eric";
user03.Id = "002";


userManager.Update(user03)



var user = userManager.GetAll()[1]
alert(user.Id)
alert(user.Name)



alert(userManager.GetAll().length);