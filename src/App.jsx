import {
  createBrowserRouter as Router,
  RouterProvider,
} from "react-router-dom";
import { lazy, Suspense } from "react";
const AppLayout = lazy(() => import("./ui/AppLayout"));
const MainLayout = lazy(() => import("./ui/MainLayout"));
const Landing = lazy(() => import("./pages/Landing"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const Newsfeed = lazy(() => import("./pages/Newsfeed"));
const Drafts = lazy(() => import("./pages/Drafts"));
const Editor = lazy(() => import("./pages/Editor"));
const ShoeEditor = lazy(() => import("./components/Editor/ShoeEditorWrapper"));
const PrivateRoutes = lazy(() => import("./pages/PrivateRoute"));
const router = Router([
  {
    element: (
      <Suspense
        fallback={
          <div className="absolute inset-0 w-16 h-16 m-auto border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
        }
      >
        <AppLayout />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        element: <PrivateRoutes />,
        children: [
          {
            element: <MainLayout />,
            children: [
              {
                path: "/",
                element: <Newsfeed />,
              },

              {
                path: "/newsfeed",
                element: <Newsfeed />,
              },
              {
                path: "/editor",
                element: <Editor />,
              },
              {
                path: "/editor/:model",
                element: <ShoeEditor />,
              },
              {
                path: "/editor/:model/:draftId",
                element: <ShoeEditor />,
              },

              {
                path: "/drafts",
                element: <Drafts />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/404",
    element: <ErrorPage />,
  },
  {
    path: "/landing",
    element: (
      <Suspense
        fallback={
          <div className="absolute inset-0 w-16 h-16 m-auto border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
        }
      >
        <Landing />
      </Suspense>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
