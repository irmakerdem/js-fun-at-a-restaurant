function createRestaurant(nam) {
  return resty = {
    name: nam,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
};

function addMenuItem(restaurant, foodObj) {
  if(restaurant.menus[foodObj.type].includes(foodObj)) {
    return restaurant.menus[foodObj.type]
  } else {
      restaurant.menus[foodObj.type].push(foodObj)
  }
};

function removeMenuItem(restaurant, foodName, foodType) {
   for (var i = 0; i < restaurant.menus[foodType].length; i++) {
     if (restaurant.menus[foodType][i].name.includes(foodName)) {
       restaurant.menus[foodType].splice(i, 1);
        return `No one is eating our ${foodName} - it has been removed from the ${foodType} menu!`
     }
   }
   return `Sorry, we don't sell ${foodName}, try adding a new recipe!`
};

// restaurant.menus[foodObj.type] = "lunch"

// function addMenuItem(restaurant, foodObj) {
//   if(foodObj.type === "breakfast") {
//     restaurant.menus.breakfast.push(foodObj)
//   } else if(foodObj.type === "lunch") {
//     restaurant.menus.lunch.push(foodObj)
//   } else {
//     restaurant.menus.dinner.push(foodObj)
//   }
// };

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
};
