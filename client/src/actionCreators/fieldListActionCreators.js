import { TOGGLE_BOX } from '../constants/fieldListConstants'

export const uncheckBox = boxID => ({
	boxID,
	type: TOGGLE_BOX
})
