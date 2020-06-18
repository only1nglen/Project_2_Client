'use strict'

const store = require('./../store.js')

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
  $('.auth').hide()
  $('#sign-in')[0].reset('')
  $('.show-change-password-btn').show()
  $('#sign-out').show()
  $('.userface').show()
  $('.clear-list-drinks').hide()
}

const signInFailure = function () {
  $('#nav-message').text('Failed to Sign In!')
  $('#sign-in')[0].reset('')
}

const changePasswordSuccess = function () {
  $('#nav-message').text('Password Successfully Changed!')
  $('#change-password')[0].reset('')
  $('#change-password').hide()
}

const changePasswordFailure = function () {
  $('#nav-message').text('Failed to Change Password!')
}

const signOutSuccess = function (response) {
  $('#nav-message').text('Successfully Signed Out')
  $('.auth').show()
  $('.clear-list-drinks').hide()
  $('.clear-list-places').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('.userface').hide()
  $('.show-change-password-btn').hide()
  $('.content').empty()
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
