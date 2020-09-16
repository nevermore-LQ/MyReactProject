import React from "react";
import MyContext from "../Context";

export default class Filter extends React.Component {
  static contextType = MyContext;
  render() {
    let { filterInfo, handleFilterChange } = this.context;
    return (
      <section>
        <h2 style={{ textAlign: "center", margin: "2rem 0 0 0" }}>Search</h2>
        <form style={{ textAlign: "center" }}>
          <label style={{ padding: "2rem 5rem" }}>
            <div>
              <b>Transportation</b>
            </div>
            <select
              name="transportation"
              value={filterInfo.transportation}
              onChange={handleFilterChange}
            >
              <option value="all">All</option>
              <option value="spaceship">Spaceship</option>
              <option value="broomstick">Broomstick</option>
            </select>
          </label>
          <label style={{ padding: "2rem 5rem" }}>
            <div>
              <b>Max Price: {filterInfo.price}</b>
            </div>
            <input
              type="range"
              name="price"
              min={0}
              max={filterInfo.maxPrice}
              value={filterInfo.price}
              onChange={handleFilterChange}
            />
          </label>
        </form>
      </section>
    );
  }
}
