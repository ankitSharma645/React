import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = () => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div classNameName={styles.buttonsContainer}>
      {buttonNames.map((buttonName) => (
        <button classNameName={styles.button}>{buttonName}</button>
      ))}
    </div>
  );
};

export default ButtonsContainer;