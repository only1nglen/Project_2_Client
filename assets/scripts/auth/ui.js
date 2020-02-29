'use strict'

const store = require('./../store.js')
const showDrinksTemplate = require('./../templates/drink-listing.handlebars')
// const api = require('./api')

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
  $('#add-place').hide()
  $('#patch-place').hide()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#add-drink').hide()
  $('#sign-in')[0].reset('')
  $('#change-password').show()
  $('#sign-out').show()
  $('.userface').show()
  $('.clear-list-drinks').hide()
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
  $('.clear-list-drinks').hide()
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

const getDrinkSuccess = function (data) {
  if (data.drinks.length === 0) {
    $('#nav-message').text('You have no drinks, Add a Drink!')
    $('#add-drink').show()
  } else {
    store.showDrinksHtml = showDrinksTemplate({drinks: data.drinks})
    // console.log(showDrinksTemplate({drinks: data.drinks}), 'showDrinksTemplate({drinks: data.drinks}')
    // console.log(store.showDrinksHtml, 'store.showDrinksHtmlg')
    $('.content').html(store.showDrinksHtml)
    $('.clear-list-drinks').show()
    $('#nav-message').text('Your Drinks!')
    $('.clear-list-places').hide()
    $('#add-place').hide()
    // console.log(data.drinks, 'is response')
  }
}

const getDrinkFailure = function () {
  $('#nav-message').text('You have no Drinks!')
}

const addDrinkSuccess = function (data) {
  // console.log(store.showDrinksHtml)
  // $('.content').html(store.showDrinksHtml)
  // $('.content').html(showDrinksTemplate({drinks: data.drinks}))
  $('.clear-list-drinks').show()
  $('#add-drink').hide()
  $('#add-drink')[0].reset('')
  $('#nav-message').text('Drink Added!')
}

const addDrinkFailure = function () {
  $('#nav-message').text('Add Drink Fail!')
}

const removeDrinkSuccess = function (data) {
  // console.log(store.showDrinksHtml)
  $('.content').html(showDrinksTemplate({drinks: data.drinks}))
  $('.clear-list-drinks').show()
  $('#add-drink').hide()
  $('#patch-drink').hide()
  $('#nav-message').text('Dumped a Drink!')
}

const removeDrinkFailure = function () {
  $('#nav-message').text('Could not Dump your Drink out!')
}

const updateDrinkSuccess = function (response) {
  // $('.content').html(store.showDrinksHtml)
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
