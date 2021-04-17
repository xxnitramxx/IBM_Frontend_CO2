import "./App.css";
import React from "react";
import Department from "./Department";

class Departments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      itemsLength: 0,
      itemsSelected: [],
      elePerPage: 20,
      page: 1,
      filterName: "",
    };
  }

  changePage(newPage, filter = this.state.filterName) {
    let filterItemsCount = 0;
    let tempSlected = this.state.items
      .filter((ele, i, array) => {
        return !filter || (filter && ele.department.includes(filter));
      })
      .filter((ele, i, array) => {
        filterItemsCount = array.length;
        return (
          i >= (newPage - 1) * this.state.elePerPage &&
          i < newPage * this.state.elePerPage
        );
      });

    this.setState({
      page: newPage,
      itemsSelected: tempSlected,
      filterName: filter,
      itemsLength: filterItemsCount,
    });
  }

  componentDidMount() {
    fetch("https://data.sfgov.org/resource/pxac-sadh.json?$limit=5000")
      .then((res) => res.json())
      .then(
        (result) => {
          let cleanedData = result
            .map((element, i) => {
              if (typeof element.emissions_mtco2e === "string") {
                element.emissions_mtco2e = parseFloat(element.emissions_mtco2e);
              }
              element["id"] = i;

              return element;
            })
            .filter((element) => {
              return element.emissions_mtco2e !== 0;
            });

          this.setState({
            isLoaded: true,
            items: cleanedData,
          });
          this.changePage(1);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="departmentsCon">
          <div className="searchCon">
            <label htmlFor="depName" style={{ marginRight: "5px" }}>
              Search for department:{" "}
            </label>
            <input
              name="depName"
              onChange={(ev) => {
                this.changePage(1, ev.target.value);
              }}
              placeholder="Public"
            ></input>
          </div>
          <table>
            <thead>
              <tr>
                <th
                  style={{
                    borderRadius: "25px 0px 0px 0px",
                  }}
                  className="depCol"
                >
                  Department
                </th>
                <th className="sourceCol">Source Type</th>
                <th
                  style={{
                    borderRadius: "0px 25px 0px 0px",
                  }}
                  className="coCol"
                >
                  CO<sub>2</sub> emission
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.itemsSelected.map((item, i) => (
                <Department key={"dep" + item.id} {...item}></Department>
              ))}
            </tbody>
          </table>
          <div className="paginatorCon">
            <i
              onClick={(ev) => {
                if (this.state.page - 1 > 0) {
                  this.changePage(this.state.page - 1);
                }
              }}
              style={{
                visibility: this.state.page - 1 > 0 ? "visible" : "hidden",
              }}
              className="far fa-arrow-alt-circle-left fa-2x"
            ></i>
            <div>{this.state.page}</div>
            <i
              onClick={(ev) => {
                if (
                  Math.ceil(this.state.itemsLength / this.state.elePerPage) >=
                  this.state.page + 1
                ) {
                  this.changePage(this.state.page + 1);
                }
              }}
              style={{
                visibility:
                  Math.ceil(this.state.itemsLength / this.state.elePerPage) >=
                  this.state.page + 1
                    ? "visible"
                    : "hidden",
              }}
              className="far fa-arrow-alt-circle-right fa-2x"
            ></i>
          </div>
        </div>
      );
    }
  }
}

export default Departments;
