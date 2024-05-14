(function(){
    emailjs.init({
      publicKey: "NjkGyZ_F9mW3_L5pY",
  });
})();

function sendMail(event) {
    event.preventDefault();
    var params = {
        name: document.getElementById("name").value ,
        email : document.getElementById("email").value ,
        message: document.getElementById("message").value,
      };
    const serviceID = "service_br62d6n";
    const templateId = "template_72qcyfi";
    
    emailjs.send(serviceID,templateId,params)
    .then(
      (res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your Message Sent Successfully")
      }
    ).catch ((err) => {
        alert(err)
    })
}