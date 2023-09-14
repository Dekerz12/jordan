import React from "react";
import ReactDOM from "react-dom/client";
import toast, { Toaster } from "react-hot-toast";
import {
  QueryClient,
  QueryClientProvider,
  QueryCache,
} from "@tanstack/react-query";
import App from "./App.jsx";
import "./index.css";

const queryCache = new QueryCache({
  onError: async (error) => {
    toast.error(error.message);
  },
});
const queryClient = new QueryClient({ queryCache: queryCache });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Toaster />

      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
