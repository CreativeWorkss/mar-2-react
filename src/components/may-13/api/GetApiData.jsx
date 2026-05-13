import React, { useState, useEffect } from "react";
import data from "./data.json";

const GetApiData = () => {
  const [items, setItems] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        console.log("i have data", data);
        const result = await response.json();
        // mock the response
        //const result = data;
        console.log("copy the data after here ---- ", JSON.stringify(result));
        setItems(result);
        setDataIsLoaded(true);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  // if data is not loaded

  if (!dataIsLoaded) {
    return (
      <div>
        <h1>Please wait some time....</h1>
      </div>
    );
  }
  return (
    <div>
      <h3>Fetch data from an API in React</h3>
      <div>
        {items.map((item) => (
          <div key={item.id}>
            <ol>
              <div>
                <strong>User_Name: </strong>
                {item.username},
              </div>
              <div>Full_Name: {item.name}</div>
              <div>User_Email: {item.email}</div>
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
};
export default GetApiData;
