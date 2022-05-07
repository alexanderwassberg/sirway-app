import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";
import "./scss/_SurveyList.scss";

const SurveyList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const ACCESS_KEY = "48f1b240eb5b46608f43a943bee6e232";
  const OWNER_ID = "121ef932-49c4-478a-9e61-49a36ba7ab31";

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://api.surveyjs.io/private/Surveys/getActive?accessKey=${ACCESS_KEY}&ownerId=${OWNER_ID}`
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

  return (
    <div className="survey_list">
      <ul>
        {loading && <BallTriangle />}
        {data &&
          data.map(({ Id, Name }) => (
            <li key={Id}>
              <Link to={{ pathname: `/survey/${Id}`, state: { id: Id } }}>
                {Name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default SurveyList;
