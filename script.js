let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 17,
  });
}

window.initMap = initMap;

const watchID = navigator.geolocation.watchPosition( (position) => {
    map.setCenter({lat: position.coords.latitude, lng: position.coords.longitude});

    const d = new Date()
    let date = d.toString();
    let para1 = document.createElement("p");
    para1.innerText = position.coords.latitude + " " +position.coords.longitude + " " + date;
    document.querySelector("#coordsRecord").prepend(para1);

    const cityCircle = new google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map,
        center: map.center,
        radius: 10,
    });
})


// const watchID = navigator.geolocation.watchPosition((position) => {
//               map = new google.maps.Map(document.getElementById("map"), {
//                 center: { lat: position.coords.latitude, lng: position.coords.longitude },
//                 zoom: 17,
//               });
//               const d = new Date()
//               let date = d.toString();
//               let para1 = document.createElement("p");
//               para1.innerText = position.coords.latitude + " " +position.coords.longitude + " " + date;
//               document.querySelector("#coordsRecord").prepend(para1);
              
//               const cityCircle = new google.maps.Circle({
//                   strokeColor: "#FF0000",
//                   strokeOpacity: 0.8,
//                   strokeWeight: 2,
//                   fillColor: "#FF0000",
//                   fillOpacity: 0.35,
//                   map,
//                   center: map.center,
//                   radius: 10,
//                 });

//               mapsList.push(cityCircle)

//               mapsList.forEach( elem => {
//                   const circle = elem;
//               })
                

//               // console.log(position.coords.latitude + " " +position.coords.longitude + " " + date);
//           });