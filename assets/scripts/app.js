'use strict'

const authEvents = require('./auth/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#patch-drink').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('.userface').hide()
  $('#drunk').hide()
  // your JS code goes here
  authEvents.addHandlers()
})
