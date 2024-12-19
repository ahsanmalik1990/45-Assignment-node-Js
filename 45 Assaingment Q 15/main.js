var guestlist = ["asad malik", "arman malik", "faheem malik", "hassain malik"];
var dontcome = guestlist[0];
console.log(dontcome, "nahi ahh sakta hay dawat me ");
guestlist.splice(0, 1, "moshin rajput");
guestlist.forEach(function (guest) { return console.log("salam ".concat(guest, ", would you like to come with me dawat at habib resturant?")); });
