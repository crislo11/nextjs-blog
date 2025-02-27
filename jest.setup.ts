import "@testing-library/jest-dom";
import { enableFetchMocks } from "jest-fetch-mock";

enableFetchMocks();

declare global {
  interface WebSocket {
    readonly url: string;
    onmessage: ((this: WebSocket, ev: MessageEvent<any>) => any) | null;
    onerror: ((this: WebSocket, ev: Event) => any) | null;
    send: (data: string | ArrayBufferLike | Blob | ArrayBufferView) => void;
    close: (code?: number, reason?: string) => void;
  }
}

global.WebSocket = class WebSocket {
  url: string;
  onmessage: ((this: WebSocket, ev: MessageEvent) => void) | null;
  onerror: ((this: WebSocket, ev: Event) => void) | null;

  constructor(url: string) {
    this.url = url;
    this.onmessage = null;
    this.onerror = null;
  }

  send = jest.fn<void, [string | ArrayBufferLike | Blob | ArrayBufferView]>();
  close = jest.fn<void, [number?, string?]>();
} as unknown as typeof WebSocket;