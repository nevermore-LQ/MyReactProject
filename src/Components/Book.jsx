import React, { useState, useContext } from "react";
import MyContext from "../Context";

const Book = ({ desName, price, spaceship, broomstick }) => {
  // const { serverURL } = useContext(MyContext);
  const bookingURL = "/api/booking";

  const [customerName, setCustomerName] = useState("");
  const [transportation, setTransportation] = useState("");
  const [date, setDate] = useState("");
  const [ticketNumber, setTicketNumber] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const request = {
        customerName,
        desName,
        price,
        transportation,
        date,
        ticketNumber,
        totalCost,
      };
      console.log("request body is ", request, bookingURL);
      fetch(bookingURL, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          if (response.status === "OK") {
            alert("success");
            return;
          } else {
            alert("failed");
            return;
          }
        })
        .catch((e) => console.log(e));
    } else {
      return;
    }
  };

  const validateForm = () => {
    let nameValidation = /^[a-zA-Z ]{2,30}$/;
    if (!nameValidation.test(customerName)) {
      alert("invalid name, please type in 2-30 alphabet");
      return false;
    }
    if (desName === "") {
      alert("please select a destination");
      return false;
    }
    if (transportation === "") {
      alert("please select a transportation");
      return false;
    }
    let selectedDate = date;
    if (selectedDate === "") {
      alert("you need to select a date");
      return false;
    }
    if (new Date(selectedDate) < new Date()) {
      alert("you cannot select a date before today");
      return false;
    }
    if (ticketNumber === 0) {
      alert("please choose your ticket number");
      return false;
    }
    return true;
  };

  return (
    <div className="book-block">
      <h3 className="book-title">Book Flight</h3>
      <span>Destination: {desName} &nbsp;&nbsp;&nbsp;</span>
      <span>Price: ${price}</span>
      <form className="book-form" onSubmit={handleSubmit}>
        <label>
          Name:{" "}
          <input
            name="customerName"
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </label>
        <label>
          Date: &nbsp;{" "}
          <input
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <label>
          Transporation:&nbsp;
          <select
            value={transportation}
            name="transportation"
            onChange={(e) => setTransportation(e.target.value)}
          >
            <option disabled value="">
              {" "}
              -- select an option --{" "}
            </option>
            {(() => {
              if (spaceship) {
                return <option value="spaceship">Spaceship</option>;
              }
            })()}
            {(() => {
              if (broomstick) {
                return <option value="broomstick">Broomstick</option>;
              }
            })()}
          </select>
        </label>
        <label>
          Ticket Number: &nbsp;
          <select
            value={ticketNumber}
            name="ticketNumber"
            onChange={(e) => {
              setTicketNumber(e.target.value);
              setTotalCost(price * e.target.value);
            }}
          >
            <option defaultValue value={0}>
              0
            </option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </label>
        <label>Total Cost: ${totalCost}</label>
        <div
          style={{ textAlign: "right", fontSize: "1.2rem", padding: "0.5rem" }}
        >
          <button
            style={{
              borderRadius: "5px",
              backgroundColor: "#25c25e",
            }}
          >
            <b>BOOK</b>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Book;
