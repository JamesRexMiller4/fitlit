let randomNum = null;
let user = undefined;
let userRepository = undefined;
// const data = require('../data/users.js')

function getRandomNum() {
    randomNum = Math.floor((Math.random() * 50) + 1)

}

$(window).on('load', function () {
  console.log(userData)
  getRandomNum()
  makeUsers(userData);

  $('.header_h1_span').text(`${user.returnFirstName()}`);
  $('.user_name').text(`${user.name.join(' ')}`);
  $('.user_email').text(`${user.email}`);
  $('.user_address').text(`${user.address}`);
  $('.user_stride_length').text(`${user.strideLength}`);
  $('.user_step_goal').text(`${user.dailyStepGoal}`);
  $('.div_steps_other_users_p').text(`${userRepository.calculateAverageStepGoal()}`)
})

function makeUsers(data) {
    userRepository = new UserRepository(data)
    userRepository.findUser(randomNum)
    console.log(userRepository.currentUser)
     user = new User(userRepository.currentUser);
    // $('.header_h1_span').text(`${user.returnFirstName()}`);

}