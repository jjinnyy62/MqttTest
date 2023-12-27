import styles from './Table.module.css';

export default function Table({ header, data }) {
  return (
    <div className={styles.main}>
      <table className={styles.table}>
        <thead>
          <tr>
            {header.map((item) => (
              <th key={item}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.position}</td>
              <td>{item.size}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
