import React, { useState, useEffect } from "react";
import Form from "../Form/Form";
import Loading from "../Loading/Loading";
import Card from "../Card/Card"
import "./Marketplace.css"
import { Redirect } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { GET_ALL_ARTICLES } from '../../apiCalls';

export default function Marketplace() {
  const [allArticles, setAllArticles] = useState([])
  const [articleType, setArticleType] = useState('')
  const [ageGroup, setAgeGroup] = useState('')
  const [gender, setGender] = useState('')

  const {loading, error, data} = useQuery(GET_ALL_ARTICLES)
  
  useEffect(() => {
    setAllArticles(data?.allArticles)
  }, [loading])

  let info
  if(error) {
    info = <Redirect to="/error" />
  } else if (!loading && allArticles) {
    // console.log(new Set(allArticles.map(art => art.articleType)))
    info = allArticles.map(art => 
      <Card 
        key={art.id}
        id={art.id}
        name={art.name}
        ageGroup={art.ageGroup}
        imageLink={art.imageLink}
        altImage={art.altImage}
        price={art.price}
       />
    )
  }

  return (
    <>
      <Form 
        setArticleType={setArticleType} 
        setAgeGroup={setAgeGroup} 
        setGender={setGender}
      />
      {loading ? <Loading /> :
      <div className="market-container">
        {info}
      </div>}
    </>
  )
}