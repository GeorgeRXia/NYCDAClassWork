function Store(name, category, inventory, item, numberofItem){
this.name = name;
this.inventory = inventory;
this.category = {
hope: 1


};
this.category[item] = numberofItem;
this.openingTime = 10;
this.closingTime = 20;

// this.stolen = stolen;

}

var target = new Store("target", "boutique", ["couch", "tv", "apple", "hoagie"]);


function purchase(store, item){
// cutomer.wallet -= item.price;
this.wallet -= 10; 
store.inventory -= item; 
this.shoppingBag.push(item)

var itemIndex = store.inventory.indexOf(item);
store.inventory.splice(itemIndex, 1);
}

chris.purchase(target, "easel");

function storeItem(inventory){

this.object =[];
this.object.push(inventory);


}

var myIndex = ["hoagie", "easel", "brush"].indexOf("easel"); // This finds the index number of the item
["hoagie", "easel", "brush"].splice(myIndex, 1); //myindex is the index number wants to be removed then the second number (1) that'll delete number of indexs ((1) number.)
//the top two are combined.



function Clothes(){
Store.apply(this, arguments);
this.womenClothes = true;
this.menClothes = true;

}

function Food(){
Store.apply(this, arguments);
this.salty = true;
this.coupon = 50;

}
function Furniture(){
Store.apply(this, arguments);
this.heavy = true;
this.style = "modern";


}

function PetStore(){
Store.apply(this, arguments);
this.dogAmount = 10;
this.catAmount = 10;

}

function Shoes(){
Store.apply(this, arguments);
this.leftShoes = true;
this.rightShoes = true;

}

function Mall(store, customer){
// 	Store.apply(this, arguments);
// 	Shoes.apply(this,arguments);
// 	PetStore.apply(this, arguments);
// 	Furniture.apply(this, arguments);
// 	Clothes.apply(this, arguments);
// 	Food.apply(this, arguments);

// PayingCustomer.apply(this, arguments);
// NoMoneyCustomer.apply(this, arguments);
// LostCustomer.apply(this, arguments);


this.stores = [jCrew, auntieAnnes, ikea, aldo, petCo];





this.customers = [josh, ethan, george];
this.store = store; 
this.customer = customer;


}
var christina = new Mall();


function PayingCustomer(money, bags){
Customers.apply(this, arguments);
this.money = money;
this.bags = bags;
this.shoppingBag = [];
this.purchase = purchase;
}
// function NoMoneyCustomer(){
// Customers.apply(this, arguments);
// PayingCustomer.apply(this, arguments);
// }

// function LostCustomer(){
// Customers.apply(this, arguments);
// this.lost = true;
// }
// function Customers(){
// 	this.currentlyShopping = true;

// }

var josh = new PayingCustomer(50, 3);
var ethan = new NoMoneyCustomer(0, 5);
var george = new LostCustomer();

var jCrew = new Clothes();
var auntieAnnes = new Food();
var ikea = new Furniture();
var aldo = new Shoes();
var petCo = new PetStore();

var christina = new Mall(50, false);
console.log(christina.stores[1].salty)

function stolen(item){

var itemIndex = this.inventory.indexOf(item);

this.inventory.splice(itemIndex, 1);

}


