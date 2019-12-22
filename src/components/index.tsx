import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <Button variant="contained" color="primary">
      Hello React World
    </Button>
  );
}

const render = () => ReactDOM.render(<App />, document.querySelector('#app'));
export default render