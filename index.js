const express = require("express");
const webpush = require("web-push");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Set static path
app.use(express.static(path.join(__dirname, "client")));

app.use(bodyParser.json());

const publicVapidKey = '';
const privateVapidKey = '';

// Identify who is sending th push notifications
webpush.setVapidDetails('mailto:test@test.com', publicVapidKey, privateVapidKey);

// Subscribe Route
// Send notification to the service worker
app.post('/subscribe', (req, res) => {
    // Get pushSubscripiton object
    const subscription = req.body;

    // Send 201 - resource create
    res.status(201).json({});

    // Create payload
    const payload = JSON.stringify({ title: 'Push Test' });

    // Pass object into sendNotification
    webpush.sendNotification(subscription, payload).catch(err => console.error(err));
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port: ${port}`));
