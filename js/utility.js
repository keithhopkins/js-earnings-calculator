// function subTotal(mealPrice, taxRate) {
//   return mealPrice + mealPrice * taxRate / 100
//   // body...
// }
//
// function tipCalc(total, tipRate) {
//   return total * tipRate / 100
// }
//
// function total(total, tip) {
//   return total + tip
// }

function Bill(array) {
  this.mealPrice = Number(array[0]);
  this.taxRate = Number(array[1]);
  this.tipRate = Number(array[2]);
  // body...
}

Bill.prototype.subTotal = function(){
  return this.mealPrice + this.mealPrice * this.taxRate / 100;
};

Bill.prototype.tip = function(){
  return this.subTotal() * this.tipRate / 100;
};

Bill.prototype.total = function (){
  return this.subTotal() + this.tip();
  // body...
};
