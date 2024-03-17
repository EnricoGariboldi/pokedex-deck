import { DataGrid, DeckPageContainer, DeckSum, GoToButton } from "./StyledComponents";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PokemonCard from "../PokemonCard/PokemonCard";
import { useEffect, useState } from "react";

const DeckPage = () => {
  const navigate = useNavigate();
  const deck = useSelector((state: any) => state.pokemon.deck);
  const [sum, setSum] = useState(0);

  useEffect(() => {
   
    if(deck.length !== 0) {
      let tempSum = 0;

      deck.map((pokemon: any)=> {
        tempSum = tempSum + pokemon.base_experience
      })
      setSum(tempSum)
    }

    
  }, [deck]);

  return (
   <DeckPageContainer>
              <GoToButton
            onClick={() => {
              navigate("/");
            }}
          >
            Go to Research
          </GoToButton>
          <DeckSum>My Deck Total Experience: {sum}</DeckSum>
          <DataGrid>
          {deck.length !== 0 && deck.map((pokemon: any) => {
            return <PokemonCard key={pokemon.name} pokemonDetailsProp={pokemon} searchPage={false} />;
          })}
        </DataGrid>
   </DeckPageContainer>
  );
}

export default DeckPage;
