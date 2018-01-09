import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_PIC = 'GET_PIC';
const POST_PIC = 'POST_PIC';

/**
 * INITIAL STATE
 */
var pic = [];

/**
 * ACTION CREATORS
 */
 //instead of three create remove and upate, make this into an object that contain selected product and an array. When updating a product dispatch bth putproduct and fetchsingle product
const getPic = pic => ({type: GET_PIC, pic});
const postPic = pics => ({type: POST_PIC, pics});

/**
 * THUNK CREATORS
 */
export const fetchPic = () =>
  dispatch =>
    axios.get('/api/favorite')
      .then(res =>
        dispatch(getPic(res.data))
      )
      .catch(err => console.log(err));

  export const createPic = like =>
    dispatch =>
      axios.post('/api/favorite', {"hey": like})
      .then(res =>
        dispatch(postPic(res.data))
      )
      .catch(err => console.log(err));

/**
 * REDUCER
 */
export default function (state = pic, action) {
  switch (action.type) {
    case GET_PIC:
      return action.pic;
    case POST_PIC:
      return [...state, action.pics];
    default:
      return state;
  }
}
