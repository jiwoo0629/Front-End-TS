import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { getFace } from "../../function/getIcon";
import { getStatus } from "../../function/getStatus";

const SummaryBox = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 20px;
  padding-bottom: 40px;
  span {
    font-size: 30px;
    line-height: 40px;
    font-weight: 700;
    opacity: 0.7;
  }
  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const SummaryEntry = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-left: 70px;
  span {
    font-size: 30px;
    font-weight: 700;
    opacity: 0.8;
  }
`;

const Circle = styled.div<{ color: string }>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-right: 20px;
`;

const Icon = styled(FontAwesomeIcon)<{ color: string }>`
  color: ${(props) => props.color};
  margin-bottom: 4px;
  font-size: 28px;
  margin-right: 10px;
`;

interface IProp {
  type: string;
  score: number;
  isLoading: boolean;
  isError: boolean;
}

const Summary = ({ type, score, isError, isLoading }: IProp) => {
  const color = getStatus(score).color[0];
  const state = getStatus(score).state[0];

  return (
    <SummaryBox>
      <span>{`${type} Sensor Score`}</span>
      {isLoading ? (
        <SummaryEntry>
          <span>Loading...</span>
        </SummaryEntry>
      ) : isError ? (
        <SummaryEntry>
          {getFace(state, color, isError)}
          <span>Error</span>
        </SummaryEntry>
      ) : (
        <SummaryEntry>
          {getFace(state, color, isError)}
          <span>{score}</span>
        </SummaryEntry>
      )}
    </SummaryBox>
  );
};

export default Summary;
