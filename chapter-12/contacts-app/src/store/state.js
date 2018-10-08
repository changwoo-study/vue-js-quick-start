import CONF from '../Config';

export default {
    isLoading: false,

    contact: {
        no: 0,
        name: '',
        tel: '',
        address: '',
        photo: '',
    },
    contactlist: {
        pageno: 1,
        pagesize: CONF.PAGE_SIZE,
        totalcount: 0,
        contacts: []
    }
};