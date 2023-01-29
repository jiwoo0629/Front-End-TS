import React from "react";
import { getCookie } from "../JWT/cookie";

//2020-05-07
export function fetchSensorAvg(date: string, userId: string, sensorId: string) {
  return fetch(`/details?userId=${userId}&date=${date}&id=${sensorId}`, {
    method: "GET",
    headers: {
      "X-AUTH-TOKEN": getCookie("token"),
    },
  }).then(async (response) => {
    if (response.ok) return await response.json();
    else throw response.status;
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
  }).then(async (res) => {
    if (res.ok) return await res.json();
    else throw res.status;
  });
}

export function fetchGraphSensorList(userId: string) {
  return fetch(`/graph/sensors?userId=${userId}`, {
    method: "GET",
    headers: {
      "X-AUTH-TOKEN": getCookie("token"),
    },
  }).then(async (res) => {
    if (res.ok) return await res.json();
    else throw res.status;
  });
}

export function fetchMain(UserId: string) {
  return fetch(`/main?userId=${UserId}`, {
    method: "GET",
    headers: {
      "X-AUTH-TOKEN": getCookie("token"),
    },
  }).then(async (response) => {
    if (response.ok) return await response.json();
    else throw response.status;
  });
}

//로그인한 사용자의 정보를 불러오는 함수
export function fetchUser(UserId: any) {
  return fetch(`/user/profile?id=${UserId}`, {
    method: "GET",
    headers: {
      "X-AUTH-TOKEN": getCookie("token"),
    },
  }).then(async (response) => {
    if (response.ok) return await response.json();
    else throw response.status;
  });
}

//관리자용 전체 사용자 리스트 불러오는 함수
export function fetchUserList() {
  return fetch(`/admin/userList`, {
    method: "GET",
    headers: {
      "X-AUTH-TOKEN": getCookie("token"),
    },
  }).then(async (response) => {
    if (response.ok) return await response.json();
    else throw response.status;
  });
}
