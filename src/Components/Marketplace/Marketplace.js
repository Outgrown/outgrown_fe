import React, { useState, useEffect } from "react";
import Form from "../Form/Form";
import Loading from "../Loading/Loading";
import Card from "../Card/Card"
import "./Marketplace.css"
import { Redirect } from "react-router-dom";
import { useQuery, useLazyQuery } from '@apollo/client';
import { GET_ALL_ARTICLES, FIND_ARTICLES } from '../../apiCalls';

export default function Marketplace() {
  const [allArticles, setAllArticles] = useState([])
  const [articleType, setArticleType] = useState('')
  const [ageGroup, setAgeGroup] = useState('')
  const [gender, setGender] = useState('')
  
  // const {loading, error, data} = useQuery(GET_ALL_ARTICLES)
  
  const [filterQuery, {loading, error, data}] = useLazyQuery(FIND_ARTICLES)

  console.log(data)
  console.log(allArticles)

  useEffect(() => {
    const variables = {
      articleType: articleType ? articleType : null,
      ageGroup: ageGroup ? ageGroup : null,
      gender: gender ? gender : null,
    }
    filterQuery({variables: variables})

  }, [articleType, ageGroup, gender])

  useEffect(() => {
    setAllArticles(data?.findArticles)
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