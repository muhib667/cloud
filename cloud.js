npx create-react-app google-maps-app
cd google-maps-app
npm install google-map-react
npm install @material-ui/core @material-ui/icons
// src/LandingPage.js
import React from "react";
import GoogleMapReact from "google-map-react";
import { makeStyles } from "@material-ui/core/styles";
import RoomIcon from "@material-ui/icons/Room";

const useStyles = makeStyles({
  mapContainer: {
    height: "80vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  mapMarker: {
    color: "red",
    fontSize: 48
  }
});

const LandingPage = () => {
  const classes = useStyles();

  return (
    <div>
      <h1>Welcome to Our Site</h1>
      <div className={classes.mapContainer}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "YOUR_GOOGLE_MAPS_API_KEY" }}
          defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
          defaultZoom={12}
        >
          <RoomIcon
            className={classes.mapMarker}
            lat={37.7749}
            lng={-122.4194}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default LandingPage;
// src/App.js
import React from "react";
import LandingPage from "./LandingPage";

function App() {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
npm start
