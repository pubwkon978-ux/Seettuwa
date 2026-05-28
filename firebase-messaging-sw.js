importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyC15xoj_yTycj6JKQmNamP_RdHAkRTBKJU",
  authDomain: "seettuwa-8e728.firebaseapp.com",
  databaseURL: "https://seettuwa-8e728-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "seettuwa-8e728",
  storageBucket: "seettuwa-8e728.firebasestorage.app",
  messagingSenderId: "602443508284",
  appId: "1:602443508284:web:43ef7f44080b866525b139"
});

const messaging = firebase.messaging();

// Background notification handler
messaging.onBackgroundMessage(payload => {
  const { title, body, icon } = payload.notification || {};
  self.registration.showNotification(title || 'Seettuwa', {
    body: body || '',
    icon: icon || '/favicon.ico',
    badge: '/favicon.ico',
    vibrate: [200, 100, 200],
    data: payload.data || {}
  });
});

// Click on notification opens the app
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.openWindow('/viewer.html'));
});
