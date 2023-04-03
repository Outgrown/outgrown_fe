import React, { useState, useEffect } from "react";
import Form from "../Form/Form";
import Loading from "../Loading/Loading";
import Card from "../Card/Card";
import Error from "../Error/Error";
import "./Marketplace.css";
import { Redirect } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";
import { FIND_ARTICLES } from "../../apiCalls";

export default function Marketplace({navParam}) {
  const [allArticles, setAllArticles] = useState([]);
  const [articleType, setArticleType] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [gender, setGender] = useState("");

  const [filterQuery, { loading, error, data }] = useLazyQuery(FIND_ARTICLES);

  useEffect(() => {
    const variables = {
      articleType: articleType ? articleType : null,
      ageGroup: ageGroup ? ageGroup : null,
      gender: gender ? gender : null,
    };
    console.log(variables);
    filterQuery({ variables: variables });
  }, [articleType, ageGroup, gender]);

  useEffect(() => {
    if (data) {
      setAllArticles(data.findArticles);
    }
  }, [data]);

  useEffect(() => {
    console.log(allArticles);
  }, [allArticles]);

  let info;
  if (error) {
    info = <Redirect to="/error" />;
  } else if (!loading) {
    // console.log(new Set(allArticles.map(art => art.articleType)))
    info = allArticles.map((art) => (
      <Card
        key={art.id}
        id={art.id}
        name={art.name}
        ageGroup={art.ageGroup}
        imageLink={art.imageLink}
        altImage={art.altImage}
        price={art.price}
      />
    ));
  }

  return (
    <>
      <Form
        navParam={navParam}
        setArticleType={setArticleType}
        setAgeGroup={setAgeGroup}
        setGender={setGender}
      />
      {/* <div className="loading-div">
        <Loading />
      </div> */}
      {error && <Error message={error?.message} />}
      {loading &&  <div className="loading-div">
          <Loading />
        </div>}
      {!loading && !info.length && !error?.message && <p>Sorry, no items found for those filters</p>}
      {!loading && info.length > 0 && <div className="market-container">{info}</div>}

    </>
  );
}
