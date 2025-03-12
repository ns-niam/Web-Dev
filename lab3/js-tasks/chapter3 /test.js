describe('pow', () => {
  
  function makeTests(x) {
    let expected = x * x * x;
    it(`${x} in the power of 3 is ${expected}`, function() {
      assert.equal(pow(x, 3), expected);
    });
  }

  for (let x = 1; x <= 10; x++) {
    makeTests(x);
  }
});
