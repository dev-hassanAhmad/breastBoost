

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

  function saveData(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      window.location.replace("./index.html")
    }).catch((err) => {
      alert(err)
    })
  }

  function signOut(){
    firebase.auth().signOut().then(function(){
      window.location.replace("./login.html")
    })
  }


  

  let contactFormInfo = firebase.database().ref('contactdata')
  contactFormInfo.on("value", getData);

  function getData(datas){
      let users = datas.val();
      let keys = Object.keys(users);

      for(let i = 0; i<keys.length; i++){
        let contactData = keys[i]
      //   let i = i;
        let fullname = users[contactData ].fullname;
        let yourphone = users[contactData ].yourphone;
        let product = users[contactData].product;
        

        let infoResult = document.querySelector('.contact');

        infoResult.innerHTML += `
        <tr>
              <td>${i}</td>
            <td>${fullname}</td>
            <td>${yourphone}</td>
            <td>${product}</td>
        </tr>
        `

    }
  }



  