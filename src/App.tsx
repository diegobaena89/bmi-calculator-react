import { useState } from "react";
import styles from "./App.module.css";
import poweredImage from "./assets/powered.png";
import { levels, calculateBmi } from "./helpers/bmi";

const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);

  const handleCalculateButton = () => {
    if (heightField && weightField) {
      alert("Fill all fields!");
    } else {
      alert("Fill all fields!");
    }
  };

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calculate your BMI</h1>
          <p>
            BMI is the acronym for body mass index, a parameter adopted by the
            World Health Organization to calculate the ideal weight of each
            person.
          </p>

          <input
            type="number"
            placeholder="Enter your height. Ex: 1.5 (in meters)"
            value={heightField > 0 ? heightField : ""}
            onChange={(e) => setHeightField(parseFloat(e.target.value))}
          />

          <input
            type="number"
            placeholder="Enter your weight. Ex: 75,3 (in kg)"
            value={weightField > 0 ? weightField : ""}
            onChange={(e) => setWeightField(parseFloat(e.target.value))}
          />

          <button onClick={handleCalculateButton}>Calculate</button>
        </div>
        <div className={styles.rightSide}>...</div>
      </div>
    </div>
  );
};

export default App;
