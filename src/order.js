function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length >= 3) {
    return deliveryOrders
  } else {
    deliveryOrders.push(order)
  }
};

function refundOrder(orderNum, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if(deliveryOrders[i].orderNumber === orderNum) {
      deliveryOrders.splice(i, 1)
    }
  }
};
//splice means start at i and remove 1 item

function listItems(deliveryOrders) {
  var foodItems = [];
  for (var i = 0; i < deliveryOrders.length; i++) {
    foodItems.push(deliveryOrders[i].item);
  }
  return foodItems.join(', ');
};

function searchOrder(deliveryOrders, itemName) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (itemName === deliveryOrders[i].item) {
      return true
      }
    }
    return false
};

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
