'use strict'

const authEvents = require('./auth/events.js')
const placeEvents = require('./places/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#patch-drink').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('.userface').hide()
  $('#add-drink').hide()
  $('.clear-list-drinks').hide()
  $('.clear-list-places').hide()
  // your JS code goes here
  authEvents.addHandlers()
  placeEvents.addHandlers()
})
