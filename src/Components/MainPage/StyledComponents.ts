import styled from "styled-components";

export const MainPageContainer = styled.div`

display: flex;
flex-direction: column;
`;

export const HeadingContainer = styled.div`
display: flex;
`;

export const ContentWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 50px;
`;

export const Label = styled.div`
background-color: white;
`;

export const SearchBar = styled.input`
background-color: white;
    border-radius: 5px;
    width: 200px;
    height: 50px;
    font-size: 14px;
    padding: 5px;
    margin-left: auto;
    margin-right: auto;
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

export const prova = styled.div``;


