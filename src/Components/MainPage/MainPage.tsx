import { ChangeEvent, useEffect, useState } from "react";
import {
  ContentWrapper,
  DataGrid,
  GoToButton,
  HeadingContainer,
  MainPageContainer,
  SearchBar,
} from "./StyledComponents";
import PokemonCard from "../PokemonCard/PokemonCard";
import { Pokemon } from "../../interfaces";
import { useSelector, useDispatch } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import { setCloseAlert, setPokemonsList, setSearchValue } from "../../Store/PokemonSlice";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storeState = useSelector((state: any) => state.pokemon);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    setSearchInput(storeState.searchValue);
  }, [storeState.searchValue]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=100000"
        );
        const data = await response.json();
        setAllPokemons(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

    const { value } = e.target;
    setSearchInput(value);
    dispatch(setSearchValue(e.target.value))

    if (value.length >= 3) {
      let filteredPokemons = [];
      filteredPokemons = allPokemons.filter((pokemon: Pokemon) =>
        pokemon.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      dispatch(setPokemonsList(filteredPokemons))
     
    } else {
      dispatch(setPokemonsList([]))
    }
  };

  return (
    <MainPageContainer>
      <ContentWrapper>
        <HeadingContainer>
          <SearchBar
            value={searchInput}
            className="SearchBar"
            type="search"
            placeholder="Search Pokemons..."
            onChange={(e) => {
              handleChange(e);
            }}
            
          />
          <GoToButton
            onClick={() => {
              navigate("/DeckPage");
            }}
          >
            See your Deck
          </GoToButton>
        </HeadingContainer>
        <DataGrid>
          {storeState.results.map((pokemon: Pokemon) => {
            return <PokemonCard key={pokemon.name} pokemonData={pokemon} searchPage={true}/>;
          })}
        </DataGrid>
      </ContentWrapper>
      {storeState.openAlert === true &&
      storeState.alertSituation === "failure" ? (
        <Snackbar
          open={storeState.openAlert}
          autoHideDuration={2000}
          onClose={() => {
            dispatch(setCloseAlert());
          }}
        >
          <Alert
            onClose={() => {
              dispatch(setCloseAlert());
            }}
            severity="error"
            variant="filled"
            sx={{ width: "fit-content" }}
          >
            Pokemon added already. Choose a different one to add.
          </Alert>
        </Snackbar>
      ) : storeState.openAlert === true &&
        storeState.alertSituation === "success" ? (
        <Snackbar
          open={storeState.openAlert}
          autoHideDuration={2000}
          onClose={() => {
            dispatch(setCloseAlert());
          }}
        >
          <Alert
            onClose={() => {
              dispatch(setCloseAlert());
            }}
            severity="success"
            variant="filled"
            sx={{ width: "fit-content" }}
          >
            Pokemon added successfully.
          </Alert>
        </Snackbar>
      ) : null}
    </MainPageContainer>
  );
};

export default MainPage;
