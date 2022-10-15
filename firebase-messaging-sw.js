importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');

   /*Update with yours config*/
  const firebaseConfig = {
   apiKey: "AIzaSyC3dwtjPsQC5ZJQMuSxUxcZ2nYaRBOmk58",
   authDomain:  "jtl-project-6b707.firebaseapp.com",
   projectId: "jtl-project-6b707",
   storageBucket: "jtl-project-6b707.appspot.com",
   messagingSenderId: "311122150536",
   appId: "1:311122150536:web:3fa022f24a4d0fcf004b3d",
   measurementId: "G-7EEYPDSSCY"
 };
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

  // /*messaging.onMessage((payload) => {
  // console.log('Message received. ', payload);*/
  // messaging.onBackgroundMessage(function(payload) {
  //   console.log('Received background message ', payload);

  //   const notificationTitle = payload.notification.title;
  //   const notificationOptions = {
  //     body: payload.notification.body,
  //   };

  //   self.registration.showNotification(notificationTitle,
  //     notificationOptions);
  // });