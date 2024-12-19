//  Creating a Guest List Array
var guestlist = ["hamza", "muneer", "junaid", "ahsan",];
//  Making Variables for those guest who cant come
var dontcome = guestlist[0];
//  Print the name of who cant come
console.log(dontcome, "nahi ahh sakta hay");
//  Add or Remove values from guest list array
guestlist.splice(0, 1, "asad");
//  Message Print for Bigger Table
console.log("Good News I Have Found a Bigger Table For Dinner.");
//  Adding a new guest at starting index of array
guestlist.unshift("Ali");
//  Adding a new guest at ending index of array
guestlist.push("Zain");
//  Get a middel index of our guest list array
var middleindex = Math.floor(guestlist.length / 2);
//  Adding a new guest at middel index of array
guestlist.splice(middleindex, 0, "osama");
//  Print mesage of uploaded list
console.log("Updated List of our Guest");
// sending a invitation message to our guest one by one with thier names
guestlist.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, ",Would you like to dinner with me")); });
// inform that only two guest invited for dinner 
console.log("unfortunatly, the new dinner table want araive on time so i can invite only two guest dinner with me ");
// using while.loop to remove gusets from the array until only two name remain
while (guestlist.length > 2) {
    var Removeguest = guestlist.pop();
    console.log("sorry, ".concat(Removeguest, " I cant invite you to dinner "));
}
// sending a invitation to the last two guest on the list
console.log("invitation to the last guests");
guestlist.forEach(function (lasttwo) { return console.log("luckly $ {lasttwo},you are still invited to dinner"); });
//removing last two guest from the list 
guestlist.pop();
guestlist.pop();
console.log("Empty list:", guestlist);
