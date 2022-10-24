import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvaider";

const Booking = () => {
  const { homeData } = useContext(AuthContext);
  return (
    <div>
      <h1> this is booking page in {homeData.name}</h1>
    </div>
  );
};

export default Booking;
