import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState();
  const onClickData = () => {
    const fetchPosts = async () => {
      await axios
        .get('https://qiita.com/api/v2/authenticated_user/items', {
          headers: {
            Authorization: 'Bearer c0825c3521d594040bc59d5404a92374295faa5f',
          },
        })
        .then(res => {
          setData(res.data);
        });
      // const dataNum = Object.keys(res.data).length;
    };
    fetchPosts();
  };
  console.log(data);

  return (
    <>
      {/* <p>{Object.keys(data).length}</p> */}
      <button onClick={onClickData}>hoge</button>
    </>
  );
}

export default App;
