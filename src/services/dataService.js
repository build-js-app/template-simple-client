import httpHelper from '../helpers/httpHelper';

export default {
    getMessage,
    getItemsList
};

function getMessage() {
    return httpHelper.get(`/api/message`);
}

function getItemsList() {
    return httpHelper.get('/api/items');
}