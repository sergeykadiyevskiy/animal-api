import React from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import HomeButton from "../assets/home-button.png";

const OneAnimal = () => {
  const candidateId = "?candidateID=facf61ea-881c-4ee8-82f0-a0463bd5a6f5";
  const [item, setItem] = React.useState([]);
  const { id } = useParams();

  React.useEffect(() => {
    axios
      .get(
        `https://animalrestapi.azurewebsites.net/Animal/Id/${id}/${candidateId}`
      )
      .then((res) => {
        console.log(res);
        setItem(res.data.animal);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <header>
        <Link to="/">
          <img src={HomeButton} alt="homebtn" />
        </Link>
      </header>
      <img
        style={{ width: "150px", position: "relative", paddingTop: "100px" }}
        src={item.imageURL}
        alt="item"
      />
      <p>Common Name: {item.commonName}</p>
      <p>Scientific Name: {item.scientificName}</p>
      <p>Family: {item.family}</p>
    </div>
  );
};

export default OneAnimal;
