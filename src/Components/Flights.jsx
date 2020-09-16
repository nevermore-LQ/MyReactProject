import React, { useContext } from "react";
import FlightThumbnail from "./FlightThumbnail";
import MyContext from "../Context";
import Filter from "./Filter";

const Flights = () => {
  const { flightInfo } = useContext(MyContext);

  return (
    <div>
      <header className="flights-hero">
        <div className="flights-title">OUR FLIGHTS</div>
      </header>
      <Filter />
      <section>
        <div className="flights-wrapper">
          {flightInfo.map((item) => {
            return (
              <FlightThumbnail
                key={item.name}
                name={item.name}
                img={item.img}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Flights;
