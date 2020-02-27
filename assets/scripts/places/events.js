'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')
const store = require('./../store.js')

const onAddPlace = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.addPlace(data)
    .then(() => api.getPlace())
    .then(ui.getPlaceSuccess)
    .then(ui.addPlaceSuccess)
    .catch(ui.addPlaceFailure)
}

const addAPlace = function (event) {
  event.preventDefault()
  $('#add-place').show()
}

const onClearAdd = function () {
  $('#add-place').hide()
  $('#nav-message').text('')
}

const onGetPlace = function (event) {
  event.preventDefault()
  api.getPlace()
    .then(ui.getPlaceSuccess)
    .catch(ui.getPlaceFailure)
}

const onClearList = function () {
  $('.content').text('')
  $('#nav-message').text('')
  $('.clear-list-places').hide()
}

const onRemovePlace = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.removePlace(id)
    .then(() => api.getPlace())
    .then(ui.removePlaceSuccess)
    .catch(ui.removePlaceFailure)
}

const onUpdatePlace = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.updatePlace(data)
    .then(() => api.getPlace())
    .then(ui.updatePlaceSuccess)
    .catch(ui.updatePlaceFailure)
}

const onClearUpdate = function () {
  $('#patch-place').hide()
  $('#nav-message').text('')
}

const onEdit = function (event) {
  $('#patch-place').show()
  // store.placeId is used in api.js
  store.placeId = $(event.target).data('id')
}

const addHandlers = function () {
  $('#add-place-button').on('click', addAPlace)
  $('#add-place').on('submit', onAddPlace)
  $('#get-places').on('submit', onGetPlace)
  $('.clear-list-places').on('click', onClearList)
  $('.clear-update').on('click', onClearUpdate)
  $('.clear-add-place').on('click', onClearAdd)
  $('.content').on('click', '.removePlace', onRemovePlace)
  $('.content').on('click', '.updatePlace', onEdit)
  $('#patch-place').on('submit', onUpdatePlace)
  // $('.userface').on('click', '#add', addAPlace)
}

module.exports = {
  addHandlers,
  onAddPlace,
  onGetPlace,
  onRemovePlace
}
