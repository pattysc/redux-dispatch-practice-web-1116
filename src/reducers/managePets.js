export let state;


export function managePets(state={pets: []}, action){
  if(action.type==="ADD_PET"){
    return {pets: state.pets.concat(action.payload)}
  }else if(action.type==="REMOVE_PET"){
    let index = state.pets.findIndex((pet) =>
      {return pet.id === action.payload}
    )
    let arr = state.pets.slice(0, index).concat(state.pets.slice(index + 1))
    return {pets: arr}
  }else {
    return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  const pets = state.pets.map( (pet) =>
    {return `<li>${pet.name}</li>`}
  ).join(' ')
  let c = document.getElementById('container')
  c.innerHtml = `<ul>${pets}</ul>`
}
