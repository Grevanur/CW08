import React, { Component } from "react";
import List from "./List";
import Dropdown from "react-bootstrap/Dropdown";

class FilteredList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      search: "",
      filterType: "All"
    };
  }

  updateSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  updateFilter = (type) => {
    this.setState({ filterType: type });
  };

  filterItems = () => {

    return this.props.items.filter(item => {

      // text search
      const textMatch =
        item.name
          .toLowerCase()
          .includes(this.state.search.toLowerCase());

      // dropdown filter
      const typeMatch =
        this.state.filterType === "All" ||
        item.type === this.state.filterType;

      return textMatch && typeMatch;

    });
  };

  render() {

    const filteredItems = this.filterItems();

    return (
      <div className="filterBox">

        <input
          type="text"
          placeholder="Search produce..."
          onChange={this.updateSearch}
        />

        <Dropdown>
          <Dropdown.Toggle>
            {this.state.filterType}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => this.updateFilter("All")}>
              All
            </Dropdown.Item>

            <Dropdown.Item onClick={() => this.updateFilter("Fruit")}>
              Fruit
            </Dropdown.Item>

            <Dropdown.Item onClick={() => this.updateFilter("Vegetable")}>
              Vegetable
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <List items={filteredItems} />

      </div>
    );
  }
}

export default FilteredList;