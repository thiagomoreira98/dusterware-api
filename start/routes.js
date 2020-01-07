'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Tupperware
Route.get('/tupperware', 'TupperwareController.index')
Route.post('/tupperware', 'TupperwareController.store')
Route.get('/tupperware/:id', 'TupperwareController.show')
Route.put('/tupperware/:id', 'TupperwareController.update')
Route.delete('/tupperware/:id', 'TupperwareController.destroy')

// Consumer
Route.get('/consumer', 'ConsumerController.index')
Route.post('/consumer', 'ConsumerController.store')
Route.get('/consumer/:id', 'ConsumerController.show')
Route.put('/consumer/:id', 'ConsumerController.update')
Route.delete('/consumer/:id', 'ConsumerController.destroy')

// Sale
Route.get('/sale', 'SaleController.index')
Route.post('/sale', 'SaleController.store')
Route.get('/sale/:id', 'SaleController.show')
Route.put('/sale/:id', 'SaleController.update')
