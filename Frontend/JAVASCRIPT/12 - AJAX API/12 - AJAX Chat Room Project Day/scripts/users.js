// GET [USERS]

const baseUrl = 'https://chat-api-course.onrender.com';
let userArray;

$.ajax({
    methode:'GET',
    url: baseUrl + '/users',
}).done(getUsers);
function getUsers(response){
    userArray = response.data;
    const model = $('#userList li');
    for (const userData of userArray){
        const clone = model.clone();
        $('#userList').append(clone);
        clone.text(userData.username);
    }
    model.remove();
}

// LOCAL STORAGE is use to trasmit data rom the signup/login 
// page to index.html
if (localStorage.getItem('hash')){
    // I'm connected
    alert('I am connected');
}
//Disconnect
$('#disconnect').on('click', function (){
    localStorage.removeItem('hash');
});


