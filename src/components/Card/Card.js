import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card = (props) => {
   return (
      <div className={styles.card}>
         <div className={styles.card__img}>
            <img src={props.pokemon.photo} alt="Pokemon" />
         </div>
         <div className={styles.card__description}>
            <h2 className={styles.description__name}>{props.pokemon.name}</h2>
            <p className={styles.description__weight}>{props.pokemon.weight}</p>
            {props.children}

            <div className={styles.pokemon__characteristics}>
               <div className={styles.pokemon__types}>
                  <h4>Type</h4>
                  <ul className={styles.types__list}>
                     {props.pokemon.type.map((type, index) => {
                        return <li key={index}>-{type}</li>;
                     })}
                  </ul>
               </div>
               <div className={styles.pokemon__abilities}>
                  <h4>Abilities</h4>
                  <ul className={styles.abilities__list}>
                     <li>- Poison</li>
                     <li>- Grass</li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Card;
