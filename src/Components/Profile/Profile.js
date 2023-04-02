import React from "react";
import './Profile.css'
import wardrobe from '../../Images/wardrobe.png'

const Profile = (userParam) => {

    return (
        <section>
            <section className="top-container">
                <img src={wardrobe} alt="wardrobe-icon" className="wardrobe-icon"/>
                <h3>My Closet</h3>
            </section>
            <section className="bottom-container">
                <div>Listings</div>
            </section>
        </section>
    )
}

export default Profile