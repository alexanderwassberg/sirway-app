import React from "react";
import { useParams } from "react-router-dom";
import SurveyView from "../components/SurveyView";

const Survey = () => {
  const { id } = useParams();
  return <SurveyView id={id}>Survey</SurveyView>;
};

export default Survey;
