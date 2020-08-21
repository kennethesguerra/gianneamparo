import APIClient from '../../common/APIClient';
import { Cache } from 'aws-amplify';

export const USERS_SET_FIELD_VALUE = 'USERS_SET_FIELD_VALUE';
export const SET_USER = 'SET_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

const client = () => {
    var apiClient = new APIClient();
    return apiClient.make();
}

export const handleFieldChange = (e) => {
  return (dispatch) => {
    const value = {
      [e.target.id]: e.target.value
    }

    dispatch ({type: USERS_SET_FIELD_VALUE, value});
  }
}

export const loginUser = (success_callback) => {
  return (dispatch, getState) => {
    client().post('admins/login', getState().users.loginCredentials).then((json) => {
      const result = json.data;
      console.log(result);
      if (result) {
        const code = result.code;
        if (code === "SUCCESS") {
          Cache.setItem('apiToken', result.data.api_token);
          dispatch({type: SET_USER, user: result.data});
          success_callback();
        }
      }
    }).catch((error) => {
      console.log(error);
    })
  }
}

export const logoutUser = () => {
  return (dispatch, getState) => {

    client().get('admins/logout', {
      headers: {
        "api-token": Cache.getItem('apiToken')
      }
    }).then((json) => {
      console.log(json);
      Cache.removeItem('apiToken');

    }).catch((error) => {
      console.log(error);
    })
  }
}

export const getUser = () => {
  return (dispatch) => {
    client().get('admins/get').then((json) => {
      console.log(json);
    }).catch((error) => {
      console.log(error);
    })
  }
}