const refineResponse = (
    status,
    serverMessage,
    userMessage,
    items
) => {
    return {
        status,
        serverMessage,
        userMessage,
        items
    };
};

module.exports = {
    refineResponse
}

