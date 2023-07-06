require('dotenv').config();
const request = require('request');
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN

const getstartedButtonController = (req, res) => {
    // Construct the message body
    let request_body = {
        "get_started": {
            "payload": "GET_STARTED"
        }
    }

    // Send the HTTP request to the Messenger Platform
    request({
        "uri": `https://graph.facebook.com/v2.6/me/messenger_profile?access_token=${PAGE_ACCESS_TOKEN}`,
        "method": "POST",
        "json": request_body
    }, (err, res, body) => {
        if (!err) {
            console.log(body);
        } else {
            console.error("Erorr");
            console.error(body);
        }
    });

    res.send('create get started btn action');
}


const menuController = (req, res) => {
    // Construct the message body
    let request_body = {
        "persistent_menu": [
            {
                "locale": "default",
                "composer_input_disabled": false,
                "call_to_actions": [
                    {
                        "type": "postback",
                        "title": "MITOO LÀ AI?",
                        "payload": "ABOUT"
                    },
                    {
                        "type": "postback",
                        "title": "KHÁM PHÁ CHỨC NĂNG",
                        "payload": "START"
                    },
                    {
                        "type": "postback",
                        "title": "KHỞI ĐỘNG LẠI MITOO",
                        "payload": "GET_STARTED"
                    }
                ]
            }
        ]
    }

    // Send the HTTP request to the Messenger Platform
    request({
        "uri": `https://graph.facebook.com/v2.6/me/messenger_profile?access_token=${PAGE_ACCESS_TOKEN}`,
        "method": "POST",
        "json": request_body
    }, (err, res, body) => {
        if (!err) {
            console.log(body);
        } else {
            console.error("Erorr");
            console.error(body);
        }
    });

    res.send('create menu action');
}

module.exports = {
    getstartedButtonController,
    menuController
}