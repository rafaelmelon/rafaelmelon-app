import React, { useContext, useReducer } from 'react';
import reducer, { initialState } from './reducers';

const createStore = (reduer, iState) => {
  const [state, dispatch] = useReducer(reducer, iState);

  return { state, dispatch };
};

const Store = React.createContext();

const Provider = ({ children }) => {
  const store = createStore(reducer, initialState);
  return <Store.Provider value={store}>{children}</Store.Provider>;
};

const connect = (
  mapStateToProps = () => null,
  mapDispatchToProps = () => null,
) => WrappedComponent => {
  return props => {
    const { dispatch, state } = useContext(Store);
    return (
      <WrappedComponent
        dispatch={dispatch}
        {...mapStateToProps(state, props)}
        {...mapDispatchToProps(dispatch, props)}
      />
    );
  };
};

export { Store, Provider, connect };
