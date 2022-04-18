
  /* paste this line in verbatim */
  window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
  /* customize formbutton below*/   
formbutton("create", {
    action: "https://formspree.io/f/mdoblqka",
    title: "Any questions ?",
    fields: [
      { 
        type: "email", 
        label: "Email:", 
        name: "email",
        required: true,
        placeholder: "your@email.com"
      },
      {
        type: "textarea",
        label: "Message:",
        name: "message",
        placeholder: "What would you like to know?",
      },
      { type: "submit" }      
    ],
    styles: {
      title: {
        backgroundColor: "aqua"
      },
      button: {
        backgroundColor: "aqua"
      }
    }
  });


//created an object with list of attributes 
const Iam = {
  Name: "Bella",
  Skills : "CSS, HTML, Javascript and Git/Github.",

  //a function to call list and input info needed for homework 
  //considering translating in spanish 
  myPortfoilo : function() {
    return "Hi, it's Bella I am enhancing my skills by participating in Google's UX Designer Certificate course. I recently learned " + this.Skills + " You may see my potfolio at the link below" ; 
  }
};


//print to console t
//console.log(Iam.myPortfoilo());



//code to take log answers to html in a typewriter effect

var i = 0;
var txt = Iam.myPortfoilo();
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("thediv").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


// signature//

var canvas = document.getElementById('signature');
var ctx = canvas.getContext("2d");
var drawing = false;
var prevX, prevY;
var currX, currY;
var signature = document.getElementsByName('signature')[0];

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stop);
canvas.addEventListener("mousedown", start);


canvas.addEventListener("touchmove", draw);
canvas.addEventListener("touchend", stop);
canvas.addEventListener("touchstart", start);

function start(e) {
  drawing = true;
}

function stop() {
  drawing = false;
  prevX = prevY = null;
  signature.value = canvas.toDataURL();
}

function draw(e) {
  if (!drawing) {
    return;
  }
  // Test for touchmove event, this requires another property.
  var clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
  var clientY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;
  currX = clientX - canvas.offsetLeft;
  currY = clientY - canvas.offsetTop;
  if (!prevX && !prevY) {
    prevX = currX;
    prevY = currY;
  }

  ctx.beginPath();
  ctx.moveTo(prevX, prevY);
  ctx.lineTo(currX, currY);
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.closePath();

  prevX = currX;
  prevY = currY;
}

function onSubmit(e) {
  console.log({
    'name': document.getElementsByName('name')[0].value,
    'signature': signature.value,
  });
  return false;
}

// $img = $_POST['signature'];
// $data = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $img));
// file_put_contents('storage/signature.png', $data);
