import userEvent from "@testing-library/user-event";
import React from "react";
import { useState, useEffect } from "react";
import './Form.css'
const Form = () => {

  const [clothingArticle , setArticle] = useState('')
  const [kidAge, setKidAge]= useState ('')
  const [kidGender , setKidGender] = useState('')
  const [searchedItem, setSearchedItem] = useState('')
 
  
  const handleSelectedOptions = (action,e) => {
   action(e.target.value) 
  }

  

return(<section className="form-field">
    <form className="selects-form">
     <div className="clothing-article-sel"> 
       <label> Article Types </label>
         <select onChange={(e) => handleSelectedOptions(setArticle,e)}> 
           <option value={'Top/Tees'}> Tops/Tees </option>
           <option value={'pants'}> Pants </option>
           <option value={'activeWear'}> Active Wear </option>
         </select>
      </div>
     <div className="age-group-sel">
       <label> Age Groups </label>
      <select onChange={(e) => handleSelectedOptions(setKidAge,e)}> 
         <option value={'baby'}> Baby(0-2yr) </option>
         <option value={'toddler'}> Toddler(2-4yr)</option>
         <option value={'smallKid'}> Small Kid (5-7yr)</option>
         <option value={'bigKid'}> Big Kid (8+)</option>
       </select>
      </div>
      <div className="gender-sel">
       <label> Gender </label>
         <select onChange={(e) => handleSelectedOptions(setKidGender,e)}> 
             <option value={'boy'}> Boy </option>
             <option value={'girl'}> Girl </option>
             <option value={'unisex'}> Unisex</option>    
         </select>
      </div>
      <div className="submit-area">
         <button type="Submit"> Submit </button>
      </div>
   </form>
    <div className="search-area">
      <input
        placeholder="Search by Title"
        name='searchedItem'
        onChange={(e) => handleSelectedOptions(setSearchedItem,e)}
      /> 
      <button> Search </button>
    </div>

</section>



    
)
}
export default Form; 