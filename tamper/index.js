var weightInGrams = prompt("Enter the weight of chicken (in grams):");

var weightInKg = weightInGrams / 1000;

var price = weightInKg * 500;

console.log("You have to pay " + price + " rupees for " + weightInGrams + " grams of chicken.");