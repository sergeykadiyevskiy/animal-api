import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import HomeButton from '../assets/home-button.png'
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 20px;
  padding-top: 50px;
  margin: auto;
  width: 50vw;
`;
const NewAnimal = () => {

  const candidateId = "?candidateID=facf61ea-881c-4ee8-82f0-a0463bd5a6f5";
  
  const [id, setId] = React.useState('')
  const [commonName, setCommonName] = React.useState('')
  const [scientificName, setScientificName] =  React.useState('')
  const [family, setFamily] =  React.useState('')
  const [imageURL, setImageURL] = React.useState('')
  const [error, setError] =  React.useState('')

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      id,
      commonName,
      scientificName,
      family,
      imageURL,
    };
    axios
      .post(`https://animalrestapi.azurewebsites.net/Animal/Create/${data}/${candidateId}`)
      .then((response) => {
         navigate("/animals");
         console.log(data)
      })
      .catch((e) => {
    console.log(e)
        setError("There was an error, please try again");
      });
  };

  return (
    
    <div>
     <Link to='/'><img src={HomeButton} alt='homebtn' /></Link>
     <div>

      <form onSubmit={handleSubmit}>
    <Container>
        {error !== "" && <p>{error}</p>}
     
           <div>
          <label htmlFor="name">ID: </label>
          <input
            type="text"
            id="id"
            name="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
           <div>
          <label htmlFor="name">Common Name: </label>
          <input
            type="text"
            id="commonName"
            name="commonName"
            value={commonName}
            onChange={(e) => setCommonName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="scientificName">Scientific Name: </label>
          <input
            type="text"
            id="scientificName"
            name="scientificName"
            value={scientificName}
            onChange={(e) => setScientificName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="family">Family: </label>
          <input
            type="text"
            id="family"
            name="family"
            value={family}
            onChange={(e) => setFamily(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="name">Image URL: </label>
          <input
            type="text"
            id="imageURL"
            name="imageURL"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
        </div>
    </Container>
        <button type="submit"> CREATE </button>
      </form>
     </div>
    </div>
  );
};
export default NewAnimal;