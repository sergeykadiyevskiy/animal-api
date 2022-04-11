import React from "react";
import { Link } from "react-router-dom";
import HomeButton from "../assets/home-button.png";
import axios from "axios";

const Animals = () => {
  const [items, setItems] = React.useState([]);
  const candidateId = "?candidateID=facf61ea-881c-4ee8-82f0-a0463bd5a6f5";

  React.useEffect(() => {
    axios({
      method: "GET",
      url: `https://animalrestapi.azurewebsites.net/Animal/List/${candidateId}`,
    })
      .then((res) => {
        setItems(res.data.list);
      })
      .catch((err) => {
        console.log("something went wrong, ", err);
      });
  }, []);




  

  return (
    <div>
      <header>
        <Link to="/">
          <img src={HomeButton} alt="homebtn" />
        </Link>
      </header>
      <div>
        <ul style={{ listStyleType: "none", margin: "50px auto" }}>
          {items.map((item) => {
            return (
              <div>
                <li style={{ padding: "50px" }}>
                  <img
                    style={{ width: "75px" }}
                    src={item.imageURL}
                    alt="item"
                  />
                  <h2>{item.commonName}</h2>

                  <Link to={item.id}>More Info</Link>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Animals;
