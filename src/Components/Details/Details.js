import React, { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import { useQuery, gql, useMutation } from "@apollo/client";
import { GET_ARTICLE, POST_USER } from "../../apiCalls";
import "./Details.css";
import Loading from "../Loading/Loading";

const Details = ({ id, name, loggedUser }) => {
  
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  const { loading, error, data } = useQuery(GET_ARTICLE, {
    variables: {
      id: id,
      name: name,
    },
  });
  
  return(<section className="clothing-details">
   <Modal
        open={modalIsOpen}
        picture={data?.findArticle?.imageLink}
        description={data?.findArticle?.description}
        updateModal={setModalIsOpen}
        articleID={id}
        loggedInUser={loggedUser}
        sell={+data?.findArticle?.user?.id === +loggedUser}
        status={data?.findArticle.status}
      />
      
    {/* {error && <Error/>} */}
    {loading && !error && <section className="loading-details-display"><Loading/></section> }
    
    {!loading && !error && <section className="detail-card-display">
      <article className="image-area">
        <img className="article-img" src={data.findArticle.imageLink} alt={data.findArticle.altImage}/>
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
            <h3 className="age-d"> {data.findArticle.ageGroup}</h3>
          </div>
          <div className="trait-wrap">
            <h3> Gender </h3>
            <h3 className="gender-d"> {data.findArticle.gender}</h3>
          </div>
          <div className="trait-wrap">
            <h3>Type</h3>
            <h3 className="type-d">{data.findArticle.articleType} </h3>
          </div>
          <div className="trait-wrap">
            <h3> Condition</h3>
            <h3 className='condition-d'> {data.findArticle.condition} </h3>
          </div>
          <div className="trait-wrap">
            <h3> Color </h3>
            <h3 className="color-d"> {data.findArticle.color} </h3>
          </div>
        </div>
        <div className='desc-area'>
          <h3> Description</h3>
          <p className="desc-d"> {data.findArticle.description} </p>
        </div>
       <div>
          {+data.findArticle.user.id !== +loggedUser && <button  onClick={() => setModalIsOpen(true)} className="details-btn"> Add To Profile </button>}
          {+data.findArticle.user.id === +loggedUser && data.findArticle.status !== 'available' && <button onClick={() => setModalIsOpen(true)} className="details-btn"> Add To Market </button>} 
          {+data.findArticle.user.id === +loggedUser && data.findArticle.status === 'available' && <button onClick={() => setModalIsOpen(true)} className="details-btn" > Remove from Marketplace </button>}
        </div>
        </section>
        </section>
      }
    </section>
  );
};
export default Details;
