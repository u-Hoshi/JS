// const userId = "u-Hoshi"

async function main() {
  try {
      const userId = getUserId();
      const userInfo = await fetchUserInfo(userId);
      const view = createView(userInfo);
      displayView(view);
  } catch (error) {
      console.error(`エラーが発生しました (${error})`);
  }
}


function fetchUserInfo(userId) {
  
  return fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`) // リクエストを送信
    // 以下返ってくるレスポンスに対して処理
  .then(response=>{ // fetchでリクエストしたものがレスポンスを返却されるとthen以降が実行される
    console.log(response)
    if (!response.ok) {
      // console.error("エラーレスポンス", response)
      return Promise.reject(new Error(`${response.status}:${response.statusText}`))
     } else {
      return response.json()
    }
  // }).catch(error => {
  //   console.log(error)
  })
}

function getUserId() {
  return document.getElementById("userId").value
}

function createView(userInfo) {
  return escapeHTML`
  <h4>${userInfo.name} (@${userInfo.login})</h4>
  <img src="${userInfo.avatar_url}" alt="${userInfo.login}" height="100">
  <dl>
      <dt>Location</dt>
      <dd>${userInfo.location}</dd>
      <dt>Repositories</dt>
      <dd>${userInfo.public_repos}</dd>
  </dl>
  `;
}

function displayView(view) {
  const result = document.getElementById("result");
  result.innerHTML = view;
}

function escapeSpecialChars(str) {
  return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
}

function escapeHTML(strings, ...values) {
  return strings.reduce((result, str, i) => {
      const value = values[i - 1];
      if (typeof value === "string") {
          return result + escapeSpecialChars(value) + str;
      } else {
          return result + String(value) + str;
      }
  });
}