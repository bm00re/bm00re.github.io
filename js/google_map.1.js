function initMap() {
  // Styles a map in night mode.
  var map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 32.8586054,
      lng: -96.4548025
    },
    zoom: 9,
    styles: [
      {
        featureType: "administrative.land_parcel",
        elementType: "all",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "landscape.man_made",
        elementType: "all",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "labels",
        stylers: [
          {
            visibility: "simplified"
          },
          {
            lightness: 20
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            hue: "#F4BBCF"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            saturation: "-50"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            lightness: "40"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "labels",
        stylers: [
          {
            visibility: "simplified"
          }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
          {
            hue: "#F4BBCF"
          }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "labels",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [
          {
            visibility: "simplified"
          }
        ]
      },
      {
        featureType: "road.local",
        elementType: "labels",
        stylers: [
          {
            visibility: "simplified"
          }
        ]
      },
      {
        featureType: "transit",
        elementType: "all",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "all",
        stylers: [
          {
            hue: "#a1cdfc"
          },
          {
            saturation: 30
          },
          {
            lightness: 49
          }
        ]
      }
    ]
  });

  var whiteSparrow = {
    lat: 32.908772,
    lng: -96.2317715
  };

  var marker = new google.maps.Marker({
    position: whiteSparrow,
    map: map,
    title: "The White Sparrow Barn"
  });
}
