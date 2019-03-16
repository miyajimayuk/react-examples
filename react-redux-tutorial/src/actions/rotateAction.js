import {
  ROTATE
} from '../constants/actionTypes';

const rotateAction = (payload) => {
  return {
    type: ROTATE,
    payload
  }
}
export default rotateAction;
