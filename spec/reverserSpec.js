describe('Reverser', function() {
  var worker;

  it('should return 1 when the input number is 1', function(){
    worker = new Reverser();
    worker.makeReverse(1);
    expect(worker.output).toEqual(1);
  });

  it('should return 21 when the input number is 12', function() {
    worker = new Reverser()
    worker.makeReverse(12);
    expect(worker.output).toEqual(21)
  });


});
