import * as React from 'react';

import { Elements, Footer, Welcome } from '@components/index';
import { connect } from '@store/index';

interface HomeProps {
  message: string;
  get: () => any;
  reset: () => any;
}

const Home: React.SFC<HomeProps> = ({ message, get, reset }) => {
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [hasError, setErrors] = useState(false);

  // async function fetchUrl() {
  //   const response = await fetch(
  //     'https://api.github.com/users/rafaelmelon/repos',
  //   );
  //   const json = await response.json();
  //   setData(json);
  //   setLoading(false);
  // }
  // useEffect(() => {
  //   fetchUrl();
  // }, []);

  console.log(message);

  return (
    <>
      <Welcome />
      <Elements />
      <Footer />
    </>
  );
};

const mapStateToProps = (state, props) => ({
  message: `${state.data} ${props.extra}`,
  repositories: state.repositories,
});

const mapDispatchToProps = dispatch => ({
  get: () => dispatch({ type: 'FETCH_DATA', payload: 'Hello world!' }),
  reset: () => dispatch({ type: 'RESET_DATA', payload: 'null' }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
