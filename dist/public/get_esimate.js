"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function get_estimate() {
    var width = 500;
    var height = 500;
    var daum = window["daum"];
    var postcode = document.getElementById("postcode");
    var roadAddress = document.getElementById("roadAddress");
    var nextBtn = document.querySelector(".estimate-btn-box-next");
    var previousBtn = document.querySelector(".estimate-btn-box-previous");
    var submitBtn = document.querySelector(".estimate-btn-box-submit");
    var page_1 = document.querySelector(".page-1");
    var page_2 = document.querySelector(".page-2");
    var bodyPage = document.querySelector(".get-estimate-page");
    var imgBtn = document.querySelector(".add-img-icon");
    var fileBtn = document.querySelector('input[type="file"]');
    // (async function get_saveEstimateData() {
    //   let token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
    //   try {
    //     let result = await fetch("http://localhost:3000/api/get_saveEstimateData", {
    //       method: "POST",
    //       credentials: "same-origin",
    //       headers: {
    //         "Content-Type": "application/json",
    //         "CSRF-Token": token,
    //       },
    //       // body: JSON.stringify({ email: data }),
    //     });
    //     if (result.status === 200 || 201) {
    //       let response = await result.json();
    //     }
    //   } catch (error) {
    //     console.error(error);
    //   }
    // })();
    function clickNextBtn() {
        page_1.style.display = "none";
        page_2.style.display = "block";
        previousBtn.style.display = "block";
        nextBtn.style.display = "none";
        submitBtn.style.display = "block";
    }
    function clickPreviousBtn() {
        page_1.style.display = "block";
        page_2.style.display = "none";
        previousBtn.style.display = "none";
        nextBtn.style.display = "block";
        submitBtn.style.display = "none";
    }
    function moveTop() {
        $("html,body").animate({ scrollTop: 0 }, 300);
    }
    nextBtn.addEventListener("click", function () {
        clickNextBtn();
        moveTop();
    });
    previousBtn.addEventListener("click", function () {
        clickPreviousBtn();
        moveTop();
    });
    imgBtn.addEventListener("click", function () {
        fileBtn.click();
    });
    function fetchImage(data) {
        var formData = new FormData();
        for (var i = 0; i < data.length; i++) {
            formData.append("data", data[i]);
        }
        fetch("http://localhost:3000/api/upload_image", {
            method: "POST",
            body: formData,
        })
            .then(function (response) { return response.json(); })
            .then(function (response) { return console.log("Success:", JSON.stringify(response)); })
            .catch(function (error) { return console.error("Error:", error); });
    }
    window.FileUpload = function (e) {
        fetchImage(e.target.files);
    };
    window.openAddresss = function () {
        new daum.Postcode({
            width: width,
            height: height,
            oncomplete: function (data) {
                var roadAddr = data.roadAddress;
                var extraRoadAddr = "";
                if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
                    extraRoadAddr += data.bname;
                }
                if (data.buildingName !== "" && data.apartment === "Y") {
                    extraRoadAddr += extraRoadAddr !== "" ? ", " + data.buildingName : data.buildingName;
                }
                postcode.value = data.zonecode;
                roadAddress.value = roadAddr;
            },
        }).open({
            left: window.screen.width / 2 - width / 2,
            top: window.screen.height / 2 - height / 2,
        });
    };
}
exports.default = get_estimate;
//# sourceMappingURL=get_esimate.js.map