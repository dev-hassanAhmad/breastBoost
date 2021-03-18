var firebaseConfig = {
    apiKey: "AIzaSyCiQn8JJxPoJaIeeW9b_oeIFFvc_3xQN9E",
    authDomain: "vardaanayurveda-d920d.firebaseapp.com",
    projectId: "vardaanayurveda-d920d",
    storageBucket: "vardaanayurveda-d920d.appspot.com",
    messagingSenderId: "937246579401",
    appId: "1:937246579401:web:63ac3f481e8d128d548b18",
    measurementId: "G-C9CKJ0KECV"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
let contactInfo = firebase.database().ref('contactform')
    
    document.querySelector('#contactInfo').addEventListener('submit', submitData)
    
    function submitData(e){
      e.preventDefault()
    
      let name = document.querySelector(".name").value;
      let email = document.querySelector(".email").value;
      let phone = document.querySelector(".phone").value;
      let msg = document.querySelector(".msg").value;
    
  
      console.log(name, email, phone, msg)
  
      contactSubmit(name, email, phone, msg)
    
      let contact = document.querySelector('#contactInfo').reset()
      if(!contact){
        window.location.href('thank.html')
      }else{
        alert("not submit")
      }
    }
    
    function contactSubmit(name, phone, email, msg){
      let newContactInfo = contactInfo.push()
    
      newContactInfo.set({
        name:name,
        phone:phone,
        email:email,
        msg:msg
      })
    }