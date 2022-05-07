import React, { useState, useEffect, useCallback } from "react";
import "survey-core/modern.min.css";
import { StylesManager } from "survey-core";
import { Survey } from "survey-react-ui";
import { Model } from "survey-core";
import { BallTriangle } from "react-loader-spinner";
import axios from "axios";
StylesManager.applyTheme("modern");

const SurveyView = ({ id }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://api.surveyjs.io/public/Survey/getSurvey?surveyId={${id}}`
        );
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [id]);

  const survey = new Model(data);
  const alertResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
    alert(results);
  }, []);

  survey.onComplete.add(alertResults);
  return (
    <>
      {loading && <BallTriangle />}
      <Survey model={survey} />
    </>
  );
};

export default SurveyView;
