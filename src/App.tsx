import "./App.css";
import { colors, combos, Combo } from "./constants";
import React, { Component } from "react";

interface IState {
  combo: Combo;
}
interface IProps {}
class App extends Component<IProps, IState> {
  public selected: string[] = [];
  // public comboName: Combo = combos[0];

  constructor(props: any) {
    super(props);
    this.state = { combo: combos[0] };
  }

  public selectColor(color: string) {
    this.selected.includes(color)
      ? (this.selected = this.selected.filter((s) => s !== color))
      : this.selected.push(color);
    console.log(color, this.selected);

    if (this.selected && this.selected.length) {
      this.setState({
        combo: combos.filter((c) => {
          if (
            c.color.length === this.selected.length &&
            this.hasMatch(c.color)
          ) {
            return c;
          }
        })[0],
      });
    }
  }

  public hasMatch(colors: string[]): boolean {
    let reducer = (previousValue: string, currentValue: Combo) =>
      (previousValue += currentValue);
    return (
      colors.sort().reduce((previousValue, currentValue: any) => {
        return reducer(previousValue, currentValue);
      }) ===
      this.selected.sort().reduce((previousValue, currentValue: any) => {
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
                  this.selected.includes(co) ? "selected" : ""
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
