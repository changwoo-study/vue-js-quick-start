import Constant from '../Constant';

export default {
    [Constant.FETCH_CONTACTS]: (state, payload) => {
        state.contactlist = payload.contactlist;
    },
    [Constant.FETCH_CONTACT_ONE]: (state, payload) => {
        state.contact = payload.contact;
    },
    [Constant.INITIALIZE_CONTACT_ONE]: (state) => {
        state.contact = {
            no: 0,
            name: '',
            tel: '',
            address: '',
            photo: '',
        };
    },
    [Constant.CHANGE_IS_LOADING]: (state, payload) => {
        state.isLoading = payload.isLoading;
    }
};
