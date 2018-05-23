console.log('Service Worker Loaded');

self.addEventListener('push', e => {
    const data = e.data.json();
    console.log('Push Received...');
    self.registration.showNotification(data.title, {
        body: 'Notified!!',
        icon: 'http://static.adweek.com/adweek.com-prod/wp-content/uploads/sites/2/2016/09/Instagram-App-Icon.png'
    });
});
