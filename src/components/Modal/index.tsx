import styles from "./styles.module.css";

export function Modal({ close, children }) {
  return (
    <>
      <div className={styles.darkBG} onClick={close} />
      <div className={styles.centered}>
        <div className={styles.modal}>{children}</div>
      </div>
    </>
  );
}

export default Modal;
