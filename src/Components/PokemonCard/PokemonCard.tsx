import { useNavigate } from "react-router-dom";
import {
  setPokemonDeck,
} from "../../Store/PokemonSlice";
import { Ability, Pokemon, Type } from "../../interfaces";
import {
  AddToDeckButton,
  DetailsColumn,
  DetailsColumnTitle,
  DetailsWrapper,
  Info,
  PokemonCardContainer,
  PokemonImage,
  PokemonName,
} from "./StyledComponents";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

interface Props {
  pokemonData?: Pokemon;
  searchPage: boolean;
  pokemonDetailsProp?: any;
}

const PokemonCard: React.FC<Props> = ({
  pokemonData,
  searchPage,
  pokemonDetailsProp,
}) => {
  const [pokemonDetails, setPokemonDetails] = useState<any>(undefined);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(pokemonDetails)

  useEffect(() => {
    if (searchPage && pokemonData) {
      const fetchData = async () => {
        try {
          const response = await fetch(`${pokemonData.url}`);
          const data = await response.json();

          setPokemonDetails(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    } else {
      setPokemonDetails(pokemonDetailsProp);
    }
  }, []);

  return (
    <>
      {pokemonDetails !== undefined ? (
        <PokemonCardContainer>
          {searchPage ? (
            <AddToDeckButton
              onClick={() => {
                dispatch(setPokemonDeck(pokemonDetails));
              }}
            >
              Add to Deck
            </AddToDeckButton>
          ) : null}
          <PokemonImage
            alt="pokemon"
            loading="lazy"
            src={`https://img.pokemondb.net/artwork/large/${pokemonDetails.name}.jpg`}
          />
          <PokemonName
            onClick={() => {
              const queryParams = new URLSearchParams({ q: pokemonDetails.name });
              navigate("/SpecsPage?" + queryParams.toString());
            }}
          >
            {pokemonDetails.name}
          </PokemonName>

          <DetailsWrapper>
            <DetailsColumn>
              <DetailsColumnTitle>Base Exp</DetailsColumnTitle>
              <Info> {pokemonDetails.base_experience}</Info>
            </DetailsColumn>
            <DetailsColumn>
              <DetailsColumnTitle>Abilities</DetailsColumnTitle>
              {pokemonDetails.abilities.map((element: Ability) => {
                return (
                  <Info key={element.ability.url}> {element.ability.name}</Info>
                );
              })}
            </DetailsColumn>
            <DetailsColumn>
              <DetailsColumnTitle>Types</DetailsColumnTitle>
              {pokemonDetails.types.map((element: Type) => {
                return <Info key={element.type.url}> {element.type.name}</Info>;
              })}
            </DetailsColumn>
          </DetailsWrapper>
        </PokemonCardContainer>
      ) : null}
    </>
  );
};

export default PokemonCard;
