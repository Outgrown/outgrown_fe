import React,{useState, useEffect}from "react"
import { useQuery, gql } from '@apollo/client';
import { GET_ARTICLE } from "../../apiCalls";
import './Details.css'
import Loading from "../Loading/Loading";


const Details = () => {
const [desiredItem, setDesiredItem] = useState(null)

  const {loading, error, data} = useQuery(GET_ARTICLE,{
      variables:{
        "id": "2",
        "name": "Clownfish"
      }
  })


 useEffect(() => {
  setDesiredItem(data)
  console.log('hit',desiredItem);
},[loading, error])



  return(<section className="clothing-details">
    {/* {error && <Error/>} */}
    {loading && !error && <Loading/> }
  {!loading && !error && <>
  <section className="image-area">
    <img src={'https://b3h2.scene7.com/is/image/BedBathandBeyond/mktplace-s-7457227c-d85c-4898-b1d3-bf9e8ffdaac9'} alt={data.findArticle.altImage}/>
  </section>
  <section className="details-cont">
    <h2> Price: ${data.findArticle.price}</h2>
    <h3> Owner: {data.findArticle.user.name}</h3>
    <h3> Availability:{data.findArticle.status}</h3>
    <div> 
      <h3>Age Group </h3>
      <h3> {data.findArticle.ageGroup} </h3>
    </div>
    <div>
      <h3> Gender </h3>
      <h3> {data.findArticle.gender}</h3>
    </div>
    <div>
      <h3>Type</h3>
      <h3> {data.findArticle.articleType}</h3>
    </div>
    <div>
      <h3> Condition</h3>
      <h3> {data.findArticle.condition} </h3>
    </div>
    <div>
      <h3> Description</h3>
      <p> {data.findArticle.description} </p>
    </div>
    <div>
      <h3> Color </h3>
      <h3> {data.findArticle.color} </h3>
    </div>
    <button> Add to Profile </button>
    </section>
  
  </> }
  </section>
   
  
  )
}
export default Details; 