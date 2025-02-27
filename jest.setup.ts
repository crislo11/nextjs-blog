import "@testing-library/jest-dom";
import { enableFetchMocks } from "jest-fetch-mock";

enableFetchMocks();

global.WebSocket = class WebSocket {
  constructor(url) {
    this.url = url;
    this.onmessage = null;
    this.onerror = null;
  }

  send = jest.fn();
  close = jest.fn();
};
