import * as UserActions from './user'
import * as TodoActions from './todo'
import * as FilterActions from "./filter"

export default {
    ...UserActions,
    ...TodoActions,
    ...FilterActions
}