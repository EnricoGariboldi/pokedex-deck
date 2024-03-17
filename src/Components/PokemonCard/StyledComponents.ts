import styled from "styled-components";

export const PokemonCardContainer = styled.div`
border: 10px solid transparent;
border-image: url(https://isurojit.github.io/pokemondatabase/static/media/border-img.4120e392.png)
  30;
border-radius: 10px;
padding: 20px;
background-color: white;
transition: ease-out;
-webkit-transition: -webkit-transform.3s;
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
`;

export const PokemonImage = styled.img`
width: 150px;
height: 150px;
margin: auto;
`;

export const PokemonName = styled.div`
font-size: 18px;
font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
  "Lucida Sans", Arial, sans-serif;
font-weight: 600;
text-transform: uppercase;
cursor: pointer;

&:hover {
  color: green;
  transform: scale(1.2);
  transition: 0.2s;
}
`;

export const DetailsWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 10px;
width: 100%;
`;

export const DetailsColumn = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
align-items: center;
`;

export const DetailsColumnTitle = styled.div`
font-size: 16px;
font-weight: 600;
font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
  "Lucida Sans", Arial, sans-serif;
  text-decoration: underline;
  text-underline-offset: 4px;
`;

export const Info = styled.div`
font-size: 14px;
font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
  "Lucida Sans", Arial, sans-serif;
`;

export const AddToDeckButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
padding: 5px 10px;
font-size: 16px;
font-weight: 600;
font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
  "Lucida Sans", Arial, sans-serif;
background-color: #228000;
border: 1px solid black;
color: white;
border-radius: 10px;
cursor: pointer;
transition: 0.2s;
margin-left: auto;

&:hover {
  color: black;
  background-color: white;
}
`;