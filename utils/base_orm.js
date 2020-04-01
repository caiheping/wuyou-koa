async function createData(model, data) {
    return await model.create(data)
}

async function updateData(model, data, condition) {
    return await model.update(data, condition)
}

async function deleteData(model, condition) {
    return await model.destroy(condition)
}

module.exports = {
    createData,
    updateData,
    deleteData
};
