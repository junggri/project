import mysql from "../lib/mysql";
import qs from "querystring";

export let makeJuso = (req: any, res: any, authUI: any) => {
  if (qs.parse(req.url).sigunguCode === "sejong") {
    mysql.query(`select * from ${qs.parse(req.url).sigunguCode}`, (err: any, data: any) => {
      let data1 = [];
      let list2 = "";
      let item2;
      if (err) console.error(err);
      for (let i = 0; i < data.length; i++) {
        data1.push(data[i].법정읍면동명);
      }
      let arr = Array.from(new Set(data1)).sort();
      console.log(arr);
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === qs.parse(req.url).bname) {
          item2 = `<option value="${arr[i]}" selected>${arr[i]}</option>`;
        } else {
          item2 = `<option value="${arr[i]}">${arr[i]}</option>`;
        }
        list2 += item2;
      }
      res.render("providers/findAllRegister", { authUI: authUI, csrfToken: req.csrfToken(), list: "", list2: list2 });
    });
    return;
  }

  mysql.query(`select 시군구명 from ${qs.parse(req.url).sigunguCode}`, (err: any, data: any) => {
    if (err) console.error(err);
    let data1 = [];
    let list = "";
    let item;
    for (let i = 0; i < data.length; i++) {
      data1.push(data[i].시군구명);
    }
    let arr = Array.from(new Set(data1)).sort();
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === qs.parse(req.url).sigungu) {
        item = `<option value="${arr[i]}" selected>${arr[i]}</option>`;
      } else {
        item = `<option value="${arr[i]}">${arr[i]}</option>`;
      }
      list += item;
    }
    ////////////////////////////시군구찾기
    mysql.query(`select * from ${qs.parse(req.url).sigunguCode} where 시군구명 = "${qs.parse(req.url).sigungu}"`, (err: any, data: any) => {
      let data1 = [];
      let list2 = "";
      let item2;
      if (err) console.error(err);
      for (let i = 0; i < data.length; i++) {
        data1.push(data[i].법정읍면동명);
      }
      let arr = Array.from(new Set(data1)).sort();
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === qs.parse(req.url).bname) {
          item2 = `<option value="${arr[i]}" selected>${arr[i]}</option>`;
        } else {
          item2 = `<option value="${arr[i]}">${arr[i]}</option>`;
        }
        list2 += item2;
      }
      ///////////////////////////////////읍면동 찾기
      res.render("providers/findAllRegister", { authUI: authUI, csrfToken: req.csrfToken(), list: list, list2: list2 });
    });
  });
  return;
};
