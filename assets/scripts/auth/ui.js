'use strict'

const store = require('./../store.js')
const showDrinksTemplate = require('./../templates/drink-listing.handlebars')

const signUpSuccess = function () {
  $('#nav-message').text('Successfully Signed Up!')
  $('#sign-up')[0].reset('')
}

const signUpFailure = function () {
  $('#nav-message').text('Failed to Sign Up!')
  $('#sign-up')[0].reset('')
}

const signInSuccess = function (response) {
  $('#nav-message').text('Successfully Signed In!')
  store.user = response.user
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#add-drink').hide()
  $('#sign-in')[0].reset('')
  $('#change-password').show()
  $('#sign-out').show()
  $('.userface').show()
  $('.clear-list').hide()
  // console.log(response)
}

const signInFailure = function () {
  $('#nav-message').text('Failed to Sign In!')
  $('#sign-in')[0].reset('')
}

const changePasswordSuccess = function () {
  $('#nav-message').text('Password Successfully Changed!')
  $('#change-password')[0].reset('')
}

const changePasswordFailure = function () {
  $('#nav-message').text('Failed to Change Password!')
}

const signOutSuccess = function (response) {
  $('#nav-message').text('Successfully Signed Out')
  $('#sign-up').show()
  $('#sign-in').show()
  $('.clear-list').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#add-drink').show()
  $('.userface').hide()
  $('#patch-drink').hide()
  $('.content').empty()
}

const signOutFailure = function () {
  $('#nav-message').text('Sign Out Failed!')
}

const addDrinkSuccess = function () {
  $('#nav-message').text('Drink Added!')
  $('#add-drink').hide()
  $('#add-drink')[0].reset('')
}

const addDrinkFailure = function () {
  $('#nav-message').text('Add Drink Fail!')
}

const getDrinkSuccess = function (data) {
  // console.log(data.drinks.length, 'is data')
  if (data.drinks.length === 0) {
    $('#nav-message').text('You have no drinks, Add a Drink!')
    $('#add-drink').show()
  } else {
    const showDrinksHtml = showDrinksTemplate({drinks: data.drinks})
    $('.content').html(showDrinksHtml)
    $('.clear-list').show()
    $('#nav-message').text('Your Drinks!')
    // console.log(data.drinks, 'is response')
  }
}

const getDrinkFailure = function () {
  $('#nav-message').text('You have no Drinks!')
}

const removeDrinkSuccess = function () {
  $('#nav-message').text('Dumped a Drink!')
}

const removeDrinkFailure = function () {
  $('#nav-message').text('Could not Dump your Drink out!')
}

const updateDrinkSuccess = function (response) {
  $('#patch-drink').hide()
  $('#nav-message').text('Update Successful')
  $('#patch-drink')[0].reset('')
}

const updateDrinkFailure = function () {
  $('#nav-message').text('Could not edit your Drink!')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  addDrinkSuccess,
  addDrinkFailure,
  getDrinkSuccess,
  getDrinkFailure,
  removeDrinkSuccess,
  removeDrinkFailure,
  updateDrinkSuccess,
  updateDrinkFailure
}
