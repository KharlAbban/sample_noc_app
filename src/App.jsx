import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import {IndexLayout, HomeLayout, SettingsLayout} from './containers';
import {HomeErrorPage, GeneralSettingsPage, AccountSettingsPage, InfoBaseSettingsPage, LoginPage,NotificationsPage, AllTicketsPage, NewTicketPage, UserProfilePage, StatisticsPage, TicketDetailsPage, DashboardPage, RegisterPage, ForgotPasswordPage, IndexErrorPage, NotFoundPage} from "./components"
import {loginAction, registerAction, forgotPasswordAction } from "./utils/actions/indexFormActions";
import {homeLoader, isLoggedInLoader} from "./utils/loaders/homeRoutesLoaders";
import "./assets/styles/App.css";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <IndexLayout />,
    errorElement: <IndexErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        element: <LoginPage />,
        action: loginAction,
        loader: isLoggedInLoader
      },
      {
        path: "/register",
        element: <RegisterPage />,
        action: registerAction
      },
      {
        path: "/forgot-password",
        element: <ForgotPasswordPage />,
        action: forgotPasswordAction
      }
    ]
  },
  {
    path: "/home",
    element: <HomeLayout />,
    errorElement: <HomeErrorPage />,
    loader: homeLoader,
    children: [
      {
        index: true,
        element: <DashboardPage />,
        loader: homeLoader
      },
      {
        path: "/home/notifications",
        element: <NotificationsPage />,
      },
      {
        path: "/home/tickets",
        element: <AllTicketsPage />
      },
      {
        path: "/home/tickets/new",
        element: <NewTicketPage />
      },
      {
        path: "/home/tickets/:ticketId",
        element: <TicketDetailsPage />
      },
      {
        path: "/home/users/:userId",
        element: <UserProfilePage />
      },
      {
        path: "/home/stats",
        element: <StatisticsPage />
      }
    ]
  },
  {
    path: "/settings",
    element: <SettingsLayout />,
    children: [
      {
        index: true,
        element: <GeneralSettingsPage />
      },
      {
        path: "/settings/general",
        element: <GeneralSettingsPage />
      },
      {
        path: "/settings/account",
        element: <AccountSettingsPage />
      },
      {
        path: "/settings/info-base",
        element: <InfoBaseSettingsPage />
      },
    ]
  },
  {
    path: "/*",
    element: <NotFoundPage />,
  }
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;