const chai = require('chai');
const expect = chai.expect;

const ActivityRepository = require('../src/activityRepository.js')
const data = require('../data/activity.js')

describe('ActivityRepository', function() {
  let activityRepository;

  beforeEach(() => {
    activityRepository = new ActivityRepository(data)
    activityRepository.findUserId(4)
  });

  it('Should be instantiated with a dataset of a particular user', function() {
    expect(activityRepository.currentUser.length).to.equal(100)
  })

  it('should have method that returns average stairs for a given date amongst all users', function() {
    expect(activityRepository.avgStairsClimbedGivenDate("2019/09/15")).to.equal(25.1)
  });

  it('should have method that returns average steps for a given date amongst all users', function() {
    expect(activityRepository.numberofStepsGivenDate("2019/09/15")).to.equal('9136')
  });

  it('should have method that returns average minutes active for a given date amongst all users', function() {
    expect(activityRepository.avgMinutesActiveGivenDate("2019/09/15")).to.equal('156')
  });
})