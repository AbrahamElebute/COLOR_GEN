///creating Array for Storage of colours
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
///  grabing element
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");
const body = document.body;
const copyProperty = document.querySelector("#copy-property");
 
///  Event Listener

btn.addEventListener("click",function(){
	let  hexcolor = "#";

	for(let i = 0; i < 6; i++){
		let randomnumber = getRandomNumber();
		hexcolor +=  hex[randomnumber];
	 }
	 color.textContent=hexcolor;
	 body.style.backgroundColor = hexcolor;

})
function getRandomNumber(){
	return Math.floor(Math.random() *hex.length);
 }
 document.querySelector(".btn-humb").addEventListener("click", function () {
	document.querySelector(".navbar").classList.toggle("act");
  });


  
  function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("copy-property");

  /* Select the text field */
//   copyText.select(Text);
  var copyOut = copyText.textContent;
   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyOut);

  /* Alert the copied text */
  alert(" You copied color:  " + copyOut);
}



// -------------------------
