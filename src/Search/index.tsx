import React, { useEffect, useState } from "react";
import { AiAvater } from "../Icons/AiAvater";
import { UserAvater } from "../Icons/UserAvater";
import "./index.css";
import Prism from "prismjs";
import "prism-themes/themes/prism-one-light.css";

// %z3Y7HZ}z_#ARvLh
function Search() {
  const [apiData, setApiData] = useState("");
  const [resultList, setResult] = useState([] as any);
  const [qaList, setQa] = useState([] as any);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, [resultList]);

  function requestData() {
    if (loading === true) return;
    if (!(apiData && apiData !== "")) return;
    setApiData("");
    setLoading(true);
    setQa([...qaList, apiData]);

    const apiUrl = "https://kiritosa.com:1200/api/chart";
    fetch(apiUrl + `?content=${apiData}`)
      .then((res) => res.json())
      .then(function (response) {
        const htmlString = response.data || "";
        const dom: any = React.createElement("div", {
          dangerouslySetInnerHTML: { __html: htmlString },
        });
        setResult([...resultList, dom]);
      })
      .catch(function (error) {
        console.log(error);
        setResult([...resultList, "请求出错！"]);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div>
      <div className="search-container">
        <div className="input-left"></div>
        <div className="input-box">
          <input
            type="text"
            placeholder="Ask something..."
            value={apiData}
            onChange={(e) => setApiData(e.target.value)}
          />
        </div>

        <div className="input-right" onClick={requestData}>
          <div className="btn">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="20px"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </div>
        </div>
      </div>

      <div style={{ paddingBottom: 200 }}>
        {qaList.length > 0 &&
          qaList.map((item: any, index: any) => {
            const reslut = resultList[index] || null;
            return (
              <div className="result-container" key={index}>
                <div className="question-container">
                  <div className="avater">
                    <UserAvater />
                  </div>
                  <div className="result">{item}</div>
                </div>

                <div className="ai-container">
                  <div className="avater">
                    <AiAvater />
                  </div>
                  {reslut ? (
                    <div className="result typewriter">{reslut}</div>
                  ) : (
                    <div>
                      Please wait&nbsp;
                      <span className="waiting-dots">
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Search;
