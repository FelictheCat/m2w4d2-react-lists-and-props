function FoodCard(props) {
  console.log(props) // ALWAYS an object

  return (
    <div className="container food-card">
      <h5>{props.foodName}</h5>
      <p>Price: {props.price} Euros</p>
      <p>available!</p>
    </div>
  )
}
export default FoodCard
