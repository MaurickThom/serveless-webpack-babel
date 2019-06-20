if (!global._babelPolyfill) {
  require("babel-polyfill");
}
import data from '../data/data.json'

export const findOne = (id) => {
  return new Promise((resolve, reject) => {
    const elem = data.find(user => user._id === id)
    if(elem) {
      resolve(elem)
    } else {
      reject(new Error(`Use doesn't exist.`))
    }
  })
}