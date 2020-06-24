'use strict'

const showplacesToGoTemplate = require('./../templates/placesToGo.handlebars')

const getPlaceSuccess = function (data) {
  if (data.places_to_gos.length === 0) {
    $('#nav-message').text('You have no Boba Shops Listed, Add a shop to visit next!')
  } else {
    const orderedPlaces = sortPlaces(data)
    const showPlacesHtml = showplacesToGoTemplate({ places_to_gos: orderedPlaces })
    $('.content').html(showPlacesHtml)
    $('.clear-list-places').show()
    $('#nav-message').text('Your Places!')
    $('.clear-list-drinks').hide()
  }
}

const getPlaceFailure = function () {
  $('#nav-message').text('You have no Places!')
}

const addPlaceSuccess = function (data) {
  const orderedPlaces = sortPlaces(data)
  const showPlacesHtml = showplacesToGoTemplate({ places_to_gos: orderedPlaces })
  $('.content').html(showPlacesHtml)
  $('#add-place-modal').modal('toggle')
  $('.clear-list-places').show()
  $('#nav-message').text('Place Added!')
  $('#add-new-place')[0].reset('')
}

const addPlaceFailure = function () {
  $('#nav-message').text('Add Place Fail!')
}

const removePlaceSuccess = function (data) {
  const orderedPlaces = sortPlaces(data)
  const showPlacesHtml = showplacesToGoTemplate({ places_to_gos: orderedPlaces })
  $('.content').html(showPlacesHtml)
  $('.clear-list-places').show()
  $('#nav-message').text('Removed a Place to Visit!')
}

const removePlaceFailure = function () {
  $('#nav-message').text('Could not Remove your Place to Visit!')
}

const updatePlaceSuccess = function (data) {
  const orderedPlaces = sortPlaces(data)
  const showPlacesHtml = showplacesToGoTemplate({ places_to_gos: orderedPlaces })
  $('.content').html(showPlacesHtml)
  $('#patch-place-modal').modal('toggle')
  $('#nav-message').text('Update Successful')
  $('#patch-place')[0].reset('')
}

const updatePlaceFailure = function () {
  $('#nav-message').text('Could not edit your Place!')
}

// function to sort the places because places were being placed to the end instead of original order
const sortPlaces = function (data) {
  const orderedPlaces = data.places_to_gos.sort((place1, place2) => {
    if (place1.id < place2.id) {
      return -1
    } else {
      return 1
    }
  })
  return orderedPlaces
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
