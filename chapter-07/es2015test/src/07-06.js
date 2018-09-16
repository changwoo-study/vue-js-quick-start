function addContact({name, phone, email='이메일 없음', age=0}) {
    console.log('name: ' + name);
    console.log('phone: ' + phone);
    console.log('email: ' + email);
    console.log('age: ' + age);
}

addContact({
    name: '이몽룡',
    phone: '010-3434-8989'
});
