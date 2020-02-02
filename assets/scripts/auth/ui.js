'use strict'

const store = require('./../store.js')
const showDrinksTemplate = require('./../templates/drink-listing.handlebars')

const signUpSuccess = function () {
  $('#nav-message').text('Successfully Signed Up!')
  $('#sign-up')[0].reset('')
}

const signUpFailure = function () {
  $('#nav-message').text('Failed to Sign Up!')
}

const signInSuccess = function (response) {
  $('#nav-message').text('Successfully Signed In!')
  store.user = response.user
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#drunk').hide()
  $('#sign-in')[0].reset('')
  $('#change-password').show()
  $('#sign-out').show()
  $('.userface').show()
  console.log(response)
}

const signInFailure = function () {
  $('#nav-message').text('Failed to Sign In!')
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
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#drunk').show()
  $('.userface').hide()
  $('#patch-drink').hide()
  $('.content').empty()
}

const signOutFailure = function () {
  $('#nav-message').text('Sign Out Failed!')
}

const addDrinkSuccess = function () {
  $('#nav-message').text('Drink Added!')
  $('#drunk')[0].reset('')
  // $('#drunk').empty()
}

const addDrinkFailure = function () {
  $('#nav-message').text('Add Drink Fail!')
}

const getDrinkSuccess = function (response) {
  $('#nav-message').text('Your Drinks!')
  const showDrinksHtml = showDrinksTemplate({ drinks: response.drinks })
  $('.content').html(showDrinksHtml)
}

const getDrinkFailure = function () {
  $('#nav-message').text('You have no Drinks!')
}

const removeDrinkSuccess = function () {
  $('#nav-message').text('Deleted a Drink!')
}

const removeDrinkFailure = function () {
  $('#nav-message').text('Could not Dump your Drink out!')
}

const updateDrinkSuccess = function () {
  $('#patch-drink').hide()
  $('#nav-message').text('Update Successful')
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
