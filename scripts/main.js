/*let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src', '/image/wjl.jpg');
    } else {
      myImage.setAttribute('src', '/image/wjl2.jpg');
    }
}*/
/*
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.textContent = '👏欢迎光临,For' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '👏欢迎光临,For' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
 }
 function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = '👏欢迎光临,For，' + myName;
  }
}
*/