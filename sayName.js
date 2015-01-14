//Create a Person constructor that accepts name and age as parameters and sets those properties
// accordingly in the Constructor.

var Person = function(name ,age) {
	this.name = name;
	this.age = age;
}


//Now create three instances of Person with data you make up

var michael = new Person("Michael", 37);
var amy = new Person("Amy", 36);


//Now add a sayName method on your Person class that will alert the name of whatever Person
 instance called it.

Person.prototype.sayName = function() {
	alert(this.name);
}
