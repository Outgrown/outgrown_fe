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
          <select className='form-select' onChange={(e) => handleSelectedOptions(setArticle,e)}> 
            <option value={''}> All </option>
            <option value={'tops'}> Tops/Tees </option>
            <option value={'pants'}> Bottoms </option>
            <option value={'formal'}> Formal </option>
            <option value={'onesies'}> Onesies </option>
            <option value={'other'}> Other </option>
          </select>
        </div>
      <div className="age-group-sel">
        <label> Age Groups </label>
        <select className="form-select" value={kidAge} onChange={(e) => handleSelectedOptions(setKidAge,e)}> 
          <option className="form-opts" value={''}> All </option>
          <option className="form-opts" value={'baby'}> Baby(0-2yr) </option>
          <option className="form-opts" value={'todler'}> Toddler(2-4yr)</option>
          <option className="form-opts" value={'little_kid'}> Little Kid (5-7yr)</option>
          <option className="form-opts" value={'big_kid'}> Big Kid (8+)</option>
        </select>
        </div>
        <div className="gender-sel">
        <label> Gender </label>
          <select className='form-select' onChange={(e) => handleSelectedOptions(setKidGender,e)}> 
            <option className="form-opts" value={''}> All </option>
            <option className="form-opts" value={'boy'}> Boy </option>
            <option className="form-opts" value={'girl'}> Girl </option>
            <option className="form-opts" value={'unisex'}> Unisex</option>    
          </select>
        </div>
    </form>
  </section>



      
  )
  }
export default Form; 