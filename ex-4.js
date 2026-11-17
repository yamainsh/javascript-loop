// Exercise #4: Displaying Restaurant Name
let restaurantNames = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];

let i = 0;
while (i < restaurantNames.length) {
    newRestaurants.push(`Restaurant Name: ${restaurantNames[i]}`);
    i++;
};

console.log(newRestaurants);
