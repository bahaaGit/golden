
function regUser() {

    var user = $('#newUser').val();
    var password = $('#newPass').val();
    var newAddr = $('#newAddr').val();
    var newPhone = $('#newPhone').val();
    var newZip = $('#newZip').val();
    var dob = $('#dob').val();


    var newUser = {
        userID: user,
        password: password,
        address: newAddr,
        zipcode: newZip,
        phone: newPhone,
        dob: dob,
    };

    console.log(newUser);

    $.ajax({
        type: 'POST',
        url: '/register',
        data: newUser,
        success: function(data) {
            //do something with the data via front-end framework
            console.log(data);
            // window.location.href = '/listings';
        },
        error: function(err) {
            console.log(err);
        }
    })
}

function userLogin() {
    var user = $('#userID').val();
    var pass = $('#password').val();


    $.ajax({
        type: 'POST',
        url:'/login',
        data: {
            userID: user,
            password: pass,
        },
        success: function(data) {
            console.log(data)
            window.location.href = '/listings';
        },
        error: function(err) {
            console.log(err);
        }
    });


}

function addPost() {

    var addr = $('#addAddress').val();
    var town = $('#addTown').val() + ', IN' + $('#addZipcode').val();
    var zipcode = $('#addZipcode').val();
    var host = $('#addHost').val();
    var phone = $('#addNumber').val();

    var newPost = {
        address: addr,
        town: town,
        zipcode: zipcode,
    }   

}