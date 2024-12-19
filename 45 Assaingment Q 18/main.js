// Quistion 18
var placetovisit = ["italy", "america", "japan", "china", "india", "iran"];
//print in original order
console.log("orignal order :", placetovisit);
//print array in Alphabatical order without modifying the actual list 
console.log(" Alphabatical order:", placetovisit.slice().sort());
//array is still in its orignal order by printing it .
console.log("orignal order :", placetovisit);
//print yor array in reverse alphabetical order without changing the order of the orignal list
console.log("reverse order: ", placetovisit.slice().reverse().sort().reverse());
// show that your array in still in its orignal order by printing it again
console.log("orignal order: ", placetovisit);
//reverse the order of your list. print the array to how that its order has changed
console.log("reverse order changed");
placetovisit.reverse();
console.log(placetovisit);
//reverse the order of your list again print the list to show its back to its orignal order
console.log("orignal order:", placetovisit.sort());
console.log(placetovisit);
//sort your array bso its stored in alphabetical order. print the array to show that its order has been changed
console.log("orignal order:", placetovisit.sort());
console.log(placetovisit);
// sort to change your array so its sorted in reverse  alphabetical order. print the list to show to show that its order has been changed 
console.log("reverse alphabatical order changed:", placetovisit.sort().reverse());
console.log(placetovisit);
