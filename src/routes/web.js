const express = require('express');

const fbController = require('../controllers/fbController');
const settingController = require('../controllers/settingController');

const router = express.Router();

const initWebRoute = (app) => {
    router.get('/', fbController.getHomePage);
    router.post('/webhook', fbController.postWebhook);
    router.get('/webhook', fbController.getWebhook);
    router.get('/createGetStartedButton', settingController.getstartedButtonController);
    router.get('/createMenu', settingController.menuController);
    return app.use('/', router);
}

module.exports = initWebRoute