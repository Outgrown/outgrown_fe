import React,{useState, useEffect}from "react"
import { useQuery, gql } from '@apollo/client';
import { GET_ARTICLE } from "../../apiCalls";
import './Details.css'


const Details = () => {
const [desiredItem, setDesiredItem] = useState(null)

  const {loading, error, data} = useQuery(GET_ARTICLE,{
      variables:{
        "id": "2",
        "name": "Clownfish"
      }
  })
// setDesiredItem(data)// infinite loop error 
console.log('Hit Point 1',data)
// console.log('Will This work', data.findArticle) // after reRender error




  












 

  return(<section className="clothing-details">
  <section>
    {/* <img src={foundArticle.imageLink} alt={foundArticle.altImage}/> */}
  </section>
  <section>
    <h2> </h2>
    <h2> Price:</h2>
    <h3> Owner:</h3>
    <div> 
      <h3>Age Group </h3>
      <h3> Change me! </h3>
    </div>
    <div>
      <h3> Gender </h3>
      <h3> Change me </h3>
    </div>
    <div>
      <h3>Type</h3>
      <h3> Change me </h3>
    </div>
    <div>
      <h3> Condition</h3>
      <h3> Change me </h3>
    </div>
    <div>
      <h3> Description</h3>
      <p> Special sentence text... </p>
    </div>
    <div>
      <h3> Condition</h3>
      <h3> Change me </h3>
    </div>
    <button> Add to Profile </button>
    </section>
  </section>
  )
}
export default Details; 