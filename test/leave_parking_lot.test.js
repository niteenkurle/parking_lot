
let expect = require('chai').expect;
let parkingLot = require('../parkingImpl');

describe('leave 4', async function () {
  it('should free slot no 4', async function () {
    var preResult = 'Parking lot is empty';
    var result = await parkingLot.leave(4);
    console.log(result);
    expect(result).to.be.equal(preResult);
  });
});

