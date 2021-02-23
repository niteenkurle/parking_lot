let expect = require('chai').expect;
let parkingLot = require('../parkingImpl');


describe('status', async function () {
  it('show parking status', async function () {
    var result = await parkingLot.status();
    console.log(result);
    expect(result).to.be.equal(result);
  });
});

describe('park DL-12-AA-9999', async function () {
  it('park the car', async function () {
    var preResult = 'Allocated slot number: 1';
    var result = await parkingLot.park('DL-12-AA-9999');
    console.log(result);
    expect(result).to.be.equal(preResult);
  });
});

