export default function createReducer (initialState, handlers) {
  return function reducer (state = initialState, action) {
    const {
      type,
      payload = {}
    } = action

    const handler = handlers[type]

    if (handler) return handler(state, payload)

    return state
  }
}
