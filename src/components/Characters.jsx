import charList from "../data/characters.js"  

const titles = ['TEENAGE', 'MUTANT', 'NINJA', 'TURTLES'];

function Characters() {


  return (
    <>
      <div id="header" className="container">
        {titles.map((eachtitle,i) => {
          return <h1 key={i}>{eachtitle}</h1>;
        })}
      </div>

      <hr />

      <div id="character-list" className="container">
        {/* your iteration 2 code here. Below is the structure for each character in the data */}
        {charList.map((eachCharacter) => {

          const containerStyles = { 
            backgroundColor: eachCharacter.color 
          }

          return (
            <div className="container" style={ containerStyles }>
            <h3>Name: {eachCharacter.name}</h3>
            <p>Weapon: {eachCharacter.weapon}</p>
            {/* { eachCharacter.name === "splinter" ? <p><span className="emoji">🐀</span></p> : <p><span className="emoji">🐢</span></p> } */}

            <p> <span className="emoji"> {eachCharacter.name === "splinter" ? "🐀" : "🐢"} </span> </p>

            {/* {eachCharacter.name === "leonardo" ? <p><span className="emoji">⭐</span></p> : null} */}

            {/* //* short circuit evaluation */}
            {(eachCharacter.name === "leonardo" || eachCharacter.name === "raphael") && <p><span className="emoji">⭐</span></p>}
            
            
          </div>
          )
        })}


      </div>
    </>
  )
}
export default Characters