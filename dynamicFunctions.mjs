import vm from 'vm'

export default {
  set, get, call
}

const modules = {}
const linker = () => { throw new Error('import not allowed in dynamic modules') }

async function set(name, code) {
  let newModule = new vm.Module(code, { context: vm.createContext() })
  await newModule.link(linker)
  newModule.instantiate()
  await newModule.evaluate()
  modules[name] = newModule.namespace
}

function call(name, ...args) {
  get(name).apply()
}

function get(name) {
  if (modules[name])
    return modules[name]
  else
    throw new Error(`No such dynamic module defined: ${name}`)
}