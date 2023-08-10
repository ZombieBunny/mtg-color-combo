import "./App.css";
import { colors, combos, Combo } from "./constants";
import React, { Component } from "react";

interface IState {
  combo: Combo;
  selected: string[];
}
interface IProps {}
class App extends Component<IProps, IState> {
  public selected: string[] = [];

  constructor(props: any) {
    super(props);
    this.state = { combo: combos[0], selected: [] };

    const queryParameters = new URLSearchParams(window.location.search);
    const name = queryParameters.get("name");
    if (!!name) {
      this.selectName(name);
    }
  }

  public selectName(name: string | null) {
    const combo = combos!.filter(
      (c) => c.name.toLowerCase() === name!.toLowerCase()
    )[0];
    this.selected = combo?.color;
    this.state = { combo: combo, selected: combo.color };
  }

  public selectColor(color: string) {
    let selected = [...this.state.selected];
    selected.includes(color)
    ? (selected = selected.filter((s) => s !== color))
    : selected.push(color);

    if (selected && selected.length) {
      const combo = combos.filter((c) => {
        if (c.color.length === selected.length && this.hasMatch(c.color, selected)) {
          return c;
        }
      })[0];
      this.setState({
        combo,
        selected
      });
    } else {
      this.setState({
        combo: combos[0],
        selected
      });
    }
  }

  public hasMatch(colors: string[], selected: string[]): boolean {
    let reducer = (previousValue: string, currentValue: Combo) =>
      (previousValue += currentValue);
    return (
      colors.sort().reduce((previousValue, currentValue: any) => {
        return reducer(previousValue, currentValue);
      }) ===
      selected.sort().reduce((previousValue, currentValue: any) => {
        return reducer(previousValue, currentValue);
      })
    );
  }

  render() {
    return (
      <div className="App">
        <span className="options">
          {colors.map((co) => {
            return (
              <button
                onClick={() => this.selectColor(co)}
                className={`${co} ${
                  this.state.selected.includes(co) ? "selected" : ""
                }`}
                key={co}
              >
                &nbsp;
              </button>
            );
          })}
        </span>
        <h2 className="result">
          {this.state && this.state.combo
            ? this.state.combo.name
            : "Pick a color"}
        </h2>
      </div>
    );
  }
}

export default App;
