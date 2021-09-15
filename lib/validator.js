function checkField(object, fields) {
    fields.every((field) => {
        return !!object[field];
    });
}

module.exports = {
    checkField,
}