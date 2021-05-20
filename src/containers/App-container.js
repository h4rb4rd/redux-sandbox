import { connect } from 'react-redux';
import { incAC, decAC, rndAC } from '../redux/actions';

import App from '../components/App';

const mapStateToProps = (state) => {
  return {
    state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    inc: () => {
      dispatch(incAC());
    },
    dec: () => {
      dispatch(decAC());
    },
    rnd: () => {
      const payload = Math.floor(Math.random() * 10);
      dispatch(rndAC(payload));
    },
  };
};
const AppCOntainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppCOntainer;
