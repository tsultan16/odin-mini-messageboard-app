const authors = [
    {id: 1, name: "Alice"},
    {id: 2, name: "Bob"},
    {id: 3, name: "Charlie"},
]


async function getAuthorById(authorId) {
    return authors.find(author => author.id === authorId);
};

module.exports = { getAuthorById }; 