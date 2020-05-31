import { connect } from 'react-redux'

import Signup from './signup';
import history from '../../history'

const mapStateToProps = (state) => {
  return {
    username: state.username
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (id, username) => {
      dispatch({id, username, type: 'SET_USER' });
      console.log("container reached!!");
    //   history.push('/home');
    }
  }
}

const SignupContainer = connect(mapStateToProps, mapDispatchToProps)(Signup)
export default SignupContainer