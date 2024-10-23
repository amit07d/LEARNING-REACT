import styles from './ButtonsContainer.module.css'

const ButtonsContainer = () => {

  const buttonsNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.',]

  return (
    <div className={styles.buttonsContainer} >
      {buttonsNames.map((keyName, index) => {
        return (
          <button key ={index} className={styles.button}>{keyName}</button>
      )
    })}
      </div>
  )
}
export default ButtonsContainer;