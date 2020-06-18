'use strict'

const showDrinksTemplate = require('./../templates/drink-listing.handlebars')

const getDrinkSuccess = function (data) {
  // console.log(data.drinks, 'get drink')
  if (data.drinks.length === 0) {
    $('#nav-message').text('You have no drinks, Add a Drink!')
  } else {
    // store.showDrinksHtml = showDrinksTemplate({drinks: data.drinks})
    $('.content').html(showDrinksTemplate({drinks: data.drinks}))
    $('.clear-list-drinks').show()
    $('#nav-message').text('Your Drinks!')
    $('.clear-list-places').hide()
  }
}

const getDrinkFailure = function () {
  $('#nav-message').text('You have no Drinks!')
}

const addDrinkSuccess = function (data) {
  $('.content').html(showDrinksTemplate({drinks: data.drinks}))
  // console.log(data.drinks, 'added drink')
  $('#add-drink-modal').modal('toggle')
  $('.clear-list-drinks').show()
  $('#nav-message').text('Drink Added!')
  $('#add-new-drink')[0].reset('')
}

const addDrinkFailure = function () {
  // $('#add-drink-modal').modal('toggle')
  $('#nav-message').text('Add Drink Fail!')
}

const removeDrinkSuccess = function (data) {
  // console.log(data.drinks, 'removed drink')
  $('.content').html(showDrinksTemplate({drinks: data.drinks}))
  $('.clear-list-drinks').show()
  $('#nav-message').text('Dumped a Drink!')
}

const removeDrinkFailure = function () {
  $('#nav-message').text('Could not Dump your Drink out!')
}

const updateDrinkSuccess = function (data) {
  $('.content').html(showDrinksTemplate({drinks: data.drinks}))
  // console.log(data.drinks, 'updated drink')
  $('#patch-drink-modal').modal('toggle')
  $('#nav-message').text('Update Successful')
  $('#patch-drink')[0].reset('')
}

const updateDrinkFailure = function () {
  $('#nav-message').text('Could not edit your Drink!')
}

module.exports = {
  addDrinkSuccess,
  addDrinkFailure,
  getDrinkSuccess,
  getDrinkFailure,
  removeDrinkSuccess,
  removeDrinkFailure,
  updateDrinkSuccess,
  updateDrinkFailure
}
