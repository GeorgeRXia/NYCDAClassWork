function Store(name, category){
	this.name = name;
	this.category = category;
	this.openingTime = 10;
	this.closingTime = 20;


}

var coolBoutique = new Store("xyz beau", "boutique");
var waterTaffy = new Store("Salt Water taffy", "snacks");
var artStore = new Store("arts n crafts", "art");
var waWa = new Store("Wawa", "regional delicacies");
var houseStuff = new Store("Bed, Bath, and Beyond", "house hold goods");

var shoppingDistrict = [coolBoutique, waterTaffy, artStore, waWa, houseStuff];

function Customers(){
	this.currentlyShopping = true;
	Person.apply(this,arguments); //***** 

}
function Employee (){
	this.currentlyWorking = true;

	Person.apply(this,arguments);
}

function Person(name, wallet, shoes){
	this.name = name;
	this.wallet = wallet;
	this.shoes = shoes;

}

function Manager (){
	this.hasAuthority = true;
	Employee.apply(this, arguments);

}

// Employee.prototype = new Person();

var george = new Customers("George", 25, true);
var joe = new Customers("Joe", 30, false);
var jane = new Customers("Jane", 434, true);
var sinead = new Customers("Sinead", 55, true);

var customers = [george, joe, jane, sinead];


function listCustomers(customers){
	for (var i = 0; i < customers.length; i++) {
		console.log(customers[i].name);
	}
console.log("There are currently " + customers.length + " customers in the shopping District");

}