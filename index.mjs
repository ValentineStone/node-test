import dynamicImports from 'dynamic-imports'

(async function () {
  await dynamicImports.export('55757', `
    export let data = { name: String, age: Number }
    export function calculate(data) {
      return data.name + ' is of age ' + data.age
    }
  `)
  console.log((await dynamicImports.import('55757')).calculate({ name: 'Jhon', age: 13 }))
})()