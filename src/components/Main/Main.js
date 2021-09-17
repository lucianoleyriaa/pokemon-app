import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import styles from "./Main.module.css";

const Main = (props) => {
   const [pokemons, setPokemons] = useState([]);
   const [isFetching, setFetching] = useState(true);

   useEffect(() => {
      fetch("https://lucianoleyria-pokemon-api.herokuapp.com/api/pokemons")
         .then((data) => data.json())
         .then((pokemons) => {
            setPokemons((lastState) => {
               return [...lastState, ...pokemons.allPokemons];
            });
            setFetching(false);
         });
   }, []);

   // const openModal = async (id) => {
   //    const data = await fetch(`http://localhost:3000/api/pokemons/${id}`);
   //    const pokemon = await data.json();
   //    console.log(pokemon);
   // };

   return (
      <div className={styles.main}>
         {isFetching && <h3 className={styles.loading}>Loading pokemons...</h3>}
         {!isFetching && (
            <div className={styles.grid}>
               {pokemons.map((pokemon, index) => {
                  return (
                     <Link
                        to={`/pokemons/${pokemon.id}`}
                        className={styles.link}
                        key={pokemon.id}
                     >
                        <Card
                           pokemon={pokemon}
                           // openModal={openModal}
                           key={index}
                        />
                     </Link>
                  );
               })}
            </div>
         )}
      </div>
   );
};

export default Main;
