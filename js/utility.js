
function Bill(array) {
  this.mealPrice = Number(array[0]);
  this.taxRate = Number(array[1]);
  this.tipRate = Number(array[2]);
}

Bill.prototype.subTotal = function(){
  return this.mealPrice + this.mealPrice * this.taxRate / 100;
};

Bill.prototype.tip = function(){
  return this.subTotal() * this.tipRate / 100;
};

Bill.prototype.total = function (){
  return this.subTotal() + this.tip();
};


module.exports = Bill;