import * as React from 'react';
import { DatePicker } from 'antd';
import './App.scss';

type Props = {
  toWhat: string;
};
type State = unknown;

class App extends React.Component<Props, State> {
  render(): JSX.Element {
    return (
      <div className="app">
        <div className="text">Hello 1</div>
        <div>{this.props.toWhat}</div>
        <div>
          <DatePicker />
        </div>
      </div>
    );
  }
}

export default App;
