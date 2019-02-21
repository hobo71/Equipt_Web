import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions.js';
import * as modalActions from './../Modal/actions.js';

import Signup from './components/Signup';

const mapState = (state) => ({
  form: state['@form/signup']
});

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators({ ...actions, ...modalActions }, dispatch)
  };
};

export default connect(mapState, mapDispatch)(Signup);
