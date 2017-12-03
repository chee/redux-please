export default function createAction (type) {
  function action (payload) {
    return {
      type,
      payload
    }
  }

  action.type = type

  return action
}
