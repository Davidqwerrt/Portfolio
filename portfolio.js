AOS.init({
         duration:1000,
      once: false 
 
    });

    function showdescription(){
      document.querySelector("#medicare-description").classList.toggle("hidden");
    }
    function sendmail(){
      var params={
        name:document.getElementById("name").value ,
        email:document.getElementById("email").value ,
       message: document.getElementById("message").value ,
      };
    
    const serviceID="service_tc921ac";
    const templateID="template_d9kn1zl";

    emailjs.send(serviceID,templateID,params)
    .then(
      res=>{
        document.getElementById("name").value="";
           document.getElementById("email").value="";
           document.getElementById("message").value="";
           console.log(res);
      alert("your  massage send successfully");
        
      }
    )
    .catch(err=>console.log(err));
  }
 window.onscroll = function () {
  const goTopBtn = document.getElementById("goTopBtn");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    goTopBtn.style.display = "block";
  } else {
    goTopBtn.style.display = "none";
  }
};


function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
