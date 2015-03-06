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

  it('should return 2123476284 when the input number is 4826743212', function() {
    worker = new Reverser()
    worker.makeReverse(2123476284);
    expect(worker.output).toEqual(4826743212)
  });


});
