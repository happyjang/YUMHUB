import React, { useEffect, useState } from "react";
import axios from "axios";

import { Loader } from "../Loader";
import { RestaurantCard } from "./RestaurantCard";
//import { use } from "passport";


function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    //console.log("hello")
    setLoading(true);
    loadRestaurants();
    //setLoading(false);
},[])

  const loadRestaurants = async () => {
    //setLoading(true);
    setError(null);


    // class Restaurants extends Component {
    //   state = { restaurants: [], loading: false };
    
      try {
        //setLoading(true);
        const response = await axios("/api/restaurants");

        //console.log(response.data)

        await setRestaurants(response.data);
        await setLoading(false);


      } catch (e) {
        console.error(e);
        setLoading(false);
      }
    }
 
    
  //async componentDidMount() {

  //const { loading, restaurants } = state;

  //if (restaurants.length === 0 && !loading)
  //return <div className="center">No Restaurants Found.</div>;

  return (
    restaurants.length === 0 && !loading  ?
      <div className="center">No Restaurants Found.</div>
      :
      <div className="container" style={{ width: "100%" }}>
        <div className="row">
          <div className="landing-copy col s12 center-align">
            {loading ? (
              <Loader />
            ) : (
                <div className="row">
                  {restaurants.map(rest => (
                    <RestaurantCard key={rest._id} rest={rest} />
                  ))}
                </div>
              )}
          </div>
        </div>
      </div>
  );
}


export default Restaurants;
