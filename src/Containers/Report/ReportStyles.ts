import styled from 'styled-components';
import { StyleConstants } from './../../styles/StyleConstants';

export const Wrapper = styled.div`
  display: flex;
  margin-top: 1.5em;
  flex-direction: column;
  text-align: start;
  width: 100%;
  border-radius: 16px;
  background: #f2f2f2;
  max-height: 420px;
`;

export const ReportHeader = styled.h1`
  margin-top: 1.5em;
  font-family: ${StyleConstants.font.regular};
  font-size: ${StyleConstants.fontSize.medium};
  text-align: center;
  padding-left: 0.35em;
`;

export const ReportDate = styled.div`
  padding-left: 0.35em;
  padding-top: 3em;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  max-height: 80%;
  margin-top: -1em;
  padding-left: 0.35em;
  padding-right: 0em;
`;

/* 
wrapper

 position: absolute;
  width: 330px;
  height: 420px;
  left: 24px;
  top: 495px;
  overflow: hidden;
  background: #f2f2f2;
  border-radius: 16px;

  .h1 {
    margin-top: 30px;
    margin-bottom: 45px;
    font-family: Circular Std;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #333333;
  }*/

/* height: 70%;
  width: 100%;
  display: flex;
  background: none;
  flex-wrap: wrap;
  background: inherit;
  flex-direction: column;
  border-radius: 16px;
  padding-top: 20px;
  padding-bottom: 20px; */
