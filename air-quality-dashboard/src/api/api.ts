import Axios from "axios";
import { getCookie } from "../JWT/cookie";
import { responseInterceptor } from "http-proxy-middleware";

export function fetchCoins() {
  return fetch(`https://api.coinpaprika.com/v1/coins`, {
    method: "GET",
    headers: {
      "X-AUTH-TOKEN": getCookie("token"),
    },
  }).then((response) => response.json());
}

export function fetchCoinInfo(coinId: string) {
  return fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`, {
    method: "GET",
    headers: {
      "X-AUTH-TOKEN": getCookie("token"),
    },
  }).then((response) => response.json());
}

export function fetchCoinTickers(coinId: string) {
  return fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`, {
    method: "GET",
    headers: {
      "X-AUTH-TOKEN": getCookie("token"),
    },
  }).then((response) => response.json());
}

//2020-05-07
export function fetchSensorAvg(date: string, userId: string, sensorId: string) {
  return fetch(`/details?userId=${userId}&date=${date}&id=${sensorId}`, {
    method: "GET",
    headers: {
      "X-AUTH-TOKEN": getCookie("token"),
    },
  })
    .then((response) => {
      if (response.status !== 200) throw new Error(response.status.toString());
      else return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
}

export function fetchGraph(
  collection: string,
  logTime: string,
  sensorIds: string[],
  attr: string
) {
  let url = `/graph?collection=${collection}&logTime=${logTime}`;
  for (let x of sensorIds) {
    url += `&sensors=${x}`;
  }
  url += `&airData=${attr}`;

  return fetch(url, {
    method: "GET",
    headers: {
      "X-AUTH-TOKEN": getCookie("token"),
    },
  })
    .then((res) => {
      if (res.status !== 200) throw new Error(res.status.toString());
      else return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
}

export function fetchGraphSensorList(userId: string) {
  return fetch(`/graph/sensors?userId=${userId}`, {
    method: "GET",
    headers: {
      "X-AUTH-TOKEN": getCookie("token"),
    },
  }).then((res) => {
    if (res.status !== 200) throw new Error(res.statusText);
    else return res.json();
  });
}
