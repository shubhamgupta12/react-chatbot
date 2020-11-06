// Import types
import {
  INPUT_SUCCESS,
  INPUT_FAIL,
  MESSAGE_SUCCESS,
  MESSAGE_FAIL
} from "./types";

//  Import axios
import axios from "axios";

// Import data
// import data from './data.json';

//  Function that handles  users message
export const userMessage = message => async dispatch => {
  try {
    dispatch({ type: INPUT_SUCCESS, payload: message });
  } catch (err) {
    dispatch({ type: INPUT_FAIL });
  }
};

//  Sends the message to the bot - API CALL
export const sendMessage = message => async dispatch => {
  const URL1 =
    "https://d7se6vu2fb.execute-api.ap-northeast-1.amazonaws.com/stage1/chat";
  // const URL2 = "https://gvsr9xpjq1.execute-api.ap-southeast-1.amazonaws.com/test/chat";
  try {
    const body = { text: message };
    const res = await axios.post(`${URL1}`, body, {
      headers: { "Content-Type": "application/json" }
    });
    dispatch({
      type: MESSAGE_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    console.error("ERROR:", err);
    dispatch({ type: MESSAGE_FAIL });
  }
};
