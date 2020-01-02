import React from 'react'
import {Container }  from './styles';
import PropTypes from 'prop-types';
import api  from '../../services/api';

export default class User extends React.Component {
  static navigationOptions = ({ navigation }) =>({
    title: navigation.getParam('user').name, 
  });

  static proptypes = {
    navigation: PropTypes.shape({
      getParam:PropTypes.func, 

    }).isRequired,
  };

  state = {
    stars: [],

  }


  async componentDidMount(){
    const { navigation } = this.props;
    const user = navigation.getParam('user');
    const response = await api.get(`/users/${user.login}/starred`);
  }
  render(){
    return (
      <Container>
        
      </Container>

    );
  }
}

