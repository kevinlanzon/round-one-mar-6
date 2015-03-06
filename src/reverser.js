var Reverser = function() {
  this.output = 1;
};

Reverser.prototype.makeReverse = function(input_number) {
  var n = input_number.toString();
  var n = n.split('').reverse().join('');
  this.output = parseInt(n);
};