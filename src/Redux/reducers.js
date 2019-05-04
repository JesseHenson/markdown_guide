import {TEXT_AREA_CHANGED, NOTHING_LEFT_TEXTAREA, MARKUP_STARTER, OPEN_REF} from './constants'
import { combineReducers } from '../../../../../../AppData/Local/Microsoft/TypeScript/3.4.3/node_modules/redux';

const initialState = {
  markupTextArea: MARKUP_STARTER,
  isRefOpen: false
}

export const headerReducer = (state = initialState.isRefOpen, action) => {
  switch (action.type) {
    case OPEN_REF: 
      return !state
    default: 
      return state
  }
}

export const previewerReducer = (state = initialState.markupTextArea, action) => {
  switch (action.type) {
    case TEXT_AREA_CHANGED:
      return {...state, markupTextArea: action.payload} 
    case NOTHING_LEFT_TEXTAREA: 
      return {...state, markupTextArea: initialState.markupTextArea};
    default: 
      return state;
  }
}

export const combinedReducer = combineReducers({previewer: previewerReducer, header: headerReducer})