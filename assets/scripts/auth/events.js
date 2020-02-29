'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')
const store = require('./../store.js')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onAddDrink = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.addDrink(data)
    .then(() => api.getDrink())
    .then(ui.getDrinkSuccess)
    .then(ui.addDrinkSuccess)
    .catch(ui.addDrinkFailure)
}

const addADrink = function (event) {
  event.preventDefault()
  $('#patch-drink').hide()
  $('#add-drink').show()
}

const onClearAdd = function () {
  $('#add-drink').hide()
  $('#nav-message').text('')
}

const onGetDrink = function (event) {
  event.preventDefault()
  api.getDrink()
    .then(ui.getDrinkSuccess)
    .catch(ui.getDrinkFailure)
}

const onClearList = function () {
  $('.content').text('')
  $('#nav-message').text('')
  $('.clear-list-drinks').hide()
  $('#add-drink').hide()
  $('#patch-drink').hide()
}

const onRemoveDrink = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.removeDrink(id)
    .then(() => api.getDrink())
    .then(ui.removeDrinkSuccess)
    .catch(ui.removeDrinkFailure)
}

const onUpdateDrink = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.updateDrink(data)
    .then(() => api.getDrink())
    .then(ui.updateDrinkSuccess)
    .catch(ui.updateDrinkFailure)
}

const onClearUpdate = function () {
  $('#patch-drink').hide()
  $('#nav-message').text('')
}

const onEdit = function (event) {
  $('#patch-drink').show()
  $('#add-drink').hide()
  // store.drinkId is used in api.js
  store.drinkId = $(event.target).data('id')
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#add-drink').on('submit', onAddDrink)
  $('#get-drinks').on('submit', onGetDrink)
  $('.clear-list-drinks').on('click', onClearList)
  $('.clear-update').on('click', onClearUpdate)
  $('.clear-add-drink').on('click', onClearAdd)
  $('.content').on('click', '.removeDrink', onRemoveDrink)
  $('.content').on('click', '.updateDrink', onEdit)
  $('#patch-drink').on('submit', onUpdateDrink)
  $('.userface').on('click', '#add', addADrink)
}

module.exports = {
  addHandlers,
  onSignUp,
  onSignIn,
  onSignOut,
  onAddDrink,
  onGetDrink,
  onRemoveDrink
}
