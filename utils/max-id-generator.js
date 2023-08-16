// maximum id generator
const MaxID_generator = (items, initial) => {
  let maxId = parseInt(initial)
  if (!items.length) {
    return maxId + 1
  }
  for (let i = 0; i < items.length; i++) {
    const currID = parseInt(items[i].id)
    console.log(currID)
    if (currID > maxId) {
      maxId = currID
    }
  }
  return (maxId + 1).toString()
}
module.exports = MaxID_generator
