import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

const Dashboard: React.FC = () => {
  const totalIncome = 0; // Placeholder for total income
  const totalExpenses = 0; // Placeholder for total expenses

  return (
    <div>
      <Breadcrumb pageName="Dashboard" />
      <div className="summary">
        <h2>סיכום</h2>
        <p>הכנסות כוללות: {totalIncome} ₪</p>
        <p>הוצאות כוללות: {totalExpenses} ₪</p>
      </div>
      {/* כאן ניתן להוסיף גרפים ודוחות */}
      <Link to="/form">הוסף הכנסה/הוצאה</Link>
    </div>
  );
};

export default Dashboard;
