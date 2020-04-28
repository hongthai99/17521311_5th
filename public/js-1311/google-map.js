
var google;

function init() {
    var myLatlng = new google.maps.LatLng(10.8699184,106.8016194);
    var mapOptions = {
        // muốn zoom tới nóc 
        zoom: 15,
        // heehee chọn trung tâm nè :)) from @bachh.thai with love
        center: myLatlng,
        
    };
    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
    
    //var addresses = ['Viet Nam National University HCMC'];



    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,

    })
    //for (var x = 0; x < addresses.length; x++) {
    //    $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address='+addresses[x]+'&sensor=false', null, function (data) {
    //        new google.maps.Marker({
    //            position: myLatlng,
    //            map: map, // ơ ơ cái này ...
    //            icon: 'images/loc.png'
    //        });

    //    });
    //}
    // stay home, stay safe guys :)) 
}
google.maps.event.addDomListener(window, 'load', init);