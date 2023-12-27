import { Link } from 'react-router-dom';

export default function NavigationBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Main</Link>
        </li>
        <li>
          <Link to='/dataPage'>Data</Link>
        </li>
        <li>
          <Link to='/dataPage'>Config</Link>
        </li>
        <li>
          <Link to='/dataPage'>Log</Link>
        </li>
      </ul>
    </nav>
  );
}
