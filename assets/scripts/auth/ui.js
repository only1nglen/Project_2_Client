'use strict'

const store = require('./../store.js')

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
  $('#sign-in')[0].reset('')
  console.log(response)
}

const signInFailure = function () {
  $('#nav-message').text('Failed to Sign In!')
}

const changePasswordSuccess = function (response) {
  $('#nav-message').text('Password Successfully Changed!')
  $('#change-password')[0].reset('')
}

const changePasswordFailure = function () {
  $('#nav-message').text('Failed to Change Password!')
}

const signOutSuccess = function (response) {
  $('#nav-message').text('Successfully Signed Out')
}

const signOutFailure = function () {
  $('#nav-message').text('Sign Out Failed!')
}

const addDrinkSuccess = function () {
  $('#nav-message').text('Drink Added!')
  $('#drunk')[0].reset('')
}

const addDrinkFailure = function () {
  $('#nav-message').text('Add Drink Fail!')
}

const showDrinkSuccess = function (response) {
  $('#nav-message').text('Your Drinks!')
  console.log(response, 'is response')
  store.drinks = store.response
}

const showDrinkFailure = function () {
  $('#nav-message').text('You have no Drinks!')
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
  showDrinkSuccess,
  showDrinkFailure
}
