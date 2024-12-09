import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="לוח בקרה | TailAdmin - תבנית דשבורד מנהלים בסגנון Tailwind CSS" />
              <ECommerce />
            </>
          }
        />
        <Route
          path="/calendar"
          element={
            <>
              <PageTitle title="לוח שנה | TailAdmin - תבנית דשבורד מנהלים בסגנון Tailwind CSS" />
              <Calendar />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="פרופיל | TailAdmin - תבנית דשבורד מנהלים בסגנון Tailwind CSS" />
              <Profile />
            </>
          }
        />
        <Route
          path="/forms/form-elements"
          element={
            <>
              <PageTitle title="אלמנטי טופס | TailAdmin - תבנית דשבורד מנהלים בסגנון Tailwind CSS" />
              <FormElements />
            </>
          }
        />
        <Route
          path="/forms/form-layout"
          element={
            <>
              <PageTitle title="עיצוב טופס | TailAdmin - תבנית דשבורד מנהלים בסגנון Tailwind CSS" />
              <FormLayout />
            </>
          }
        />
        <Route
          path="/tables"
          element={
            <>
              <PageTitle title="טבלאות | TailAdmin - תבנית דשבורד מנהלים בסגנון Tailwind CSS" />
              <Tables />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="הגדרות | TailAdmin - תבנית דשבורד מנהלים בסגנון Tailwind CSS" />
              <Settings />
            </>
          }
        />
        <Route
          path="/chart"
          element={
            <>
              <PageTitle title="תרשים בסיסי | TailAdmin - תבנית דשבורד מנהלים בסגנון Tailwind CSS" />
              <Chart />
            </>
          }
        />
        <Route
          path="/ui/alerts"
          element={
            <>
              <PageTitle title="התראות | TailAdmin - תבנית דשבורד מנהלים בסגנון Tailwind CSS" />
              <Alerts />
            </>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="כפתורים | TailAdmin - תבנית דשבורד מנהלים בסגנון Tailwind CSS" />
              <Buttons />
            </>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="כניסה | TailAdmin - תבנית דשבורד מנהלים בסגנון Tailwind CSS" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="רישום | TailAdmin - תבנית דשבורד מנהלים בסגנון Tailwind CSS" />
              <SignUp />
            </>
          }
        />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
