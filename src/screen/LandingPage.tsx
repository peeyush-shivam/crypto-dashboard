import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addCurrencies } from "../redux/cryptoSlice";
import { AppDispatch } from "../redux/store";

const COINCAPURL = "https://api.coincap.io/v2/assets";

const LandingPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const fetchCurrencies = async () => {
    try {
      const response = await axios.get(COINCAPURL);
      dispatch(addCurrencies(response.data.data));
    } catch (error) {
      console.error("Error fetching currencies:", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchCurrencies();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetchCurrencies();
  }, []);

  return (
    <div className="w-full h-[70vh]">
      <Navbar />
      <main className=" pt-20 pl-24 pr-24 gap-4 max-md:pl-8 max-md:pr-8">
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default LandingPage;
