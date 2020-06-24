'use strict'

const showDrinksTemplate = require('./../templates/drink-listing.handlebars')

const getDrinkSuccess = function (data) {
  // console.log(data.drinks, 'get drink')
  if (data.drinks.length === 0) {
    $('#nav-message').text('You have no drinks, Add a Drink!')
  } else {
    // store.showDrinksHtml = showDrinksTemplate({drinks: data.drinks})
    const orderedDrinks = sortDrinks(data)
    const showDrinksHtml = showDrinksTemplate({ drinks: orderedDrinks })
    $('.content').html(showDrinksHtml)
    $('.clear-list-drinks').show()
    $('#nav-message').text('Your Drinks!')
    $('.clear-list-places').hide()
  }
}

const getDrinkFailure = function () {
  $('#nav-message').text('You have no Drinks!')
}

const addDrinkSuccess = function (data) {
  const orderedDrinks = sortDrinks(data)
  const showDrinksHtml = showDrinksTemplate({ drinks: orderedDrinks })
  $('.content').html(showDrinksHtml)
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
  const orderedDrinks = sortDrinks(data)
  const showDrinksHtml = showDrinksTemplate({ drinks: orderedDrinks })
  $('.content').html(showDrinksHtml)
  $('.clear-list-drinks').show()
  $('#nav-message').text('Dumped a Drink!')
}

const removeDrinkFailure = function () {
  $('#nav-message').text('Could not Dump your Drink out!')
}

const updateDrinkSuccess = function (data) {
  const orderedDrinks = sortDrinks(data)
  const showDrinksHtml = showDrinksTemplate({ drinks: orderedDrinks })
  $('.content').html(showDrinksHtml)
  // console.log(data.drinks, 'updated drink')
  $('#patch-drink-modal').modal('toggle')
  $('#nav-message').text('Update Successful')
  $('#patch-drink')[0].reset('')
}

const updateDrinkFailure = function () {
  $('#nav-message').text('Could not edit your Drink!')
}

// function to sort the drinks because drinks were being placed to the end instead of original order
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
