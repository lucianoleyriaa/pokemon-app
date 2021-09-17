import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ShowDetail.module.css";

const ShowDetail = () => {
   const { id } = useParams();
   const url = `https://lucianoleyria-pokemon-api.herokuapp.com/api/pokemons/${id}`;
   const [pokemon, setPokemon] = useState({});
   const [isFetching, setFetching] = useState(true);

   useEffect(() => {
      fetch(url)
         .then((data) => data.json())
         .then((response) => {
            console.log(response);
            setPokemon(response.pokemon);
            setFetching(false);
         });
   }, []);

   return (
      <Fragment>
         {!isFetching && (
            <div className={styles.details__container}>
               <div className={styles.details__images}>
                  <img src={pokemon.photo} alt={`${pokemon.name}'s`} />
               </div>
               <div className={styles.details__info}>
                  <div className={styles.basic__info}>
                     <h2>{pokemon.name}</h2>
                     <p>
                        <span>Description: </span>
                        {pokemon.description}
                     </p>
                     <p>
                        <span>Weight: </span>
                        {pokemon.weight}
                     </p>

                     <div className={styles.pokemon__characteristics}>
                        <div className={styles.pokemon__abilities}>
                           <h4>Abilities</h4>
                           {pokemon?.abilities.map((ability, index) => (
                              <p key={index} className={styles.ability__name}>
                                 {ability}
                              </p>
                           ))}
                        </div>
                        <div className={styles.pokemon__types}>
                           <h4>Types</h4>
                           {pokemon?.type.map((type, index) => (
                              <p key={index} className={styles.type__name}>
                                 {type}
                              </p>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         )}

         {isFetching && <p>Loading details...</p>}
      </Fragment>
   );
};

export default ShowDetail;
