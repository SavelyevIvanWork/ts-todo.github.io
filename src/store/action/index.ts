import * as UserActions from './user'
import * as TodoActions from './todo'

export default {
    ...UserActions,
    ...TodoActions
}