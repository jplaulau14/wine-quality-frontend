import { useState } from "react";
import reactLogo from "./assets/react.svg";
import dog from "./assets/dog.jpg";
import jepoy from "./assets/jepoy.jpg";
import "./App.css";

function App(props) {
  const [enteredSulphate, setEnteredSulphate] = useState("");
  const [enteredAlcohol, setEnteredAlcohol] = useState("");
  const [enteredAcidity, setEnteredAcidity] = useState("");
  const [enteredSulfur, setEnteredSulfur] = useState("");
  const [enteredDensity, setEnteredDensity] = useState("");
  const [image, setImage] = useState("");

  const enteredSulphateHandler = (event) => {
    setEnteredSulphate(event.target.value);
  };

  const enteredAlcoholHandler = (event) => {
    setEnteredAlcohol(event.target.value);
  };

  const enteredAcidityHandler = (event) => {
    setEnteredAcidity(event.target.value);
  };

  const enteredSulfurHandler = (event) => {
    setEnteredSulfur(event.target.value);
  };

  const enteredDensityHandler = (event) => {
    setEnteredDensity(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    fetch(
      "https://wine-quality-backend.herokuapp.com/?" +
        new URLSearchParams({
          sulphates: enteredSulphate,
          alcohol: enteredAlcohol,
          volatile_acidity: enteredAcidity,
          total_sulfur_dioxide: enteredSulfur,
          density: enteredDensity,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        openPicture(data.prediction);
      });
  };

  const openPicture = (response) => {
    console.log(response);
    if (response == "1") {
      setImage(jepoy);
    } else {
      setImage(dog);
    }
  };

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <label>Sulphates</label>
        <input
          type="number"
          name="sulphates"
          value={enteredSulphate}
          onChange={enteredSulphateHandler}
          required
        />
        <label>Alcohol</label>
        <input
          type="number"
          name="alcohol"
          value={enteredAlcohol}
          onChange={enteredAlcoholHandler}
          required
        />
        <label>Volatile Acidity</label>
        <input
          type="number"
          name="acidity"
          value={enteredAcidity}
          onChange={enteredAcidityHandler}
          required
        />
        <label>Total Sulfur Dioxide</label>
        <input
          type="number"
          name="sulfur"
          value={enteredSulfur}
          onChange={enteredSulfurHandler}
          required
        />
        <label>Density</label>
        <input
          type="number"
          name="density"
          value={enteredDensity}
          onChange={enteredDensityHandler}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <img src={image} />
    </div>
  );
}

export default App;
