import React, { useState, useEffect } from "react";
import './Profile.css'
import wardrobe from '../../Images/wardrobe.png'
import { GET_USER } from '../../apiCalls'
import { useQuery } from "@apollo/client";
import { Redirect } from "react-router-dom";
import Card from "../Card/Card";
import Loading from "../Loading/Loading";

const Profile = (param) => {

    const [userListings, setListings] = useState([])
    const [user, setUser] = useState({})
    const [userID, setUserID] = useState(param.id)

    // const [userQuery, { loading, error, data }] = useLazyQuery(GET_USER)
    const {loading, error, data} = useQuery(GET_USER, {
        variables: {
            "id": userID
        }
    })

    useEffect(() => {
        if(data) {
            setUser(data.findUser)
            // setListings(user.articles)
        }
    }, [data])

    useEffect(() => {
        if(user.articles) {
            console.log("user", user)
            setListings(user.articles)
        }

    },[user])
    
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

    return (
        <section>
            <section className="top-container">
                <img src={wardrobe} alt="wardrobe-icon" className="wardrobe-icon"/>
                <h2>My Closet</h2>
            </section>
            <section className="bottom-container">
                <h4>Listings</h4>
                {loading &&  <div className="loading-div">
                    <Loading />
                </div>}
                {!loading && <div className="listings-container">{info}</div>}
            </section>
        </section>
    )
}

export default Profile