import { useState } from "react";
import styles from "./App.module.css";
import poweredImage from "./assets/powered.png";
import { levels, calculateBmi, Level } from "./helpers/bmi";
import { GridItem } from "./components/GridItem/GridItem";
import leftArrowImage from "./assets/leftarrow.png";

const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const handleCalculateButton = () => {
    if (heightField && weightField) {
      setToShow(calculateBmi(heightField, weightField));
    } else {
      alert("Fill all fields!");
    }
  };

  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
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
        <div className={styles.rightSide}>
          {!toShow && (
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          )}
          {toShow && (
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img
                  src={leftArrowImage}
                  alt=""
                  width={35}
                  style={{ marginLeft: "14px" }}
                />
              </div>
              <GridItem item={toShow} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
