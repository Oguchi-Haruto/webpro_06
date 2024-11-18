const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

app.get("/hello1", (req, res) => {
  const message1 = "Hello world";
  const message2 = "Bon jour";
  res.render('show', { greet1:message1, greet2:message2});
});

app.get("/hello2", (req, res) => {
  res.render('show', { greet1:"Hello world", greet2:"Bon jour"});
});

app.get("/icon", (req, res) => {
  res.render('icon', { filename:"./public/Apple_logo_black.svg", alt:"Apple Logo"});
});

app.get("/luck", (req, res) => {
  const num = Math.floor( Math.random() * 6 + 1 );
  let luck = '';
  if( num==1 ) luck = '大吉';
  else if( num==2 ) luck = '中吉';
  console.log( 'あなたの運勢は' + luck + 'です' );
  res.render( 'luck', {number:num, luck:luck} );
});

app.get("/janken", (req, res) => {
  let hand = req.query.hand;
  let win = Number( req.query.win );
  let total = Number( req.query.total );
  console.log( {hand, win, total});
  const num = Math.floor( Math.random() * 3 + 1 );
  let cpu = '';
  let judgement = '';  // 勝敗の判定結果を格納する変数

  if( num==1 ) cpu = 'グー';
  else if( num==2 ) cpu = 'チョキ';
  else cpu = 'パー';
  // ここに勝敗の判定を入れる
  if (hand === cpu) {
    judgement = 'あいこ';
  } else if (hand === 'グー') {
    if (cpu === 'チョキ') {
      judgement = '勝ち';
      win += 1;
    } else {
      judgement = '負け';
    }
  } else if (hand === 'チョキ') {
    if (cpu === 'パー') {
      judgement = '勝ち';
      win += 1;
    } else {
      judgement = '負け';
    }
  } else if (hand === 'パー') {
    if (cpu === 'グー') {
      judgement = '勝ち';
      win += 1;
    } else {
      judgement = '負け';
    }
  }

  //let judgement = '勝ち';
  win += 1;
  total += 1;
  const display = {
    your: hand,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  }
  res.render( 'janken', display );
});


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

  res.render('teisyokuya', { kaesi, H });
});

app.get("/gacha", (req, res) => {
  const value1 = req.query.number1;
  const value2 = req.query.number2;
  const num1 = Number( value1 );  
  const num2 = Number( value2 ); 

  let kaesi = '';
  let H = '';
  let zannen = '';
  let k = '';

  A = (1 - (num1/100)) ** num2
  kaesi = (1 - A) * 100
  B = num2 * (num1/100) * ((1 - (num1/100)) ** (num2 - 1))
  H = kaesi - (B * 100)
  zannen = 100 - kaesi 

  if (num1<=0){
    kaesi = 0
    H = 0
    zannen = 0
    k = '計算できません　排出率を変えてください'
  }

  if (num2<=0){
    kaesi = 0
    H = 0
    zannen = 0
    k = '計算できません　試行回数を変えてください'
  }

  res.render('gacha', { kaesi, H , zannen, k});
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));