import {
  ROTATE
} from '../constants/actionTypes';

// アクションの振る舞いを実装する関数
export default (state, action) => {
  switch (action.type) {
    case ROTATE:
      return {
        rotating: action.payload
      };
    default:
      return state;
  }
};
