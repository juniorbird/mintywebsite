import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.jsx';

export default React.createClass ({
  render() {
    return (
      <div className="docs">
        {Header}
        <div className="container">
          <h1>Example</h1>
            <pre>
Coming Soon
            </pre>
        </div>
      </div>
    )
  }
});
