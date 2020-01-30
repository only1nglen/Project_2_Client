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

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
