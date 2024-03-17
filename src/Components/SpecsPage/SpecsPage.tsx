import { useLocation, useNavigate } from "react-router-dom";
import {
  ButtonsContainer,
  GoToButton,
  Container,
  PokemonContainer,
  SpecsPageContainer,
  PokemonImage,
  DataContainer,
  DataTitle,
  DataValue,
  DataCell,
  PokemonName,
  SpecsContainer,
  StatLinearContainer,
} from "./StyledComponents";
import { useEffect, useState } from "react";
import { Ability, Stat } from "../../interfaces";
import LinearProgress from "@mui/material/LinearProgress";
import { Box, Typography } from "@mui/material";

const SpecsPage = () => {
  const [specs, setSpecs] = useState<any>();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const qValue = queryParams.get("q");

  const normalise = (value: any) => ((value - 0) * 100) / (200 - 0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/` + qValue
        );
        const data = await response.json();

        setSpecs(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <SpecsPageContainer>
      <ButtonsContainer>
        <GoToButton
          onClick={() => {
            navigate("/");
          }}
        >
          Go to Research
        </GoToButton>
        <GoToButton
          onClick={() => {
            navigate("/DeckPage");
          }}
        >
          See your Deck
        </GoToButton>
      </ButtonsContainer>
      {specs ? (
        <SpecsContainer>
          <PokemonName>{specs.name}</PokemonName>
          <PokemonContainer>
            <Container span="span 2">
              <PokemonImage
                alt="pokemon"
                loading="lazy"
                src={`https://img.pokemondb.net/artwork/large/${qValue}.jpg`}
              />
            </Container>
            <Container span="span 1">
              <DataContainer>
                <DataCell>
                  <DataTitle>Height</DataTitle>
                  <DataValue>{specs.height}</DataValue>
                </DataCell>
                <DataCell>
                  <DataTitle>Weight</DataTitle>
                  <DataValue>{specs.weight}</DataValue>
                </DataCell>
                <DataCell>
                  <DataTitle>Base Experience</DataTitle>
                  <DataValue>{specs.base_experience}</DataValue>
                </DataCell>
                <DataCell>
                  <DataTitle>Abilities</DataTitle>
                  {specs.abilities.map((ability: Ability) => {
                    return (
                      <DataValue key={ability.ability.name}>
                        {ability.ability.name}
                      </DataValue>
                    );
                  })}
                </DataCell>
              </DataContainer>
            </Container>
            <Container span="span 1">
              <DataCell>
                <DataTitle>
                  Stats
                </DataTitle>
                {specs.stats.map((stat: Stat) => {
                  return (
                    <Box key={stat.stat.name} sx={{ display: "flex", alignItems: "center" }}>
                      <StatLinearContainer>
                        {stat.stat.name}
                      </StatLinearContainer>
                      <Box sx={{ width: "100%", mr: 1 }}>
                          <LinearProgress
                          variant="determinate"
                          value={normalise(stat.base_stat)}
                        />
                      </Box>
                      <Box sx={{ minWidth: 5 }}>
                        <Typography variant="body2" color="text.secondary">
                          {stat.base_stat}
                        </Typography>
                      </Box>
                    </Box>
                  );
                })}
              </DataCell>
            </Container>
          </PokemonContainer>
        </SpecsContainer>
      ) : null}
    </SpecsPageContainer>
  );
};

export default SpecsPage;
