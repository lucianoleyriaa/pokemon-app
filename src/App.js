import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ShowDetail from "./components/ShowDetail/ShowDetail";

function App() {
   return (
      <div className="App">
         <Header />
         <Switch>
            <Route path="/" exact>
               <Redirect to="/pokemons" />
            </Route>
            <Route path="/pokemons" exact>
               <Main />
            </Route>
            <Route path="/pokemons/:id">
               <ShowDetail />
            </Route>
         </Switch>
      </div>
   );
}

export default App;
