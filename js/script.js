<<<<<<< HEAD
<< << << < HEAD
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

                        ===
                        ===
                        =
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

                        // $('#loginBtn').on('submit', function() {

                        //     var userID = $('#userID').val();
                        //     var password = $('#password').val();

                        //     /*firebase.auth().signInWithEmailAndPassword(userID, password).catch(function(error) {
                        //     // Handle Errors here.
                        //     var errorCode = error.code;
                        //     var errorMessage = error.message;
                        //     // ...
                        //     });*/
                        //     //validate
                        //     //....
                        //     var todo = {
                        //         userID: userID,
                        //         password: password
                        //     };

                        //     console.log(todo.userID, todo.password);
                        //     $.ajax({
                        //         type: 'POST',
                        //         url: '/login',
                        //         data: todo,
                        //         success: function(data) {
                        //             //do something with the data via front-end framework
                        //             //console.log(data);
                        //             console.log("not inside");
                        //             //location.reload();
                        //         },
                        //         error: function(textStatus, errorThrown) {
                        //             console.log("am inside");
                        //         }
                        //     });

                        //     return false;

                        // });

                        // $('#loginAdd').on('submit', function() {

                        //     var address = $('#addForm #adress');
                        //     var town = $('#addForm #town');
                        //     var zipcode = $('#addForm #zipcode');
                        //     var host = $('#addForm #host');


                        //     //validate
                        //     //....
                        //     var posts = {
                        //         address: address.val(),
                        //         town: town.val(),
                        //         zipcode: zipcode.val(),
                        //         host: host.val(),
                        //     };

                        //     console.log(posts.address, posts.town);
                        //     $.ajax({
                        //         type: 'POST',
                        //         url: '/hostprofile',
                        //         data: posts,
                        //         success: function(data) {
                        //             //do something with the data via front-end framework
                        //             console.log("not inside");
                        //             location.reload();
                        //         },
                        //         error: function(textStatus, errorThrown) {
                        //             console.log("am inside");
                        //         }
                        //     });

                        //     return false;

                        // });

                        // $('.textArea').on('hidden.bs.modal', function(e) {
                        //     $(this).val('').end();
                        // });

                        // $('.textArea').on('click', function() {
                        //     var post = $(this).text().replace();

                        //     $.ajax({
                        //         type: 'DELETE',
                        //         url: '/hostprofile/' + item,
                        //         data: posts,
                        //         success: function(data) {
                        //             //do something with the data via front-end framework
                        //             console.log("deleted");
                        //             location.reload();
                        //         },
                        //     });

                        //     //  val('').end();
                        // });



                        function regUser() {

                            var user = $('#newUser').val();
                            var password = $('#newPass').val();
                            var newAddr = $('#newAddr').val();
                            var newPhone = $('#newPhone').val();
                            var dob = $('#dob').val();


                            var newUser = {
                                userID: user,
                                password: password,
                                address: newAddr,
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
                                    console.log("sucessfull");
                                    window.location.href = '/listings';
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
                                url: '/login',
                                data: {
                                    userID: user,
                                    password: pass,
                                },
                                success: function(data) {
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
                        }
=======
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

// $('#loginBtn').on('submit', function() {

//     var userID = $('#userID').val();
//     var password = $('#password').val();

//     /*firebase.auth().signInWithEmailAndPassword(userID, password).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ...
//     });*/
//     //validate
//     //....
//     var todo = {
//         userID: userID,
//         password: password
//     };

//     console.log(todo.userID, todo.password);
//     $.ajax({
//         type: 'POST',
//         url: '/login',
//         data: todo,
//         success: function(data) {
//             //do something with the data via front-end framework
//             //console.log(data);
//             console.log("not inside");
//             //location.reload();
//         },
//         error: function(textStatus, errorThrown) {
//             console.log("am inside");
//         }
//     });

//     return false;

// });

// $('#loginAdd').on('submit', function() {

//     var address = $('#addForm #adress');
//     var town = $('#addForm #town');
//     var zipcode = $('#addForm #zipcode');
//     var host = $('#addForm #host');


//     //validate
//     //....
//     var posts = {
//         address: address.val(),
//         town: town.val(),
//         zipcode: zipcode.val(),
//         host: host.val(),
//     };

//     console.log(posts.address, posts.town);
//     $.ajax({
//         type: 'POST',
//         url: '/hostprofile',
//         data: posts,
//         success: function(data) {
//             //do something with the data via front-end framework
//             console.log("not inside");
//             location.reload();
//         },
//         error: function(textStatus, errorThrown) {
//             console.log("am inside");
//         }
//     });

//     return false;

// });

// $('.textArea').on('hidden.bs.modal', function(e) {
//     $(this).val('').end();
// });

// $('.textArea').on('click', function() {
//     var post = $(this).text().replace();

//     $.ajax({
//         type: 'DELETE',
//         url: '/hostprofile/' + item,
//         data: posts,
//         success: function(data) {
//             //do something with the data via front-end framework
//             console.log("deleted");
//             location.reload();
//         },
//     });

//     //  val('').end();
// });



function regUser() {

    var user = $('#newUser').val();
    var password = $('#newPass').val();
    var newAddr = $('#newAddr').val();
    var newPhone = $('#newPhone').val();
    var dob = $('#dob').val();


    var newUser = {
        userID: user,
        password: password,
        address: newAddr,
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
            console.log("sucessfull");
            window.location.href = '/listings';
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
            window.location.href = '/listings';
        },
        error: function(err) {
            console.log(err);
        }
    });


}

function getMapUrl(addr, town) {
        var req = addr;
        req += ", ";
        var temp = town.replace("-", "");
        req += temp;
        req = req.replace("  ", " ");
        req = req.replace(/ /g, "+");
        
        var mapURL = "https://maps.googleapis.com/maps/api/staticmap?center=";
        var apiKey = "&key=AIzaSyBCRzpLARuNB2qrxt2YEdzwGtwrEF-P-Ig"; // our API key
        var params = "&zoom=15&size=350x200";
        var markers = "&markers=size:mid%7Ccolor:red%7C";
        markers += req;
        
        params += markers;
        params += apiKey;
        mapURL += req;
        mapURL += params;
        console.log(mapURL);
}

function addPost() {

    var addr = $('#addAddress').val();
    var town = $('#addTown').val() + ', IN' + $('#addZipcode').val();
    var zipcode = $('#addZipcode').val();
    var host = $('#addHost').val();    

}
>>>>>>> 577bd375fcf2592a5c96915618147e43318e791a
