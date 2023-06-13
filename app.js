import { findDuplicateValue } from "./array/duplicateValue";
let data = [20, 20, 40, 2, 30, 50, 2, 30, 55, 50, 1, 6, 9, 9]

console.log(findDuplicateValue(data));



// check uncheck



import { useState } from 'react';

function CheckboxList() {
  const [items, setItems] = useState([
    { id: 1, label: 'Item 1', checked: false },
    { id: 2, label: 'Item 2', checked: false },
    { id: 3, label: 'Item 3', checked: false },
  ]);

  const handleCheckboxChange = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          checked: !item.checked,
        };
      }
      return item;
    });

    setItems(updatedItems);
  };

  const filteredItems = items.filter((item) => item.checked);

  return (
    <div>
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>{item.label}</li>
        ))}
      </ul>
      <div>
        {items.map((item) => (
          <label key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheckboxChange(item.id)}
            />
            {item.label}
          </label>
        ))}
      </div>
    </div>
  );
}

filter
        // let newRes: any = res?.filter(
        //     (ele: any) => ele !== undefined && ele !== '\n' && /^[0-9]/.test(ele),
        // );

 const filterData = (data: any) => {
        let data = undefined;
        const checkNumerics = /\d+\.\s(.*?)(?=,|\n|$)/g;
        let newRes: any = data.toString()?.match(checkNumerics);
        if (newRes) {
            data = newRes?.map((ele: any) => ele?.replace(/^\d+\.\s/, ''));
        }
        return data;
    };
filterData(data)

<h2>{filterData(list)}</h2>



import React, { useState } from "react";

const DistanceCalculator = () => {
  const [location1, setLocation1] = useState("");
  const [location2, setLocation2] = useState("");
  const [distance, setDistance] = useState("");

  const calculateDistance = async () => {
    // Check if both locations are provided
    if (location1 && location2) {
      try {
        // Convert location strings to coordinates using the Geocoding API
        const coordinates1 = await geocode(location1);
        const coordinates2 = await geocode(location2);

        // Calculate distance using Haversine formula
        const distance = haversineDistance(
          coordinates1.lat,
          coordinates1.lng,
          coordinates2.lat,
          coordinates2.lng
        );

        setDistance(distance.toFixed(2) + " km");
      } catch (error) {
        console.log(error);
        setDistance("Error retrieving coordinates");
      }
    } else {
      setDistance("Please enter both locations");
    }
  };

  const geocode = async (location) => {
    try {
      // Make a request to the Geocoding API
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          location
        )}&key=AIzaSyBE8t4cZOiXveVFhFl18cYuQiziblthdsY`
      );
      const data = await response.json();

      if (data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry.location;
        return { lat, lng };
      } else {
        throw new Error("No results found");
      }
    } catch (error) {
      throw new Error("Geocoding request failed");
    }
  };

  const haversineDistance = (lat1, lon1, lat2, lon2) => {
    const earthRadius = 6371; // Radius of the Earth in kilometers
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) *
        Math.cos(toRadians(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadius * c;

    return distance;
  };

  const toRadians = (degrees) => {
    return (degrees * Math.PI) / 180;
  };

  return (
    <div>
      <h2>Distance Calculator</h2>
      <label htmlFor="location1">Location 1:</label>
      <input
        type="text"
        id="location1"
        value={location1}
        onChange={(e) => setLocation1(e.target.value)}
      />
      <br />
      <label htmlFor="location2">Location 2:</label>
      <input
        type="text"
        id="location2"
        value={location2}
        onChange={(e) => setLocation2(e.target.value)}
      />
      <br />
      <button onClick={calculateDistance}>Calculate Distance</button>
      <p>{distance}</p>
    </div>
  );
};

export default DistanceCalculator;


const calculateRemainingTime = () => {
        let remainingTime = null
        const expiryDate = new Date('2026-05-23');
        const currentTime = new Date();
        const timeDifference = expiryDate - currentTime;
        console.log(timeDifference, "time dff")
        // Check if the expiry date has passed
        if (timeDifference <= 0) {
            // Handle the case when the expiry date has passed
            clearInterval(this.interval);
            remainingTime = null
            return;
        }

        // Calculate the remaining time in days, hours, minutes, and seconds
        const months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDifference / 1000) % 60);

        // Set the remaining time in the state
        console.log(months, "months")
        console.log(days, "days")
        console.log(hours, "hours")
        // remainingTime = days
    };
    calculateRemainingTime()



//jsx
 const [toggleCart, setToggleCart] = useState(false);
    const [activeTab, setActiveTab] = useState("tab1");
const handleTab = (tab) => {
        setActiveTab(tab)
    }
            <div className={`right-cart ${toggleCart ? 'right-cart-active' : ''}`}>
                <div className="toogle-icon" onClick={() => setToggleCart(!toggleCart)}>v</div>
                <div className="cart-header">
                    <div className={`tab ${activeTab === 'tab1' ? 'active-tab' : ''} product-tab`} onClick={() => handleTab('tab1')}>Product</div>
                    <div className={`tab ${activeTab === 'tab2' ? 'active-tab' : ''} price-tab`} onClick={() => handleTab('tab2')}>Price</div>
                    <div className={`tab ${activeTab === 'tab3' ? 'active-tab' : ''}  order-tab`} onClick={() => handleTab('tab3')}>Order</div>
                </div>

                <div className="cart-body">
                    {
                        activeTab === "tab1" ?

                            <div className="product-data">
                                product is available here...
                            </div>
                            :
                            activeTab === "tab2" ?

                                <div className="price-data">
                                    price is available here...
                                </div>
                                :
                                <div className="order-data">
                                    order is available here...
                                </div>
                    }
                </div>
            </div>
            
//             end
//csss

.right-cart {
    max-width: 350px;
    width: 100%;
    position: absolute;
    right: 10px;
    bottom: 2px;
    background: #f7f7f7;
    max-height: 600px;
    height: 100%;
    border-radius: 12px;
    box-shadow: 1px 3px 5px 4px rgba(0, 0, 0, 0.5);
    /* overflow-x: hidden; */
    transition: 0.6s;
}

.right-cart-active {
    max-height: 38px;
    height: 100%;
}

.right-cart .cart-header {
    padding: 0px 12px;
    background: #f9f9f9;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 0.5px solid #b3b3b3 !important;
    cursor: pointer;
    border-radius: 12px;
    overflow: hidden;
}



.right-cart .tab {
    padding: 10px 40px;
    border-right: 0.5px solid #b3b3b3 !important;
    color: #858585;
}

.right-cart .tab.active-tab {
    background: #d8d8d8 !important;
}

.cart-body {
    padding: 10px;
}



.toogle-icon {
    background: #cdcdcd;
    width: 91px;
    height: 17px;
    position: absolute;
    top: -17px;
    left: 50%;
    transform: translate(-50%, 0%);
    border-radius: 84px 84px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: start;
    cursor: pointer;
    /* z-index: -1; */
}

.toogle-icon:hover {
    background: #f7f7f7;
}

