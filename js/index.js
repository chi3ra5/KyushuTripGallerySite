// ボタンの要素を取得
const btn_pic1 = document.getElementById("btn_pic1");
const btn_pic2 = document.getElementById("btn_pic2");
const btn_pic3 = document.getElementById("btn_pic3");
const btn_pic4 = document.getElementById("btn_pic4");

// frame内の要素を取得
const PickupPicture =document.getElementById("PickupPicture");
const spotName = document.getElementById("spotName");
const spotInfo = document.getElementById("spotInfo");

// ボタン1がクリックされたら
btn_pic1.addEventListener('click',()=>{
  // frame画像が変わる
  PickupPicture.src="./img/仙厳園.jpg";
  // スポット名が変わる
  spotName.textContent="仙厳園";

  // スポット説明が変わる
  spotInfo.textContent="鹿児島にある日本を代表する大名庭園・薩摩藩島津家別邸の名勝。ただ広いだけでなく、文化体験ができたり売店でお買い物をしたり1日中満喫できる。";

});

// ボタン2がクリックされたら
btn_pic2.addEventListener('click',()=>{
  // frame画像が変わる
  PickupPicture.src="./img/熊本城.jpg";
  // スポット名が変わる
  spotName.textContent="熊本城";

  // スポット説明が変わる
  spotInfo.textContent="加藤清正によって約７年の歳月をかけて築城された名城。別名「銀杏城」は、籠城時のためイチョウの木を多く植えたことに由来する。熊本地震で崩れた石垣がまだ残る。";

});

// ボタン3がクリックされたら
btn_pic3.addEventListener('click',()=>{
  // frame画像が変わる
  PickupPicture.src="./img/FUKUOKAオブジェ.jpg";
  // スポット名が変わる
  spotName.textContent="FUKUOKAオブジェ";

  // スポット説明が変わる
  spotInfo.textContent="旧福岡県公会堂貴賓館の目の前にある文字のオブジェ。旅行に行った際は、山笠祭りの会場設営中だった。";

});

// ボタン4がクリックされたら
btn_pic4.addEventListener('click',()=>{
  // frame画像が変わる
  PickupPicture.src="./img/九州国立博物館.jpg";
  // スポット名が変わる
  spotName.textContent="九州国立博物館";

  // スポット説明が変わる
  spotInfo.textContent="太宰府市にあり、アジアとの交流が盛んな土地ならではの展示品が並ぶ博物館。展示品が多くてゆっくり見るには1日では時間が足りない！";

});