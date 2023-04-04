let MathFrameWork = {
  Result: null,

  calculate: function() {
    let sum = 0;
    if (typeof this.property1 === 'number') {
      sum += this.property1;
    } else if (Array.isArray(this.property1)) {
      for (let i = 0; i < this.property1.length; i++) {
        sum += this.property1[i];
      }
    }

    if (typeof this.property2 === 'number') {
      sum += this.property2;
    } else if (Array.isArray(this.property2)) {
      for (let i = 0; i < this.property2.length; i++) {
        sum += this.property2[i];
      }
    }

    this.Result = sum; 
  },

  setProperty1: function(value) {
    this.property1 = value;
  },

  setProperty2: function(value) {
    this.property2 = value;
  }
};
MathFrameWork.setProperty1(3);
MathFrameWork.setProperty2([5, 6]);
MathFrameWork.calculate();
console.log(MathFrameWork.Result); 
