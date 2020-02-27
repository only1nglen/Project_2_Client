'use strict'

const config = require('./../config')
const store = require('./../store')

const addPlace = function (data) {
  return $.ajax({
    url: config.apiUrl + '/places_to_gos',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const getPlace = function () {
  return $.ajax({
    url: config.apiUrl + '/places_to_gos',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const removePlace = function (id) {
  return $.ajax({
    url: config.apiUrl + '/places_to_gos/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updatePlace = function (data) {
  return $.ajax({
    url: config.apiUrl + '/places_to_gos/' + store.placeId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  addPlace,
  getPlace,
  removePlace,
  updatePlace
}
