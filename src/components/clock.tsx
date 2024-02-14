import React from "react";

class Clock extends React.Component {
  timerID: number | null;
  state: { time: Date | null; isStopped: boolean };

  constructor(props: any) {
    super(props);

    this.state = { time: new Date(), isStopped: false };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    if (this.state.isStopped) return;

    this.setState({ time: new Date() });
  }

  // Al reanudar el tiempo se muestra el tiempo real
  toggleTime() {
    this.setState({ isStopped: !this.state.isStopped });
  }

  render() {
    return (
      <div>
        <h4>Current Time</h4>
        <div className="counter-section">
          {this.state.time && (
            <span>{this.state.time.toLocaleTimeString()}</span>
          )}
          <button onClick={() => this.toggleTime()}>
            {this.state.isStopped ? "Start time" : "Stop time"}
          </button>
        </div>
      </div>
    );
  }
}

export default Clock;
