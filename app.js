const express = require("express");
const app = express();

//app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.write('Hello, World\n');
});

app.use( (req, res, next) => {
  res.status(404).send('ページが見つかりません');
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));

app.get("/teisyokuya", (req, res) => {
  const ryouri = req.query.ryouri;
  const kagen = req.query.kagen;
  let kaesi = '';
  let H = '';

  if (ryouri === "1") {
    kaesi = '550円になります';
    H = '';
  } else if (ryouri === "2") {
    if (kagen === "1") {
      kaesi = 'お客さん奥の部屋にどうぞ～';
      H = 'あなたはハンター試験に参加する';
    } else {
      kaesi = '500円になります';
      H = '';
    }
  } else if (ryouri === "3") {
    kaesi = '450円になります';
    H = '';
  } else {
    kaesi = '選択した料理が見つかりません';
  }
});