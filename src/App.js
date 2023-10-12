import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import MainNavigaton from "./components/layout/MainNavigation";
function App() {
  return (
    <div>
      <MainNavigaton/>
        <Switch>
          <Route path="/" exact>
            <AllMeetupsPage></AllMeetupsPage>
          </Route>
          <Route path="/new-meetup" exact>
            <NewMeetupPage></NewMeetupPage>
          </Route>
          <Route path="/favorites" exact>
            <FavoritesPage>Favorites</FavoritesPage>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
