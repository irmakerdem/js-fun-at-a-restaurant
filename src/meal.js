function nameMenuItem(food) {
  return `Delicious ${food}`
};

function createMenuItem(nam, pric, typ) {
  return {
    name: nam,
    price: pric,
    type: typ
  }
};

function addIngredients(ingredient, ingredients) {
  if (ingredients.includes(ingredient)) {
    return ingredients
  } else {
    ingredients.push(ingredient);
  }
};

function formatPrice(initialPrice) {
  return "$" + initialPrice
};

function decreasePrice(price) {
 // return price - (price * 0.1)
 return price * 0.9;
};

function createRecipe(title, ingredients, menuItemType) {
  return {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  }
};

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
};
