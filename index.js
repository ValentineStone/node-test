const dynamicFunctions = require('./dynamicFunctions')

dynamicFunctions.set('55757', 'module.exports = {boi: 13}')
console.log(dynamicFunctions.get('55757'))