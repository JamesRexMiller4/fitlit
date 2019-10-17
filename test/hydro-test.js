const chai = require('chai');
const expect = chai.expect;

const Hydro = require('../src/hydro.js');
const HydroRepository = require('../src/hydroRepository.js')
const data = require('../data/hydration.js')

describe('Hydro', function() {

  let hydro;
  let hydroRepository;

  beforeEach(() => {
    hydropRepository = new HydroRepository(data);
    hydropRepository.findUserId(4)
    hydro = new Hydro(hydropRepository.currentUser)
  })

  it('should be instantiated with a dataset of a particular user', function() {
    expect(hydro.data.length).to.eql(100)
  });

  it('Should calculate average ounces for all time', function() {
    expect(hydro.findAvgFluidOunces()).to.equal(64)
  });

  it('Should return ounces consumed by date', function() {
    expect(hydro.findFluidDate('2019/09/22')).to.equal(68)
  });

  it('Should return ounces consumed for a week', function() {
    expect(hydro.findFluidWeek('2019/07/28')).to.eql([65, 46, 91, 100, 60, 48, 93])
  })
});