const ErrorMessage = ( {items} ) => {

  // let foodItems = ['Dal', 'Green Veggies', 'Roti', 'Salad', 'Milk','Cheese'];

  return <>
    {items.length === 0 && <h3>I am still hungry.</h3>}
</> 
}

export default ErrorMessage;
