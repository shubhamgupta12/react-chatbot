import {
  INPUT_SUCCESS,
  INPUT_FAIL,
  MESSAGE_SUCCESS,
  MESSAGE_FAIL
} from "../actions/types";

// Initial state
const initialState = {
  messages: [
    {
      response: {
        message:
          "Hi! We are a community marketplace offering a wide variety of products and services from our trusted vendors and partners."
      },
      type: "bot"
    }
  ]
};

// Switch statement - update state
export const chatbot = (state = initialState, action) => {
  const { type, payload } = action;
  let { messages } = state;
  switch (type) {
    case INPUT_SUCCESS:
      messages = [
        ...messages,
        { response: { message: payload }, type: "user" }
      ];
      return {
        ...state,
        messages
      };
    case INPUT_FAIL:
      return {
        ...state
      };
    case MESSAGE_SUCCESS:
      messages = [...messages, { response: payload, type: "bot" }];
      return {
        ...state,
        messages
      };
    case MESSAGE_FAIL:
      messages = [
        ...messages,
        {
          response: "Something doesn't seem right. Please try again.",
          type: "bot"
        }
      ];
      return {
        ...state,
        messages
      };
    default:
      return {
        ...state
      };
  }
};
