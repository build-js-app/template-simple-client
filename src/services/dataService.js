import httpHelper from '../helpers/httpHelper';

export default {
    getMessage
};

function getMessage() {
    return httpHelper.get(`/api/message`);
}