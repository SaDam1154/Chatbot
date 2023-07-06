require('dotenv').config();
const sendMess = require('./replyHandler/postBackReply');

function handleMessage(sender_psid, received_message) {
    if (received_message.quick_reply) {
        handleQuickReply(sender_psid, received_message);
    } else if (received_message.text) {
        if (sendMess.stateChoose[sender_psid] !== undefined) {
            sendMess.replyAddChoose(sender_psid, received_message)
        } else {
            sendMess.replyUnknown(sender_psid)
        }
    }

}

const handleQuickReply = (sender_psid, received_message) => {
    let payload = received_message.quick_reply.payload;
    switch (payload) {
        case 'START':
            sendMess.replySTART(sender_psid);
            break;
        case 'COIN_START':
            sendMess.replyCOIN_START(sender_psid);
            break;
        case 'MAIN_MENU':
            sendMess.replyMAIN_MENU(sender_psid);
            break;
        case 'DICE_1':
            sendMess.replyDICE_FINISH(sender_psid, 1);
            break;
        case 'DICE_2':
            sendMess.replyDICE_FINISH(sender_psid, 2);
            break;
        case 'DICE_3':
            sendMess.replyDICE_FINISH(sender_psid, 3);
            break;
        case 'CHOOSE_START':
            sendMess.replyCHOOSE_START(sender_psid);
            break;
        case 'CHOOSE_SUBMIT':
            sendMess.replyCHOOSE_SUBMIT(sender_psid);
            break;
        default:
            console.log('Incorrect quick reply');
    }
}


function handlePostback(sender_psid, received_postback) {
    let payload = received_postback.payload;
    switch (payload) {
        case 'GET_STARTED':
            sendMess.replyGET_STARTED(sender_psid);
            break;
        case 'MAIN_MENU':
            sendMess.replyMAIN_MENU(sender_psid);
            break;
        case 'START':
            sendMess.replySTART(sender_psid);
            break;
        case 'COIN_START':
            sendMess.replyCOIN_START(sender_psid);
            break;
        case 'DICE_START':
            sendMess.replyDICE_START(sender_psid);
            break;
        case 'CHOOSE_START':
            sendMess.replyCHOOSE_START(sender_psid);
            break;
        case 'FEED_BACK':
        case 'ERROR':
            sendMess.replyNONE(sender_psid);
            break;
        case 'ABOUT':
            sendMess.replyABOUT(sender_psid);
        default:
            console.log('Incorrect post back');
    }
}

module.exports = {
    handleMessage,
    handlePostback,
}