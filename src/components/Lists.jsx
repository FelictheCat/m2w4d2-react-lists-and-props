function Lists() {

  let username = "Bob"
  let age = 50
  let recipe = {
    title: "Strogonoff",
    calories: 1000
  }

  let vegetables = ["potato", "tomato", "lettuce", "onion", "potato"]
  
  // let vegetablesJSX = [<p>potato</p>, <p>tomato</p>,  <p>lettuce</p>, <p>onion</p>]

  // let vegetablesJSX = vegetables.map((eachVegetable) => {
  //   return (
  //     <p>{eachVegetable}</p>
  //   )
  // })

  return (
    <div>
      
      <p>The username is: {username}</p> 
      <p>the name is: {age}</p>
      <p>The recipe title is: {recipe.title}</p>

      {/* everytime we add a map to react, we need to add a key to THE FIRST element being rendered inside the map. The value should be unique for each element. */}

      { vegetables.map((veggie, i) => {
        return (<p key={i}>{veggie}</p>)
      }) }

    </div>
  )
}
export default Lists

// rfc => creates a component with export in the same line
// rfce => creates a component with export at the end