// import {
//   MaSuperApp
// } from './app/MaSuperApp'
// import {
//   AppDispatcher
// } from './app/AppDispatcher'

// import {
//   DemoComponent,
//   ACTION_APP
// } from './modules/DemoComponent'

// const APP = new MaSuperApp(new AppDispatcher());
// (function(app) {
//   const applicationComponentToken = app.addComponent(DemoComponent, document.body)
//   let action = app.Component(applicationComponentToken).Action(ACTION_APP)
//   app.createAction(action, action.type('APP_INITIALIZED'), {
//     message: 'HEY YOUR APPLICATION IS READY, ENJOY !!'
//   })
// })(APP)

// export {
//   APP
// }

/* global test expect */
/* eslint no-undef: "error" */
test('adds 1 + 2 to equal 3', () => {
  expect(2).toBe(3)
})
test('adds 1 + 2 to equal 3', () => {
  expect().assertions(5)
})
