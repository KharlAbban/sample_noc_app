import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import {IndexLayout, HomeLayout, SettingsLayout} from './containers';
import {HomeErrorPage, GeneralSettingsPage, AccountSettingsPage, InfoBaseSettingsPage, LoginPage,NotificationsPage, AllTicketsPage, NewTicketPage, UserProfilePage, StatisticsPage, TicketDetailsPage, DashboardPage, RegisterPage, ForgotPasswordPage, IndexErrorPage, NotFoundPage, MonthlyTicketsPage, EditTicketPage} from "./components"
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
      // View single ticket by id. Use "ticket" route instead of "tickets" route
      {
        path: "/home/ticket/:ticketId",
        element: <TicketDetailsPage />
      },
      {
        path: "/home/ticket/:ticketId/edit",
        element: <EditTicketPage />
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
    path: "/home/tickets",
    element: <HomeLayout />,
    loader: homeLoader,
    errorElement: <HomeErrorPage />,
    children: [
      {
        index: true,
        element: <AllTicketsPage />,
      },
      {
        path: "/home/tickets/new",
        element: <NewTicketPage />,
      },
      {
        path: "/home/tickets/:ticketYear/:month",
        element: <MonthlyTicketsPage />,
      },
      {
        path: "/home/tickets/:ticketYear/:month/:ticketId",
        element: <TicketDetailsPage />
      },
      {
        path: "/home/tickets/:ticketYear/:month/:ticketId/edit",
        element: <EditTicketPage />
      },
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