function Person(fullName, favColor) {
  this.fullName = fullName;
  this.favColor = favColor;
  this.greet = function() {
    console.log("Hello, my name is " + this.fullName + " and my favorite color is " + this.favColor + ".");
  }
}

module.exports = Person;
