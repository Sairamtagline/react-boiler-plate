export const ternary = (bool, truthy, falsy) => (bool ? truthy : falsy)

export const equal = (obj1, obj2 = 0) => ternary(obj1 === obj2, true, false)

export const head = obj => ternary(obj && obj[0], obj[0], undefined)

export const last = obj => ternary(obj, obj[length(obj) - 1], undefined)

export const length = obj => ternary(obj && obj.length, obj.length, undefined)

export const entries = obj => ternary(obj, Object.entries(obj), [])

export const values = object => ternary(object, Object.values(object), [])

export const keys = object => ternary(object, Object.keys(object), [])

export const freeze = () => Object.freeze([])
