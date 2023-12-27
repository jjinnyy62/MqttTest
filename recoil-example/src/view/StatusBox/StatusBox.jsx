import styles from './StatusBox.module.css';

export default function StatusBox({
  text,
  backgroundColor = 'green',
  textColor = 'white',
  width = 100,
  height = 40,
}) {
  return (
    <div
      className={styles.box}
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        width: width,
        height: height,
      }}
    >
      {text}
    </div>
  );
}
