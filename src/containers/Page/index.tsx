import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { API } from '@utils/api';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    this.getList();
  }

  getList = () => {
    fetch(`${API}/api/getList`)
      .then(res => res.json())
      .then(list => this.setState({ list }));
  };
  public render() {
    const { list } = this.state;

    return (
      <div>
        <h1>Project Page</h1>
        <Link to={'/'}>My List</Link>
        <h1>List of Items</h1>
        {list.length ? (
          <div>
            {list.map(item => {
              return <div key={item}>{item}</div>;
            })}
          </div>
        ) : (
          <div>
            <h2>No List Items Found</h2>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Page);
