'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')
const store = require('./../store.js')

const onAddDrink = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.addDrink(data)
    .then(() => api.getDrink())
    .then(ui.addDrinkSuccess)
    .catch(ui.addDrinkFailure)
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
  $('#nav-message').text('')
}

const onEdit = function (event) {
  // store.drinkId is used in api.js
  store.drinkId = $(event.target).data('id')
}

const addHandlers = function () {
  $('#pills-signup-tab').on('click', () => $('#nav-message').text(''))
  $('#pills-signin-tab').on('click', () => $('#nav-message').text(''))
  $('.show-change-password-btn').on('click', () => $('#nav-message').text(''))
  $('#add-new-drink').on('submit', onAddDrink)
  // Close modal after submit also in UI file
  // $('#add-new-drink').submit(function (e) {
  //   e.preventDefault()
  //   $('#add-drink-modal').modal('toggle')
  // })
  $('#get-drinks').on('submit', onGetDrink)
  $('.clear-list-drinks').on('click', onClearList)
  $('.clear-update').on('click', onClearUpdate)
  $('.content').on('click', '.destroy-drink-btn', onRemoveDrink)
  $('.content').on('click', '.patch-drink-btn', onEdit)
  $('#patch-drink').on('submit', onUpdateDrink)
}

module.exports = {
  addHandlers,
  onAddDrink,
  onGetDrink,
  onRemoveDrink
}
