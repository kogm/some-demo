window.onload = function() {
  document.getElementById("title").innerHTML = "Hello, world";
  var button = document.getElementById("regist");

  function req() {
    var form_data = document.querySelectorAll("input");

    var post_data = {
      username: form_data[0].value,
      password: form_data[1].value,
      confirmPassword: form_data[1].value
    };
    // 发送请求
    this.fetch("http://localhost:8088/passport/regist", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(post_data)
    })
      .then(response => response.json())
      .then(data => {
        this.console.log("get data from server------>", data);
      });
  }

  button.onclick = function() {
    req();
  };
};
