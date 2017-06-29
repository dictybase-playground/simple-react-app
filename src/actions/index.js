let nextHobbieId = 0

//takes the text from AddHobbie field (in the container) and returns
//proper "Action" JSON to send to other components

export const addHobbie = (text) => ({
  type: 'ADD_HOBBIE',
  id: nextHobbieId++,
  text
})

