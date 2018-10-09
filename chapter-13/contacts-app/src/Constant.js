export default {
    // 변이와 앧션 모두 사용
    FETCH_CONTACTS: 'fetchContacts',                // 연락처 조회
    FETCH_CONTACT_ONE: 'fetchContactOne',           // 연락처 한 건 조회
    INITIALIZE_CONTACT_ONE: 'initializeContactOne', // 연락처 초기화
    CHANGE_IS_LOADING: 'changeIsLoading',           // 스피너

    // 액션에서만 사용
    ADD_CONTACT: 'addContact',                   // 연락처 추가
    UPDATE_CONTACT: 'updateContact',             // 연락처 수정
    UPDATE_PHOTO: 'updatePhoto',                 // 사진 수정
    DELETE_CONTACT: 'deleteContact'              // 연락처 삭제
}