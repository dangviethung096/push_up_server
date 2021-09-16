function checkField(object, fields) {
    return fields.every((field) => {
        return !!object[field];
    });
}

function isObjectEmpty(object) {
    return !Object.keys(object).length;
}

module.exports = {
    checkField,
    isObjectEmpty
}