import React, { useState } from "react";
// %z3Y7HZ}z_#ARvLh
function App() {
  const [apiData, setApiData] = useState("");
  const [result, setResult] = useState("");

  function requestData() {
    const apiUrl = "http://136.244.66.213:1200/api/chart"; // 将API URL替换为您自己的API URL
    fetch(
      `http://136.244.66.213:1200/api/chart?content=${apiData}&OPENAI_API_KEY=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`
    )
      .then((res) => res.json())
      .then(function (response) {
        setResult(response.content);
      })
      .catch(function (error) {
        console.log(error);
        setResult("请求出错！");
      });
  }

  return (
    <div className="App">
      <input
        type="text"
        value={apiData}
        onChange={(e) => setApiData(e.target.value)}
        placeholder="请输入要请求的数据"
      />
      <button onClick={requestData}>请求数据</button>

      <div id="result" dangerouslySetInnerHTML={{ __html: result }}></div>
    </div>
  );
}

export default App;
