import styled from "styled-components";

export const DeckPageContainer = styled.div`
display: flex;
flex-direction: column;
gap: 50px;
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
margin-left: auto;
height: 50px;

&:hover {
  color: black;
  background-color: white;
}
`;

export const DataGrid = styled.div`
display: grid;
gap: 50px;

@media (min-width: 0px){
    grid-template-columns: 1fr;
}
@media (min-width: 768px){
    grid-template-columns: 1fr 1fr;
}
@media (min-width: 1200px){
    grid-template-columns: 1fr 1fr 1fr;
}
@media (min-width: 1920px){
    grid-template-columns: 1fr 1fr 1fr 1fr;
}
`;

export const DeckSum = styled.div`
margin-left: auto;
margin-right: auto;
font-size: 20px;
font-weight: 600;
font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
  "Lucida Sans", Arial, sans-serif;
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
  color:white;
`;
