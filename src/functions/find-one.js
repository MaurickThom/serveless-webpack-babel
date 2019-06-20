if (!global._babelPolyfill) {
  require("babel-polyfill");
}

import { findOne } from '../find-one'
import { HttpStatus } from '../constants'

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*', //stateOrigin ? host : freeAccess[0],
  'Access-Control-Allow-Credentials': false,
  'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Accept, Origin'
}


const resolveResponse = (data = {}, statusCode = 404) =>{
  statusCode,
    return {
    headers,
    body: JSON.stringify(data)
  }
}


export const handler = async event => {
  const { query } = event
  console.log(body)
  try{
    const element = await findOne('5d0bf84564e61d1e76fdc8d1')
    return resolveResponse(element, HttpStatus.OK)
  } catch(e) {
    return resolveResponse(e.message, HttpStatus.NOT_FOUND)
  }
};
