'use strict'

const config = require('./../config')
const store = require('./../store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const addDrink = function (data) {
  // console.log(data, 'is data')
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
  signUp,
  signIn,
  changePassword,
  signOut,
  addDrink,
  getDrink,
  removeDrink,
  updateDrink
}
