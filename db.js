let messages = [
    {
        id: "0",
        text: "Hi there!",
        user: "Amando",
        added: new Date('August 19, 2021 23:15:30')
    },
    {
        id: "1",        
        text: "Hey, I'm Charles. New here. Happy to meet you all!",
        user: "Charles",
        added: new Date('January 31, 2024 05:28:19')
    }
];

const links = [
    {href: "/", text: "Home"},
    {href: "about", text: "About"},
    {href: "new", text: "Post a Message"},
];


async function getMessageById(messageId) {
    // return messages.find(message => message.id === messageId);
    return messages[messageId];
};


module.exports = { getMessageById, messages, links }; 