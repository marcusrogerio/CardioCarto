import { connect } from 'react-redux';
import { logIn } from '../../actions/session_actions';
import LogInForm from './log_in_form';

const mapDispatchToProps = (dispatch) => ({
  logIn: (user) => dispatch(logIn(user))
});

export default connect(
  null,
  mapDispatchToProps
)(LogInForm);