//1.Write the code to access element which is having id as "text".//
const element1=document.getElementById("text");
console.log(element1);


//2.Write the code to access element which is having tag as "h1"//
const element2=document.getElementsByTagName("h1");
console.log(element2[0]);

//3.Write the code to access element which is having class as "box"//
const element3=document.getElementsByClassName("box");
console.log(element3[0]);

//4."<h1>Hello </h1>
//Change the heading from "Hello" to "Hello World" using DOM functions"//
const element4=document.getElementsByTagName("h1");
console.log(document.getElementsByTagName("h1").innerText);
 element4[0].innerText="Hello World";
 console.log(element4[0]);

 //5.Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction". When user clicks on this button, the cards arrangement should be changed to vertical direction.//
 function ChangeDirection(){
    const element5=document.getElementsByClassName("cards");
     element5[0].style.flexDirection="column";   
 }

 //6.What’s the difference between window vs document?//
 // window is an object which is the first object which loads when browser opens.
 //document is also an object which loads in window.


 //7."<h1>Hello </h1>

//Add one style attribute and give text color as red and id attribute and give the id value as ""heading"" in the above given h1 tag using DOM functions"

const element7=document.getElementsByTagName("h1");
element7[1].setAttribute("id","heading");
element7[1].style.color="red";
console.log(element7[1]);
 

//8.Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"

function ChangeText(){
    const element8=document.getElementsByTagName("h2");
console.log(document.getElementsByTagName("h2").innerText);
 element8[0].innerText="Welcome to Elevation Acadamy";
 console.log(element8[0]);
}

//9.Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second;
function displayclock (){
    let time = new Date();
  let hrs = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  
  
  if(hrs>12){
    hrs = hrs -12;
  }
  
    if(hrs==0){
      hrs = 12;
    }
    document.getElementById("clock").innerHTML = hrs + ":" + min + ":" + sec;
  }
  
  setInterval(displayclock,1000)

//10.Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected//

function yearChange() {
    let selectedYear = document.getElementById("yearSelect");
    document.getElementById("yearSelect").innerText = selectedYear;
}


//11."Create a form having name ,email, phone no. , birth year 
//Add validations - phone no. should start with 91 , it should be 10 digits
//email should be domain prepbytes.com
//birth year should be > 95"
function validatePhone(input) {
    let phonePattern = /^\(?(\d{91})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return phonePattern.test(input);
  }
  
  function validateForm(event) {
    let phone = document.getElementById("phone").value;
    let phoneValue = phone.startsWith("91");
    if (phoneValue === false || phone.length !== 10) {
      alert("Please Number must start with 91 with length of 10");
    }
  
    let email = document.getElementById("email").value;
    if (!/@prepbytes.com\s*$/.test(email)) {
      alert("email domain must be @prepbytes.com");
    }
  
    let year = document.getElementById("year").value;
    if (year <= 1995 || year == null) {
      alert("Birth Year must be after 1995.");
    }
  }
  
  document.getElementById("myform")("submit", validateForm);