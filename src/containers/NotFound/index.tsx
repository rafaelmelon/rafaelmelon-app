import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NotFound extends React.Component {
  public render() {
    return (
      <div>
        <h1>Error 404</h1>
        <Link to={'/'}>Volver</Link>
      </div>
    );
  }
}

export default withRouter(NotFound);
