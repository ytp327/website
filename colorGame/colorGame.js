var mode=6
var colors=generateRandomColor(mode)
var squares=document.querySelectorAll(".square")
var pickedColor=pickColor()
var colorDisplay=document.querySelector("#colorDisplay")
var message=document.querySelector("#message")
var h1=document.querySelector("h1")
var resetButtom=document.querySelector("#reset")
var easyButtom=document.querySelector("#easyMode")
var mediumButtom=document.querySelector("#mediumMode")
var hardButtom=document.querySelector("#hardMode")
var defualtColor="rgb(35, 35, 35)"//the background color of web

//mode switching
easyButtom.addEventListener("click",function(){
  mode=3
  easyButtom.classList.add("selected")
  mediumButtom.classList.remove("selected")
  hardButtom.classList.remove("selected")
  reset()
})
mediumButtom.addEventListener("click",function(){
  mode=6
  mediumButtom.classList.add("selected")
  easyButtom.classList.remove("selected")
  hardButtom.classList.remove("selected")
  reset()
})
hardButtom.addEventListener("click",function(){
  mode=9
  hardButtom.classList.add("selected")
  mediumButtom.classList.remove("selected")
  easyButtom.classList.remove("selected")
  reset()
})

//init
for(var i=0; i<squares.length;i++){
  //add initial color to squares
  squares[i].style.backgroundColor=colors[i]
  //add click listener to squares
  squares[i].addEventListener("click",function(){
    var clickedColor=this.style.backgroundColor
    //compare pickedColor and clickedColor
    if(clickedColor===pickedColor){
      for(var j=0; j<colors.length;j++){
        squares[j].style.backgroundColor=pickedColor
      }
      h1.style.backgroundColor=pickedColor
      message.textContent="Correct!"
      resetButtom.textContent="Play Again"
    }
    else if(clickedColor!==defualtColor){
      this.style.backgroundColor=defualtColor
      message.textContent="Continue"
    }
  })
}
colorDisplay.textContent=pickedColor


//reset the game
function reset(){
  //generate random color
  colors=generateRandomColor(mode)
  //pick target color
  pickedColor=pickColor()
  colorDisplay.textContent=pickedColor
  //set square color
  for(var i=0; i<colors.length;i++)
    squares[i].style.backgroundColor=colors[i]
  for(var i=colors.length;i<squares.length;i++){
    squares[i].style.backgroundColor=defualtColor
  }
  h1.style.backgroundColor="#4682B4"
  resetButtom.textContent="New Color"
  message.textContent=""
}
resetButtom.addEventListener("click",function(){
  reset()
})

function pickColor(){
  return colors[Math.floor(Math.random()*colors.length)]
}
function generateRandomColor(num){
  //generate color array colors.length=num
  var arr=[]
  for(var i=0;i<num;i++){
    arr.push(randomColor())
  }
  return arr
}
function randomColor(){
  var r=Math.floor(Math.random()*256)
  var g=Math.floor(Math.random()*256)
  var b=Math.floor(Math.random()*256)
  return "rgb("+r+", "+g+", "+b+")"
}