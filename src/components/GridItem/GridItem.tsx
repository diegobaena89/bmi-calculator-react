import { Level } from "../../helpers/bmi";
import styles from "./GridItem.module.css";
import upImage from "../../assets/up.png";
import downImage from "../../assets/down.png";

type Props = {
  item: Level;
};

export const GridItem = ({ item }: Props) => {
  return (
    <div className={styles.main} style={{ backgroundColor: item.color }}>
      <div className={styles.gridIcon}>
        {item.icon === "up" && <img src={upImage} alt="" width={30} />}
        {item.icon === "down" && <img src={downImage} alt="" width={30} />}
      </div>
      <div className={styles.gridTitle}>{item.title}</div>

      {item.yourBmi && (
        <div className={styles.yourBmi}>Your Bmi is {item.yourBmi} kg/m².</div>
      )}

      <div className={styles.gridInfo}>
        <>
          BMI is between <strong>{item.bmi[0]}</strong> and{" "}
          <strong>{item.bmi[1]}</strong>
        </>
      </div>
    </div>
  );
};
