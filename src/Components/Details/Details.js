import React,{useState, useEffect}from "react"
import { useQuery, gql, useMutation } from '@apollo/client';
import { GET_ARTICLE, POST_USER } from "../../apiCalls";
import './Details.css'
import Loading from "../Loading/Loading";


const Details = ({id , name, loggedUser}) => {
  // const [desiredItem, setDesiredItem] = useState(null)
 const [updateUser, outCome] = useMutation(POST_USER);
  console.log('TESTTTME',outCome.data);
  

  const {loading, error, data} = useQuery(GET_ARTICLE,{
      variables:{
        "id": id,
        "name": name
      }
  })
console.log('Current PERSON',data?.findArticle?.user?.id);

  console.log('INCOMING PERSON',loggedUser)
  
  return(<section className="clothing-details">
    {/* {error && <Error/>} */}
    {loading && !error && <Loading/> }
    
    {!loading && !error && <section className="detail-card-display">
      <article className="image-area">
        <img src={data.findArticle.imageLink} alt={data.findArticle.altImage}/>
      </article>
      <section className="details-cont">
        <div className="vital-info"> 
          <h2> {data.findArticle.name}</h2>
          <h3> Owner: {data.findArticle.user.name} </h3>
          <h3> Status: {data.findArticle.status} </h3>
          <h4> Cost: ${data.findArticle.price}</h4>
        </div>
        <div className="info-wrap"> 
          <div className="trait-wrap"> 
            <h3>Age Group </h3>
            <h3> {data.findArticle.ageGroup}</h3>
          </div>
          <div className="trait-wrap">
            <h3> Gender </h3>
            <h3> {data.findArticle.gender}</h3>
          </div>
          <div className="trait-wrap">
            <h3>Type</h3>
            <h3>{data.findArticle.articleType} </h3>
          </div>
          <div className="trait-wrap">
            <h3> Condition</h3>
            <h3> {data.findArticle.condition} </h3>
          </div>
          <div className="trait-wrap">
            <h3> Color </h3>
            <h3> {data.findArticle.color} </h3>
          </div>
        </div>
        <div className='desc-area'>
          <h3> Description</h3>
          <p> {data.findArticle.description} </p>
        </div>
       <div>
          {+data.findArticle.user.id !== loggedUser && <button onClick={()=> updateUser({ variables:{ article: { id: data.findArticle.id, userId:loggedUser}}})} className="details-btn"> Add To Profile </button>}
          {+data.findArticle.user.id === loggedUser && <button className="details-btn"> Add To Market </button>} 
        </div>
        </section>
    </section> }
  </section> )
}
export default Details; 