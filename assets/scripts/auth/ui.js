'use strict'

const store = require('./../store.js')

const signUpSuccess = function () {
  $('#message-to-user').text('Successfully Signed Up!')
  $('#sign-up')[0].reset('')
}

const signUpFailure = function () {
  $('#message-to-user').text('Failed to Sign Up!')
  $('#sign-up')[0].reset('')
}

const signInSuccess = function (response) {
  $('#message-to-user').text('Successfully Signed In!')
  store.user = response.user
  $('#sign-in')[0].reset('')
  $('.show-change-password-btn, #sign-out, .user-content').show()
  $('.clear-list-drinks, .auth').hide()
}

const signInFailure = function () {
  $('#message-to-user').text('Failed to Sign In!')
  $('#sign-in')[0].reset('')
}

const changePasswordSuccess = function () {
  $('#message-to-user').text('Password Successfully Changed!')
  $('#change-password')[0].reset('')
  $('#change-password').hide()
}

const changePasswordFailure = function () {
  $('#message-to-user').text('Failed to Change Password!')
}

const signOutSuccess = function (response) {
  $('#message-to-user').text('Successfully Signed Out')
  $('.auth').show()
  $('#change-password, #sign-out, .user-content, .show-change-password-btn, .clear-list-drinks, .clear-list-places').hide()
  $('.content').empty()
}

const signOutFailure = function () {
  $('#message-to-user').text('Sign Out Failed!')
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
