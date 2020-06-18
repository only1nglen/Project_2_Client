'use strict'

const config = require('./../config')
const store = require('./../store')

const addDrink = function (data) {
  return $.ajax({
    url: config.apiUrl + '/drinks',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const getDrink = function () {
  return $.ajax({
    url: config.apiUrl + '/drinks',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const removeDrink = function (id) {
  return $.ajax({
    url: config.apiUrl + '/drinks/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateDrink = function (data) {
  return $.ajax({
    url: config.apiUrl + '/drinks/' + store.drinkId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  addDrink,
  getDrink,
  removeDrink,
  updateDrink
}
