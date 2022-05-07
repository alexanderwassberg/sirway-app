import "./App.css";
import "survey-core/modern.min.css";
import { StylesManager } from "survey-core";
import { Survey } from "survey-react-ui";
import { Model } from "survey-core";
import noUiSlider from "nouislider";
import axios from "axios";
import { useState, useEffect, useCallback } from "react";
StylesManager.applyTheme("modern");

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const surveyID = "801459b2-fcf1-4626-9e6f-ec736131535b";

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://api.surveyjs.io/public/Survey/getSurvey?surveyId={${surveyID}}`
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
  }, []);

  const survey = new Model(data);
  const alertResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
    alert(results);
  }, []);

  survey.onComplete.add(alertResults);

  return <Survey model={survey} />;
};

export default App;
