// Import types
import {
  INPUT_SUCCESS,
  INPUT_FAIL,
  MESSAGE_SUCCESS,
  MESSAGE_FAIL
} from "./types";

//  Import axios
import axios from "axios";

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
  try {
    const body = { text: message };
    const res = await axios.post(
      "https://gvsr9xpjq1.execute-api.ap-southeast-1.amazonaws.com/test/chat",
      body,
      {
        headers: { "Content-Type": "application/json" }
      }
    );
    dispatch({
      type: MESSAGE_SUCCESS,
      payload: JSON.parse(res.data.body).message
    });
  } catch (err) {
    console.error("ERROR:", err);
    dispatch({ type: MESSAGE_FAIL });
  }
};
