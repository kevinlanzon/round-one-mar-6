describe ('reverse', function(){


  it('123456789 should reverse to 987654321', function(){
    rev = new Reverse();
    expect(rev.reverse(123456789)).toEqual(987654321)

  });
});