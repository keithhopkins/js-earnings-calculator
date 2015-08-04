// add scripts

$(document).on('ready', function() {
  var mealCount = 0;
  var tipTotal = 0;
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
    var child = $(".totals").first().children();
    console.log(child);
    $(child[0]).append("<span> $" + bill.subTotal().toFixed(2) + "</span>");
    $(child[1]).append("<span> $" + bill.tip().toFixed(2) + "</span>");
    $(child[2]).append("<span> $" + bill.total().toFixed(2) + "</span>");
    mealCount++;
    tipTotal+=bill.tip();
    var child2 = $(".totals").last().children();
    $(child2[0]).append("<span> $" + tipTotal.toFixed(2) + "</span");
    $(child2[1]).append("<span> " + mealCount + "</span>");
    $(child2[2]).append("<span> $" + tipAverage(mealCount, tipTotal).toFixed(2) + "</span>");
  });


});
