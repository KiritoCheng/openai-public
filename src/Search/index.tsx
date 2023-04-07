import React, { useEffect, useState } from "react";
import { AiAvater } from "../Icons/AiAvater";
import { UserAvater } from "../Icons/UserAvater";
import "./index.css";
import Prism from "prismjs";
import "prism-themes/themes/prism-one-light.css";
import { SendIcon } from "../Icons/Send";
import { Loading } from "../Loading";
import { Evoil } from "../Evoil";

const Search = () => {
  const [apiData, setApiData] = useState("");
  const [resultList, setResult] = useState([] as any);
  const [qaList, setQa] = useState([] as any);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, [resultList]);

  const requestData = () => {
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
  };

  return (
    <div className="container">
      <div className="search-container">
        <div className="input-left"></div>
        <div className="input-box">
          <input
            type="text"
            placeholder="Ask something..."
            value={apiData}
            onChange={(e: any) => {
              setApiData(e.target.value);
            }}
            onKeyDown={(e: any) => {
              if (e.key === "Enter") {
                // 处理用户按下回车键的操作
                requestData();
              }
            }}
          />
        </div>

        <div className="input-right" onClick={requestData}>
          <div className="btn">
            <SendIcon />
          </div>
        </div>
      </div>

      <div className="back-container">
        {qaList.length > 0 &&
          qaList.map((item: any, index: any) => {
            const res = resultList[index];
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
                  {res ? (
                    <div className="result typewriter">{res}</div>
                  ) : (
                    <Loading />
                  )}
                </div>
              </div>
            );
          })}
        <Evoil />
      </div>
    </div>
  );
};

export default Search;
