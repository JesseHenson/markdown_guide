import {TEXT_AREA_CHANGED, NOTHING_LEFT_TEXTAREA, OPEN_REF} from './constants'

export const changeTextArea = (payload) => ({type: TEXT_AREA_CHANGED, payload})
export const nothingLeftTextArea = () => ({type: NOTHING_LEFT_TEXTAREA})
export const openRef = {type: OPEN_REF}