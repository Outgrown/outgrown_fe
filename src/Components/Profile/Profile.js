import React, { useState, useEffect } from "react";
import './Profile.css'
import wardrobe from '../../Images/wardrobe.png'
import { GET_USER } from '../../apiCalls'
import { useQuery } from "@apollo/client";
import { Redirect } from "react-router-dom";
import Card from "../Card/Card";
import Loading from "../Loading/Loading";
import { handleError } from "@apollo/client/link/http/parseAndCheckHttpResponse";

const Profile = (param) => {

    const [userListings, setListings] = useState([])
    const [user, setUser] = useState({})
    const [userID, setUserID] = useState(param.id)
    const [userFilter, setUserFilter] = useState('')

    const {loading, error, data} = useQuery(GET_USER, {
        variables: {
            "id": userID
        }
    })

    useEffect(() => {
        if(data) {
            setUser(data.findUser)
        }
    }, [data])

    useEffect(() => {
        if(user.articles) {
            console.log("user", user)
            setListings(user.articles)
        }

    },[user])

    useEffect(() => {
        if(user.articles) {
            let arr = user.articles
            let filteredArray = arr.filter((listing) => listing.status === userFilter)
            setListings(filteredArray)
        }
    },[userFilter])
    
    let info;

    if (error) {
        info = <Redirect to="/error" />;
    } else if (!loading) {
        info = userListings.map((listing) => 
            <Card
            key={listing.id}
            id={listing.id}
            name={listing.name}
            ageGroup={listing.ageGroup}
            imageLink={listing.imageLink}
            altImage={listing.altImage}
            price={listing.price}
            status={listing.status}
          />
        )
    }

    const handleOption = (action, e) => {
        action(e.target.value)
    }

    return (
        <section>
            <section className="top-container">
                <img src={wardrobe} alt="wardrobe-icon" className="wardrobe-icon"/>
                <h2>My Wardrobe</h2>
            </section>
            <section className="bottom-container">
                <label className="options-container"> Status:
                    <select onChange={(e) => handleOption(setUserFilter, e)}>
                        <option value={''}> All </option>
                        <option className="available-button status-button" value={'available'}>Available</option>
                        <option className="unavailable-button status-button" value={'unavailable'}>Unavailable</option>
                        <option className="pending-button status-button" value={"pending"}>Pending</option>
                    </select>
                </label>
                {loading &&  <div className="loading-div">
                    <Loading />
                </div>}
                {!loading && <div className="listings-container">{info}</div>}
            </section>
        </section>
    )
}

export default Profile