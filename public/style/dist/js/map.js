let map;
let marker;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.193340, lng: 44.504414},
        zoom: 15
    });
    marker = new google.maps.Marker({
        position: {lat: 40.193340, lng: 44.504414},
        map: map,
        title: 'Barcamp'
    });
}
