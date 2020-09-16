import React from "react";

const MyContext = React.createContext();

class MyProvider extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.filterFlights = this.filterFlights.bind(this);
  }

  //try get state from localStorate first in case user reload page
  state = JSON.parse(localStorage.getItem("allState")) || {
    flightInfo: [],
    filterInfo: {
      transportation: "all",
      price: 0,
      maxPrice: 0,
    },
  };

  allFlights = [];
  serverURL = "";
  // serverURL = "http://localhost:3001";

  async componentDidMount() {
    let rawResponse = await fetch(`/api/flights`);
    let response = await rawResponse.json();
    console.log("response", response);

    this.allFlights = response;

    let maxPrice = Math.max(...response.map((item) => item.price));
    this.setState(
      {
        flightInfo: response,
        filterInfo: {
          transportation: "all",
          maxPrice: maxPrice,
          price: maxPrice,
        },
      },
      () => {
        console.log(this.state);
        console.log("allFlights", this.allFlights);
        localStorage.setItem("allState", JSON.stringify(this.state));
      }
    );
  }

  handleFilterChange(event) {
    console.log("handleFilterChange is called");

    let { name, value } = event.target;

    this.setState((prevState) => {
      return { filterInfo: { ...prevState.filterInfo, [name]: value } }; //only change one property of filterInfo, other properties need to be copied
    }, this.filterFlights); //setState is async, thus need to call filterFlights in callback function, after filterInfo is finished set
  }

  filterFlights = () => {
    console.log("filterFlights is called");
    let { transportation, price, maxPrice } = this.state.filterInfo;
    let displayedFlights = this.allFlights;
    if (transportation !== "all") {
      displayedFlights = displayedFlights.filter(
        (item) => item[transportation]
      );
    }
    if (price !== maxPrice) {
      displayedFlights = displayedFlights.filter(
        (item) => item["price"] <= price
      );
    }
    this.setState({ flightInfo: displayedFlights }, () =>
      console.log(this.state)
    );
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          ...this.state,
          handleFilterChange: this.handleFilterChange,
          serverURL: this.serverURL,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export { MyProvider };
export default MyContext;
