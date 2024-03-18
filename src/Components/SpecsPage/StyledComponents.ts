import styled from "styled-components";

export const SpecsPageContainer = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
`;

export const GoToButton = styled.button`
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
height: 50px;

&:hover {
  color: black;
  background-color: white;
}
`;

export const ButtonsContainer = styled.div`
display: flex;
gap: 50px;
justify-content: flex-end;
`;

export const PokemonContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 30px;
`;

export const Container = styled.div<{span: string}>`
border: 10px solid transparent;
border-image: url(https://isurojit.github.io/pokemondatabase/static/media/border-img.4120e392.png)
  30;
border-radius: 10px;
padding: 20px;
background-color: white;
transition: ease-out;
-webkit-transition: -webkit-transform.3s;
display: flex;
align-items: center;
grid-row: ${(props) => props.span};
`;

export const PokemonImage = styled.img`
width: 150px;
height: 150px;
margin: auto;
@media (min-width: 0px){
  transform: scale(1);
}
@media (min-width: 992px){
  transform: scale(1.5);
}
@media (min-width: 1200px){
  transform: scale(2);
}

`;

export const DataContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 10px;
width: 100%;
`;

export const DataCell = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
width: 100%;
`;

export const DataTitle = styled.div`
font-size: 18px;
font-weight: 600;
font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
  "Lucida Sans", Arial, sans-serif;
  text-decoration: underline;
  text-transform: uppercase;  
`;

export const DataValue = styled.div`
font-size: 16px;
font-weight: normal;
font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
  "Lucida Sans", Arial, sans-serif;
`;

export const PokemonName = styled.div`
margin-left: auto;
margin-right: auto;
font-size: 40px;
font-weight: 600;
font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
  "Lucida Sans", Arial, sans-serif;
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
  color:white;
  text-transform: uppercase;
`;

export const SpecsContainer = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
`;

export const StatLinearContainer = styled.div`
font-size: 14px;
font-weight: 600;
font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
  "Lucida Sans", Arial, sans-serif;
  margin-right: 5px;
  width: 100px;
`;