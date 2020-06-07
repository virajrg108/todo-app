import { connect } from 'react-redux'

import Home from './home';
import store from '../../store';

const mapStateToProps = (state) => {
  console.log(state)
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    getUser: () => {
      console.log(store.getState())
    },
    editLabel: (label) => {
      dispatch({type:'SET_LABEL', label})
    }
  }
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)
export default HomeContainer