import './sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>MyMoney - תפריט</h2>
      <ul>
        <li>
          <Link to="/" className="button">דף הבית</Link>
        </li>
        <li>
          <Link to="/income" className="button">הכנסות</Link>
        </li>
        <li>
          <Link to="/expenses" className="button">הוצאות</Link>
        </li>
        <li>
          <Link to="/reports" className="button">דוחות</Link>
        </li>
        <li>
          <Link to="/calendar" className="button">לוח שנה</Link>
        </li>
        <li>
          <Link to="/profile" className="button">פרופיל</Link>
        </li>
        <li>
          <Link to="/settings" className="button">הגדרות</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
