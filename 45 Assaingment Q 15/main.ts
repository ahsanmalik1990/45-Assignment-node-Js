let guestlist = ["asad malik","arman malik","faheem malik","hassain malik"];

let dontcome = guestlist[0];

console.log(dontcome, "nahi ahh sakta hay dawat me ");

guestlist.splice(0, 1, "moshin rajput");

guestlist.forEach(guest => console.log(`salam ${guest}, would you like to come with me dawat at habib resturant?`));


