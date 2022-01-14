// import { renderHook } from "@testing-library/react-hooks";
// import axios from "axios";
// import MockAdapter from "axios-mock-adapter";

// import useCountries from "./index";

// test("useCountries performs GET request", async () => {
//   const initialValue = [];
//   const mock = new MockAdapter(axios);

//   const mockData = "response";
//   const url = "http://mock";
//   mock.onGet(url).reply(200, mockData);

//   const { result, waitForNextUpdate } = renderHook(() =>
//   useCountries(url, initialValue)
//   );

//   expect(result.current.data).toEqual([]);

//   await waitForNextUpdate();

//   expect(result.current.data).toEqual("response");
// });


// test("useFetch sets loading to false and returns inital value on network error", async () => {
//   const mock = new MockAdapter(axios);

//   const initialValue = [];
//   const url = "http://mock";

//   mock.onGet(url).networkError();

//   const { result, waitForNextUpdate } = renderHook(() =>
//   useCountries(url, initialValue)
//   );

//   expect(result.current.data).toEqual([]);

//   await waitForNextUpdate();

//   expect(result.current.data).toEqual([]);
// });
