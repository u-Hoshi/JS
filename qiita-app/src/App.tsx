import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import Card from './Card';

function App() {
  const [datas, setData] = useState<any>([]);
  const onClickData = () => {
    const fetchPosts = async () => {
      await axios
        .get(
          'https://qiita.com/api/v2/authenticated_user/items?page=1&per_page=5',
          {
            headers: {
              Authorization: 'Bearer c0825c3521d594040bc59d5404a92374295faa5f',
            },
          }
        )
        .then(res => {
          setData(res.data);
        });
      // const dataNum = Object.keys(res.data).length;
    };
    fetchPosts();
  };

  // XMLHttpRequests
  const onClickData2 = () => {
    var oReq = new XMLHttpRequest();
    oReq.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        if (this.response) {
          setData(this.response);
        } else {
          // エラーを表示する
          alert(this.status + this.statusText);
        }
      }
    };
    oReq.open(
      'GET',
      'https://qiita.com/api/v2/authenticated_user/items?page=2&per_page=5'
    );
    oReq.setRequestHeader(
      'Authorization',
      'Bearer c0825c3521d594040bc59d5404a92374295faa5f'
    );
    oReq.send();
    oReq.responseType = 'json';
  };

  // FetchAPI
  const onClickData3 = () => {
    fetch(
      'https://qiita.com/api/v2/authenticated_user/items?page=3&per_page=5',
      {
        headers: {
          Authorization: 'Bearer c0825c3521d594040bc59d5404a92374295faa5f',
        },
      }
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data);
      });
  };

  return (
    <>
      <button onClick={onClickData}>Axios</button>
      <button onClick={onClickData2}>XMLHttpRequest</button>
      <button onClick={onClickData3}>fetchAPI</button>
      <p>hoge</p>
      {datas ? (
        datas?.map((data: any) => {
          return <Card title={data.title} />;
        })
      ) : (
        <p>false</p>
      )}
      <p>bar</p>
    </>
  );
}

export default App;
