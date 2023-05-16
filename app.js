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

 const filterData = (gapData: any) => {
        let gap = undefined;
        const checkNumerics = /\d+\.\s(.*?)(?=,|\n|$)/g;
        let newRes: any = gapData.toString()?.match(checkNumerics);
        if (newRes) {
            gap = newRes?.map((ele: any) => ele?.replace(/^\d+\.\s/, ''));
        }
        return gap;
    };
filterData(data)



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

