// add scripts

$(document).on('ready', function() {
  var dom = new DOM();
  $(".btn").first().on("click", function(e){
    if ($("span") !== undefined) {
      $("span").remove();
    }
    var values = [];
    
    e.preventDefault();
    $.each($(".form-input"), function(index, input){
      values[index] = $(input).val();
      $(input).val(" ");
    });
    var bill = new Bill(values);
    dom.appendCurrentTotals(bill);
    dom.addTotals(bill);
    dom.appendRunningTotals();
  });

  $(':input[value="Clear"]').on('click',function(e){
    dom.clearForm();
  });

  $(':input[value="Reset"]').on('click',function(e){
    dom.clearForm();
    dom.clearTotals();
  });
});


function DOM(){
  this.mealCount=0;
  this.tipTotal=0;
}


DOM.prototype.addTotals = function(bill){
  this.mealCount++;
  this.tipTotal+=bill.tip();
};

DOM.prototype.clearForm = function(){
  $.each($(".form-input"), function(index, input){
    $(input).val(" ");
  });
};

DOM.prototype.clearTotals = function(){
  this.mealCount=0;
  this.tipTotal=0;
  $('span').remove();
};

DOM.prototype.appendCurrentTotals = function(bill){
  var child = $(".totals").first().children();
  $(child[0]).append("<span> $" + bill.subTotal().toFixed(2) + "</span>");
  $(child[1]).append("<span> $" + bill.tip().toFixed(2) + "</span>");
  $(child[2]).append("<span> $" + bill.total().toFixed(2) + "</span>");
};

DOM.prototype.appendRunningTotals = function(){
  var child2 = $(".totals").last().children();
  console.log(this);
  console.log(this.tipTotal);
  $(child2[0]).append("<span> $" + this.tipTotal.toFixed(2) + "</span");
  $(child2[1]).append("<span> " + this.mealCount + "</span>");
  $(child2[2]).append("<span> $" + this.tipAverage().toFixed(2) + "</span>");
};

DOM.prototype.tipAverage = function(){
  return this.tipTotal/this.mealCount;
};


module.exports = DOM;

