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
    // .then(() => onGetDrink(event))
    .then(ui.addDrinkSuccess)
    .catch(ui.addDrinkFailure)
}

const addADrink = function (event) {
  event.preventDefault()
  $('#add-drink').show()
}

const onClearAdd = function () {
  $('#add-drink').hide()
}

const onGetDrink = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.getDrink(data)
    .then(ui.getDrinkSuccess)
    .catch(ui.getDrinkFailure)
}

const onClearList = function () {
  $('.content').text('')
  $('#nav-message').text('')
  $('.clear-list').hide()
}

const onRemoveDrink = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  // console.log(event, 'is remove event')
  // console.log(id, 'is remove id')
  api.removeDrink(id)
    // .then(() => onGetDrink(event))
    .then(ui.removeDrinkSuccess)
    .catch(ui.removeDrinkFailure)
}

const onUpdateDrink = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  // console.log(data, 'is data')
  api.updateDrink(data)
    .then(ui.updateDrinkSuccess)
    .catch(ui.updateDrinkFailure)
}

const onClearUpdate = function () {
  $('#patch-drink').hide()
}

const onEdit = function (event) {
  $('#patch-drink').show()
  // console.log(event, 'is event')
  // store.drinkId is used in api.js
  store.drinkId = $(event.target).data('id')
  // store.drinkName = $(event.target).data('name')
  // console.log(store.drinkName, 'drink name')
  // console.log(store.drinkId, 'is drinkId')
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#add-drink').on('submit', onAddDrink)
  $('#get-drinks').on('submit', onGetDrink)
  $('.clear-list').on('click', onClearList)
  $('.clear-update').on('click', onClearUpdate)
  $('.clear-add').on('click', onClearAdd)
  $('.content').on('click', '.remove', onRemoveDrink)
  $('.content').on('click', '.update', onEdit)
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
