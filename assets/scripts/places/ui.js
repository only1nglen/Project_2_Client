'use strict'

const showplacesToGoTemplate = require('./../templates/placesToGo.handlebars')

const getPlaceSuccess = function (data) {
  if (data.places_to_gos.length === 0) {
    $('#nav-message').text('You have no Boba Shops Listed, Add a shop to visit next!')
  } else {
    $('.content').html(showplacesToGoTemplate({places_to_gos: data.places_to_gos}))
    $('.clear-list-places').show()
    $('#nav-message').text('Your Places!')
    $('.clear-list-drinks').hide()
  }
}

const getPlaceFailure = function () {
  $('#nav-message').text('You have no Places!')
}

const addPlaceSuccess = function (data) {
  $('.content').html(showplacesToGoTemplate({places_to_gos: data.places_to_gos}))
  $('#add-place-modal').modal('toggle')
  $('.clear-list-places').show()
  $('#nav-message').text('Place Added!')
  $('#add-new-place')[0].reset('')
}

const addPlaceFailure = function () {
  $('#nav-message').text('Add Place Fail!')
}

const removePlaceSuccess = function (data) {
  $('.content').html(showplacesToGoTemplate({places_to_gos: data.places_to_gos}))
  $('.clear-list-places').show()
  $('#nav-message').text('Removed a Place to Visit!')
}

const removePlaceFailure = function () {
  $('#nav-message').text('Could not Remove your Place to Visit!')
}

const updatePlaceSuccess = function (data) {
  $('.content').html(showplacesToGoTemplate({places_to_gos: data.places_to_gos}))
  $('#patch-place-modal').modal('toggle')
  $('#nav-message').text('Update Successful')
  $('#patch-place')[0].reset('')
}

const updatePlaceFailure = function () {
  $('#nav-message').text('Could not edit your Place!')
}

module.exports = {
  addPlaceSuccess,
  addPlaceFailure,
  getPlaceSuccess,
  getPlaceFailure,
  removePlaceSuccess,
  removePlaceFailure,
  updatePlaceSuccess,
  updatePlaceFailure
}
