const store = require('./../store.js')
const showplacesToGoTemplate = require('./../templates/placesToGo.handlebars')

const getPlaceSuccess = function (data) {
  if (data.places_to_gos.length === 0) {
    $('#nav-message').text('You have no Boba Shops Listed, Add a shop to visit next!')
    $('#add-place').show()
  } else {
    store.showPlacesHtml = showplacesToGoTemplate({places_to_gos: data.places_to_gos})
    // console.log(showPlacesTemplate({places_to_gos: data.places_to_gos}), 'showPlacesTemplate({places_to_gos: data.places_to_gos}')
    // console.log(store.showPlacesHtml, 'store.showPlacesHtmlg')
    $('.content').html(store.showPlacesHtml)
    $('.clear-list-places').show()
    $('#nav-message').text('Your Places!')
    $('.clear-list-drinks').hide()
    // $('#add-drink').hide()
    // console.log(data.places_to_gos, 'is response')
  }
}

const getPlaceFailure = function () {
  $('#nav-message').text('You have no Places!')
}

const addPlaceSuccess = function (data) {
  // console.log(store.showPlacesHtml)
  // $('.content').html(store.showPlacesHtml)
  // $('.content').html(showPlacesTemplate({places_to_gos: data.places_to_gos}))
  $('#add-place-modal').modal('toggle')
  $('.clear-list-places').show()
  $('#add-place').hide()
  $('#add-place')[0].reset('')
  $('#nav-message').text('Place Added!')
}

const addPlaceFailure = function () {
  $('#nav-message').text('Add Place Fail!')
}

const removePlaceSuccess = function (data) {
  // console.log(store.showPlacesHtml)
  $('.content').html(showplacesToGoTemplate({places_to_gos: data.places_to_gos}))
  $('.clear-list-places').show()
  $('#patch-place').hide()
  $('#nav-message').text('Removed a Place to Visit!')
}

const removePlaceFailure = function () {
  $('#nav-message').text('Could not Remove your Place to Visit!')
}

const updatePlaceSuccess = function (data) {
  $('.content').html(showplacesToGoTemplate({places_to_gos: data.places_to_gos}))
  $('#patch-place-modal').modal('toggle')
  $('#patch-place').hide()
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
