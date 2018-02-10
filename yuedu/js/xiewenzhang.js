var btn = document.getElementById("file-img");
btn.onchange = function () {
        if(((this.files[0].size/1024)/1024)>1){
            alert("图片过大无法上传");
            return;
        }
    
    var img_reader = new FileReader();
    img_reader.readAsDataURL(this.files[0]);
    img_reader.onload = function (e) {
        var img = document.createElement("img");
        img.src = e.target.result;
        img.className = "up-img";
        document.getElementsByClassName("shangchuan")[0].insertBefore(img, btn);
        document.getElementsByClassName("change")[0].style.display = "inline-block";
    };
};

document.querySelector("#fabu").onclick = function () {
    var title = document.querySelector("#biaoti").value;
    var article = document.querySelector("#arti").value;
    var formdata = new FormData();
    formdata.append("token", localStorage.token);
    formdata.append("title", title);
    formdata.append("body", article);
    formdata.append("pic", btn.files[0]);
    myNewAjax("POST", url + "/posts/add", function (data) {
        if (data.code == "SUCCESS") {
            alert("成功");
             window.location.href="selfCenter.html?id="+localStorage.id;
        } else if (data.code == "account_token_invalid") {
            alert("登陆状态失效");
        }
    }, formdata);
};