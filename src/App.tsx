import React, { useState } from "react";
// %z3Y7HZ}z_#ARvLh
function App() {
  const [apiData, setApiData] = useState("");
  const [result, setResult] = useState("");

  function requestData() {
    const apiUrl = "https://136.244.66.213:1200/api/chart";
    fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify({
        content: apiData,
      }),
    })
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
        placeholder="请输入你要问的话"
      />
      <button onClick={requestData}>发送</button>

      <div id="result" dangerouslySetInnerHTML={{ __html: result }}></div>
    </div>
  );
}

export default App;
