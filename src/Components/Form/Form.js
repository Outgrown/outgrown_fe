import userEvent from "@testing-library/user-event";
import React from "react";
import { useState, useEffect } from "react";
import './Form.css'
const Form = ({navParam, setArticleType, setAgeGroup, setGender}) => {

  const [clothingArticle , setArticle] = useState('')
  const [kidAge, setKidAge]= useState(navParam || '')
  const [kidGender , setKidGender] = useState('')
  // const [searchedItem, setSearchedItem] = useState('')
  
  useEffect(() => {
    setArticleType(clothingArticle)
  }, [clothingArticle])
  
  useEffect(() => {
    setAgeGroup(kidAge)
  }, [kidAge])
  
  useEffect(() => {
    setGender(kidGender)
  }, [kidGender])

  useEffect(() => {
    setAgeGroup(navParam)
  },[navParam])

  const handleSelectedOptions = (action,e) => {
    action(e.target.value) 
  }
  

  return(<section className="form-field">
      <form className="selects-form">
      <div className="clothing-article-sel"> 
        <label> Article Types </label>
          <select onChange={(e) => handleSelectedOptions(setArticle,e)}> 
            <option value={''}> All </option>
            <option value={'tops'}> Tops/Tees </option>
            <option value={'bottoms'}> Bottoms </option>
            <option value={'dresses'}> Dresses </option>
            <option value={'other'}> Other </option>
          </select>
        </div>
      <div className="age-group-sel">
        <label> Age Groups </label>
        <select value={kidAge} onChange={(e) => handleSelectedOptions(setKidAge,e)}> 
          <option value={''}> All </option>
          <option value={'baby'}> Baby(0-2yr) </option>
          <option value={'todler'}> Toddler(2-4yr)</option>
          <option value={'little'}> Little Kid (5-7yr)</option>
          <option value={'big_kid'}> Big Kid (8+)</option>
        </select>
        </div>
        <div className="gender-sel">
        <label> Gender </label>
          <select onChange={(e) => handleSelectedOptions(setKidGender,e)}> 
            <option value={''}> All </option>
            <option value={'male'}> Boy </option>
            <option value={'female'}> Girl </option>
            <option value={'unisex'}> Unisex</option>    
          </select>
        </div>
        <div className="submit-area">
          <button type="Submit"> Submit </button>
        </div>
    </form>
      {/* <div className="search-area">
        <input
          placeholder="Search by Title"
          name='searchedItem'
          onChange={(e) => handleSelectedOptions(setSearchedItem,e)}
        /> 
        <button> Search </button>
      </div> */}

  </section>



      
  )
  }
export default Form; 