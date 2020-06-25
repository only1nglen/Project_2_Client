'use strict'

const showDrinksTemplate = require('./../templates/drink-listing.handlebars')

const displayDrinks = function (data) {
  const orderedDrinks = sortDrinks(data)
  const showDrinksHtml = showDrinksTemplate({ drinks: orderedDrinks })
  $('.content').html(showDrinksHtml)
}

// function to sort the drinks because drinks were being placed to the end instead of original spot after updateDrinkSuccess
// sorted by ID of entry
const sortDrinks = function (data) {
  const orderedDrinks = data.drinks.sort((drink1, drink2) => {
    if (drink1.id < drink2.id) {
      return -1
    } else {
      return 1
    }
  })
  return orderedDrinks
}

const getDrinkSuccess = function (data) {
  if (data.drinks.length === 0) {
    $('#nav-message').text('You have no drinks, Add a Drink!')
  } else {
    displayDrinks(data)
    $('.clear-list-drinks').show()
    $('#nav-message').text('Your Drinks!')
    $('.clear-list-places').hide()
  }
}

const getDrinkFailure = function () {
  $('#nav-message').text('You have no Drinks!')
}

const addDrinkSuccess = function (data) {
  displayDrinks(data)
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
  displayDrinks(data)
  $('.clear-list-drinks').show()
  $('#nav-message').text('Dumped a Drink!')
}

const removeDrinkFailure = function () {
  $('#nav-message').text('Could not Dump your Drink out!')
}

const updateDrinkSuccess = function (data) {
  displayDrinks(data)
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
