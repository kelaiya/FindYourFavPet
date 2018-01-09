import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_INFO = 'GET_INFO';

/**
 * INITIAL STATE
 */
var info = [];

/**
 * ACTION CREATORS
 */
const getInfo = info => ({type: GET_INFO, info});

/**
 * THUNK CREATORS
 */
export const fetchInfo = () =>
  dispatch =>
    axios.get(' https://s3-us-west-2.amazonaws.com/lcjobs/octodex.json')
    .then(res =>
      dispatch(getInfo(res.data))
    )
    .catch(err => console.log(err));

/**
 * REDUCER
 */
export default function (state = info, action) {
  switch (action.type) {
    case GET_INFO:
      return [...state, action.info];
    default:
      return state;
  }
}
