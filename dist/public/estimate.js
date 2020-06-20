"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1() {
    var estimate_container = document.querySelector(".estimate-pre-result-itembox");
    var estimate_list = document.querySelector(".estimate-pre-result-item");
    var estimate_price = document.querySelector(".estimate-pre-price");
    var problem_item = document.querySelectorAll(".problem-item");
    var estimate_num = document.querySelector(".estimate-pre-num");
    var estimateForm = document.querySelector(".estimateForm");
    var estimate_item;
    var added_item;
    var lists_height = 0;
    var price = 0;
    window.add_List = function (e) {
        if (e.checked) {
            var li = document.createElement("li");
            var span = document.createElement("span");
            li.classList.add("estimate-item");
            li.classList.add("" + e.id);
            span.innerHTML = e.nextSibling.nextElementSibling.innerHTML;
            estimate_list.appendChild(li);
            li.appendChild(span);
            added_item = document.querySelector("." + e.id);
            lists_height += added_item.offsetHeight;
            price += Number(e.parentNode.dataset.price);
            estimate_item = document.querySelectorAll(".estimate-item");
        }
        else {
            var remove_item = document.querySelector("." + e.id);
            remove_item.parentNode.removeChild(remove_item);
            lists_height -= added_item.offsetHeight;
            price -= Number(e.parentNode.dataset.price);
        }
        estimate_price.textContent = String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "\uC6D0";
        estimate_num.textContent = estimate_item.length + "\uAC1C \uC120\uD0DD";
        estimate_container.scrollTop = estimate_container.scrollHeight;
    };
    function isLogined(url, item) {
        var token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("CSRF-Token", token);
        fetch(url, {
            method: "POST",
            credentials: "same-origin",
            headers: myHeaders,
            body: JSON.stringify(item),
        })
            .then(function (response) {
            if (response.status === 200 || 201) {
                return response.json();
            }
            else {
                throw new Error("esimtae 오류");
            }
        })
            .then(function (result) {
            if (result.state === true) {
                estimateForm.submit();
            }
            else {
                if (confirm("로그인이 필요한 서비스입니다.")) {
                    location.href = "/api/login";
                }
            }
        })
            .catch(function (err) {
            console.error(err);
        });
    }
    $(".estimate-btn").on("click", function () {
        var dataArray = [];
        estimate_item.forEach(function (element) {
            dataArray.push(element.classList[1]);
        });
        isLogined("http://localhost:3000/api/pre_estimate", dataArray);
    });
}
exports.default = default_1;
//그냥 위에서 리턴값?모르겠다
//# sourceMappingURL=estimate.js.map