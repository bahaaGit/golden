// Initialize Firebase
/*var config = {
    apiKey: "AIzaSyDvrvAVb8-u2m0k-eej1ykxW7ucqJxjpqo",
    authDomain: "mygoldenstorage-deacf.firebaseapp.com",
    databaseURL: "https://mygoldenstorage-deacf.firebaseio.com",
    projectId: "mygoldenstorage-deacf",
    storageBucket: "mygoldenstorage-deacf.appspot.com",
    messagingSenderId: "58479308080"
};
firebase.initializeApp(config);*/

$(document).ready(function() {

    $('#loginForm').on('submit', function() {

        var userID = $('#loginForm #userID');
        var password = $('#loginForm #password');

        /*firebase.auth().signInWithEmailAndPassword(userID, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        });*/
        //validate
        //....
        var todo = { userID: userID.val(), password: password.val() };

        console.log(todo.userID, todo.password);
        $.ajax({
            type: 'POST',
            url: '/login',
            data: todo,
            success: function(data) {
                //do something with the data via front-end framework
                //console.log(data);
                console.log("not inside");
                //location.reload();
            },
            error: function(textStatus, errorThrown) {
                console.log("am inside");
            }
        });

        return false;

    });

    $('.textArea').on('hidden.bs.modal', function(e) {
        $(this).val('').end();
    });


    // $('#loginForm2').on('submit', function() {

    // var newUser = $('#loginForm #newUser');
    // var password = $('#loginForm #newPass');
    // var newAddr = $('#loginForm #newAddr');
    // var newPhone = $('#loginForm #newPhone');
    // var dob = $('#loginForm #dob');


    // var todo_user = {
    // newUser: newUser.val(),
    // password: password.val(),
    // newAddr: newAddr.val(),
    // newPhone: newPhone.val(),
    // dob: dob.val()
    // };
    // console.log("sucessfull");

    // $.ajax({
    // type: 'POST',
    // url: '/login',
    // data: todo_user,
    // success: function(data) {
    // //do something with the data via front-end framework
    // console.log("sucessfull");
    // console.log(data);
    // },
    // error: function(textStatus, errorThrown) {
    // console.log("not Sucessfull");
    // }
    // });
    // return false;
    // });
});