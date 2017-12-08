$(document).ready(function() {

    $('#loginForm').on('submit', function() {
        var userID = $('#userID');
        var password = $('#password');
        console.log(userID);


        var todo = { userID: userID.val(), password: password.val() };

        console.log(todo.userID, todo.password);
        /*$.ajax({
            type: 'POST',
            url: '/login',
            data: todo,
            success: function(data) {
                console.log("not inside");
            },
            error: function(textStatus, errorThrown) {
                console.log("am inside");
            }
        });*/

        return false;

    });

    $('#loginAdd').on('submit', function() {

        var address = $('#addForm #adress');
        var town = $('#addForm #town');
        var zipcode = $('#addForm #zipcode');
        var host = $('#addForm #host');


        //validate
        //....
        var posts = {
            address: address.val(),
            town: town.val(),
            zipcode: zipcode.val(),
            host: host.val(),
        };

        console.log(posts.address, posts.town);
        $.ajax({
            type: 'POST',
            url: '/hostprofile',
            data: posts,
            success: function(data) {
                //do something with the data via front-end framework
                console.log("not inside");
                location.reload();
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

    $('.textArea').on('click', function() {
        var post = $(this).text().replace();
        $.ajax({
            type: 'DELETE',
            url: '/hostprofile/' + item,
            data: posts,
            success: function(data) {
                //do something with the data via front-end framework
                console.log("deleted");
                location.reload();
            },
        });

        //  val('').end();
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