import storeFactory from './store'
import  { suggestResortnames } from './actions'
const store = storeFactory()

store.dispatch(
    suggestResortnames('d')
)