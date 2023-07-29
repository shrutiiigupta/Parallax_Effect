let text = document.getElementById('text');
let leftFront = document.getElementById('leftFront');
let rightFront = document.getElementById('rightFront');
let backest = document.getElementById('backest');
// let rightBack = document.getElementById('rightBack');

window.addEventListener('scroll',() => {
    let value = window.scrollY;
    if(value< 1000){
        text.style.marginTop = value * 2.5 + 'px';
        rightFront.style.left = value * 1 + 'px';
        leftFront.style.left = value * -1 + 'px';
        backest.style.top = value * 1 + 'px';
    }
    
    // rightBack.style.left = value * -1 + 'px';

})



function sendEmail(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    Email.send({
        SecureToken : "b3831c65-ee25-4441-8df1-7951acb47a6c",
        To : '202151151@iiitvadodara.ac.in',
        From : "shrutigupta.kin@gmail.com",
        Subject : "Email from Contact Form",
        Body : "Name : " + name + "<br/> User Email : " + email + 
        "<br/> Contact Number : " + phone + "<br/> Message : " + message
    }).then(
      message => alert("Message sent successfully")
    );
}
