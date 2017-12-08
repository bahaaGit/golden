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
            console.log('success');
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
            console.log(data)
            window.location.href = '/hostprofile';
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
    var phone = $('#addNumber').val();

    var newPost = {
        address: addr,
        town: town,
        zipcode: zipcode,
        host: host,
        phone: phone
    }

    $.ajax({
        type: 'POST',
        url: '/addPost',
        data: newPost,
        success: function(data) {
            console.log('success');
            window.location.href = '/hostprofile';
        },
        error: function(err) {
            console.log(err);
        }
    })
}

function deletePost(obj) {
    var id = obj;

    $.ajax({
        type: 'DELETE',
        url: '/deletePost',
        data: {
            id: id,
        },
        success: function() {
            location.reload()
        },
        error: function(err) {
            console.log(err)
        }
    })
}