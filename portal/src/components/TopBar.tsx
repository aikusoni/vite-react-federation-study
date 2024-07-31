import { Link } from 'react-router-dom';

function TopBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/management/dashboard">DASHBOARD</Link>
        </li>
        <li>
          <Link to="/management/details">DETAILS</Link>
        </li>
        <li>
          <Link to="/board/notice">NOTICE</Link>
        </li>
        <li>
          <Link to="/board/user-board">USER BOARD</Link>
        </li>
      </ul>
    </nav>
  )
}

export default TopBar
