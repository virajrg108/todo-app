import { connect } from 'react-redux'

import Login from './login';
import history from '../../history'

const mapStateToProps = (state) => {
  return {
    username: state.username
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (name, _id, label) => {
      console.log('login cont', name, _id, label);
      dispatch({_id, name, label, type: 'SET_USER' });
      console.log("container reached!!");
    //   history.push('/home');
    }
  }
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)
export default LoginContainer