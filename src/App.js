// src/App.js

import React, { useContext } from "react";
import {Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./Components/Header";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeContext, ThemeProvider } from "./Contexts/ThemeContext";
import Footer from "./Components/Footer";
import AnNinhMang from "./Components/AnNinhMang";
import PhatTrienPhanMem from "./Components/PhatTrienPhanMem";
import ThietKeDoHoa from "./Components/ThietKeDoHoa";
import CEH from "./Components/CEH";
import AWS from "./Components/AWS";
import SheetsForm from "./Components/SheetForm";
import Dashboard from "./Components/Dashboard";
import Content from "./Components/Content";
import TopBar from "./Components/TopBar"

const queryClient = new QueryClient();

function AppContent() {
  const { theme } = useContext(ThemeContext);
  return (
    <QueryClientProvider client={queryClient}>
    <Router basename={process.env.PUBLIC_URL} >
      <div className={`App ${theme}`}>
        <TopBar/>
        <Header/>
        <div>
          <Routes>
           <Route path="/home" element={<Content/>}></Route>
           <Route path="/an-ninh-mang" element={<AnNinhMang/>}></Route>
           <Route path="/phat-trien-phan-mem" element={<PhatTrienPhanMem/>}></Route>
           <Route path="/thiet-ke-do-hoa" element={<ThietKeDoHoa/>}></Route>
           <Route path="/khoa-hoc-ceh" element={<CEH/>}></Route>
           <Route path="/khoa-hoc-aws" element={<AWS/>}></Route>
           <Route path="/dang-ky-ngay" element={<SheetsForm/>}></Route>
           <Route path="/data-board" element={<Dashboard/>}></Route>
          </Routes>
        </div>
        <Footer/>
      </div>
      <ReactQueryDevtools initialIsOpen={false}/>
    </Router>
      </QueryClientProvider>
  );
}

function App() {
  return (
      <ThemeProvider>
              <AppContent />
      </ThemeProvider>
  );
}

export default App;
