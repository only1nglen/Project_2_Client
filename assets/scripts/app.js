'use strict'

const authEvents = require('./auth/events.js')
const drinksEvents = require('./drinks/events.js')
const placeEvents = require('./places/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.show-change-password-btn, #change-password, #sign-out, .user-content, .clear-list-drinks, .clear-list-places').hide()
  // your JS code goes here
  authEvents.addHandlers()
  drinksEvents.addHandlers()
  placeEvents.addHandlers()
})
