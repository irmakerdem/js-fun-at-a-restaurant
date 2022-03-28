class Chef {
  constructor(nam, rest) {
    this.name = nam;
    this.restaurant = rest;
  }
  greetCustomer(customerName, isMorning) {
    if(isMorning) {
      return `Good morning, ${customerName}!`
    } return `Hello, ${customerName}!`
  }
  checkForFood(foodObj) {
    if(resty.menus[foodObj.type].includes(foodObj)) {
      return `Yes, we're serving ${foodObj.name} today!`
    }
    return `Sorry, we aren't serving ${foodObj.name} today.`
  }
};

// checkForFood(foodObj) {
//   if(this.restaurant.menus[foodObj.type].includes(foodObj)) {
//     return `Yes, we're serving ${foodObj.name} today!`
//   }
//   return `Sorry, we aren't serving ${foodObj.name} today.`
// }

module.exports = Chef;
