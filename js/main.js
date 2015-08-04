// add scripts

$(document).on('ready', function() {
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

    // children.each(index, function(child){
    //   var text = child.text();
    //   child.text(text + )
    //
    // });
  });


});
