const BOT = 'Mitoo'

const mainMenu = () => {
    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [
                    {
                        "title": `Mình là ${BOT}`,
                        "subtitle": `Bạn có thể trò chuyện với ${BOT} bằng một số lựa chọn bên dưới`,
                        "image_url": "https://i.ibb.co/n12YxDW/Mitoo.png",
                        "buttons": [
                            {
                                "type": "postback",
                                "title": `MITOO LÀ AI?`,
                                "payload": "ABOUT",
                            },
                            {
                                "type": "postback",
                                "title": "KHÁM PHÁ NGAY",
                                "payload": "START",
                            }
                        ],
                    },
                    {
                        "title": `Góp ý cho ${BOT}`,
                        "subtitle": `Bạn có thể góp ý cho ${BOT} tại đây`,
                        "image_url": "https://i.ibb.co/DbDJGjz/feedback.png",
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "GÓP Ý CHO MITOO",
                                "payload": "FEED_BACK",
                            },
                            {
                                "type": "postback",
                                "title": "BÁO LỖI",
                                "payload": "ERROR",
                            }
                        ],
                    }

                ]
            }
        }
    }
}

const start = () => {
    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [
                    {
                        "title": "Lựa chọn",
                        "subtitle": `Bạn có đang phân vân giữa các lựa chọn không? Hãy để ${BOT} giúp bạn!`,
                        "image_url": "https://i.ibb.co/LCVMCwF/choose.png",
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "BẮT ĐẦU",
                                "payload": "CHOOSE_START",
                            },
                            {
                                "type": "postback",
                                "title": "VỀ MÀN HÌNH CHÍNH",
                                "payload": "MAIN_MENU",
                            }
                        ]
                    },
                    {
                        "title": "Tung đồng xu",
                        "subtitle": `${BOT} sẽ giúp bạn tung một đồng xu xem nó là mặt sấp hay ngửa nhé!`,
                        "image_url": "https://i.ibb.co/VSmC632/Flip-A-Coin-Day-640x514.jpg",
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "TUNG ĐỒNG XU",
                                "payload": "COIN_START",
                            },
                            {
                                "type": "postback",
                                "title": "VỀ MÀN HÌNH CHÍNH",
                                "payload": "MAIN_MENU",
                            }
                        ]
                    },
                    {
                        "title": "Quay xúc xắc",
                        "subtitle": `${BOT} sẽ giúp bạn quay các viên xúc xắc`,
                        "image_url": "https://i.ibb.co/RDtHyb8/3d-render-falling-casino-dice-icon-illustration-design-460848-1142.jpg",
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "QUAY XÚC XẮC",
                                "payload": "DICE_START",
                            },
                            {
                                "type": "postback",
                                "title": "VỀ MÀN HÌNH CHÍNH",
                                "payload": "MAIN_MENU",
                            }
                        ]
                    }
                ]
            }
        }
    }
}

function contiCoin() {
    return {
        "text": "Bạn có muốn tiếp tục tung đồng xu không?",
        "quick_replies": [
            {
                "content_type": "text",
                "title": "TIẾP TỤC",
                "payload": "COIN_START",
                "image_url": "https://i.ibb.co/HYpxVpj/add.png"
            },
            {
                "content_type": "text",
                "title": "QUAY LẠI",
                "payload": "START",
                "image_url": "https://i.ibb.co/qm8TLbp/back.png"
            }
        ]
    }
}

function contiDice (quantity) {
    return {
        "text": `Bạn có muốn tiếp tục quay ${quantity} viên xúc xắc không?`,
        "quick_replies": [
            {
                "content_type": "text",
                "title": "TIẾP TỤC",
                "payload": `DICE_${quantity}`,
                "image_url": "https://i.ibb.co/HYpxVpj/add.png"
            },
            {
                "content_type": "text",
                "title": "QUAY LẠI",
                "payload": "START",
                "image_url": "https://i.ibb.co/qm8TLbp/back.png"
            }
        ]
    }
}

function diceNum() {
    return {
        "text": "Bạn cần quay bao nhiêu viên xúc xắc nà!",
        "quick_replies": [
            {
                "content_type": "text",
                "title": "1 VIÊN",
                "payload": "DICE_1",
            },
            {
                "content_type": "text",
                "title": "2 VIÊN",
                "payload": "DICE_2",
            },
            {
                "content_type": "text",
                "title": "3 VIÊN",
                "payload": "DICE_3",
            }
        ]
    }
}

function imgDice(num) {
    const listLink = [
        'https://i.ibb.co/YyQ7sw9/dice1.png',
        'https://i.ibb.co/P9crvqJ/dice2.png',
        'https://i.ibb.co/7275g69/dice3.png',
        'https://i.ibb.co/RjCwK6J/dice4.png',
        'https://i.ibb.co/9nnwmHD/dice5.png',
        'https://i.ibb.co/PjxzcL0/dice6.png'
    ]
    return {
        "attachment": {
            "type": "image",
            "payload": {
                "url": `${listLink[num - 1]}`
            }
        }
    }
}

function chooseTyping() {
    return {
        "text": `Bạn hãy gửi từng lựa chọn cho ${BOT}. Khi nào xong thì nhấn "HOÀN THÀNH" nhé!`,
        "quick_replies": [
            {
                "content_type": "text",
                "title": "HOÀN THÀNH",
                "payload": "CHOOSE_SUBMIT",
                "image_url": "https://i.ibb.co/fCD7jrh/accept.png"
            },
            {
                "content_type": "text",
                "title": "HUỶ",
                "payload": "START",
                "image_url": "https://i.ibb.co/26zcRJ2/cancel.png"
            }
        ]
    }
}

function contiChoose (quantity) {
    return {
        "text": `Bạn có muốn tiếp tục không?`,
        "quick_replies": [
            {
                "content_type": "text",
                "title": "TIẾP TỤC",
                "payload": `CHOOSE_START`,
                "image_url": "https://i.ibb.co/HYpxVpj/add.png"
            },
            {
                "content_type": "text",
                "title": "QUAY LẠI",
                "payload": "START",
                "image_url": 'https://i.ibb.co/qm8TLbp/back.png'
            }
        ]
    }
}

function unknown () {
    return {
        "text": `Huhu, ${BOT} không hiểu tin nhắn của bạn 😭😭`,
        "quick_replies": [
            {
                "content_type": "text",
                "title": "VỀ MÀN HÌNH CHÍNH",
                "payload": `MAIN_MENU`,
                "image_url": "https://i.ibb.co/2NBXNnD/home.png"
            }
        ]
    }
}

function about () {
    return {
        "text": `Bạn muốn ${BOT} dẫn đi đâu nè!`,
        "quick_replies": [
            {
                "content_type": "text",
                "title": "VỀ MÀN HÌNH CHÍNH",
                "payload": `MAIN_MENU`,
                "image_url": "https://i.ibb.co/2NBXNnD/home.png"
            },
            {
                "content_type": "text",
                "title": "KHÁM PHÁ NGAY",
                "payload": `START`,
                "image_url": "https://i.ibb.co/1rNPr8c/categories.png"
            }
        ]
    }
}

// https://i.ibb.co/qm8TLbp/back.png
// https://i.ibb.co/HYpxVpj/add.png
// https://i.ibb.co/26zcRJ2/cancel.png
// https://i.ibb.co/fCD7jrh/accept.png

module.exports = {
    mainMenu,
    start,
    contiCoin,
    diceNum,
    imgDice,
    contiDice,
    chooseTyping,
    contiChoose,
    unknown,
    about
}