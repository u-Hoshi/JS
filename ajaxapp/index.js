// const userId = "u-Hoshi"

function main() {
  fetchUserInfo("js-primer-example");
}

function fetchUserInfo(userId) {
  
  fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`) // リクエストを送信
    // 以下返ってくるレスポンスに対して処理
  .then(response=>{ // fetchでリクエストしたものがレスポンスを返却されるとthen以降が実行される
    console.log(response.status)
    console.error(response.ok)
    if (!response.ok) {
      console.error("エラーレスポンス",response)
     } else {
      return response.json().then(userInfo => {
        console.log(userInfo)
          // HTMLの組み立て
          const view = createView(userInfo);
          // HTMLの挿入
          displayView(view);
      })
    }
  }).catch(error => {
    console.log(error)
  })
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