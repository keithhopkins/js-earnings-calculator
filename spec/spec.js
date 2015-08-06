// var DOM = require('../js/main.js');
var Bill = require('../js/utility.js');

describe('earnings page', function() {
  var bill = null;
  var dom = null;

  beforeEach(function() {
    bill = new Bill(['100','8','15']);
  });

  describe('bill object',function(){
    it('should calculate sub total', function() {
      expect(bill.subTotal()).toBe(108);
    });
    
    it('should calculate tip',function(){
      expect(bill.tip()).toBe(16.2);
    });

    it('should calculate total',function(){
      expect(bill.total()).toBe(124.2);
    });
  });

});
