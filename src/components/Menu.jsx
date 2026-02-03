import FoodCard from "./FoodCard"

function Menu() {

  

  return (
    <div id="menu">
      
      <h3>Welcome to our restaurant!</h3>
      <h4>The best on Venezuelan cuisine</h4>

      <FoodCard 
        price={15} 
        foodName={"Pabellón Criollo"} 
      />

      <FoodCard foodName={"Sancocho"} price={12}/>
      <FoodCard foodName={"Patacones Margariteños"} price={16}/>
      <FoodCard foodName={"Cachapas con queso"} price={11}/>
      


      {/* <div className="container food-card">
        <h5>Sancocho</h5>
        <p>Price: 12 Euros</p>
        <p>available!</p>
      </div>

      <div className="container food-card">
        <h5>Patacones Margariteños</h5>
        <p>Price: 16 Euros</p>
        <p>available!</p>
      </div>

      <div className="container food-card">
        <h5>Cachapas con queso</h5>
        <p>Price: 11 Euros</p>
        <p>available!</p>
      </div> */}

    </div>
  )
}
export default Menu