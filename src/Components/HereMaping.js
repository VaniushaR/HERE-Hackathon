const HereMaping = coordsCurrent => {
  const reverseGeocode = (platform, coordsCurrent) => {
    var geocoder = platform.getGeocodingService(),
      reverseGeocodingParameters = {
        prox: coordsCurrent,
        mode: 'retrieveAddresses',
        maxresults: '1',
        jsonattributes: 1
      };

    geocoder.reverseGeocode(reverseGeocodingParameters, onSuccess, onError);
  };

  function onSuccess(result) {
    var locations = result.response.view[0].result;
    addLocationsToMap(locations);
  }

  function onError(error) {
    alert('Ooops!');
  }
  var platform = new window.H.service.Platform({
    app_id: 'LwPotMVE2dspAdIX47cv',
    app_code: 'eEz5QgTCYdq91X6IP_5KuQ',
    useHTTPS: true
  });
  var pixelRatio = window.devicePixelRatio || 1;
  var defaultLayers = platform.createDefaultLayers({
    tileSize: pixelRatio === 1 ? 256 : 512,
    ppi: pixelRatio === 1 ? undefined : 320
  });

  //Step 2: initialize a map - this map is centered over California
  var map = new window.H.Map(
    document.getElementById('map'),
    defaultLayers.normal.map,
    {
      center: { lat: 37.376, lng: -122.034 },
      zoom: 15,
      pixelRatio: pixelRatio
    }
  );

  var ui = window.H.ui.UI.createDefault(map, defaultLayers);
  var bubble;
  function openBubble(position, text) {
    if (!bubble) {
      bubble = new window.H.ui.InfoBubble(position, { content: text });
      ui.addBubble(bubble);
    } else {
      bubble.setPosition(position);
      bubble.setContent(text);
      bubble.open();
    }
  }

  function addMarkersToMap(map) {
    var juanitoMarker = new window.H.map.Marker({
      lat: 19.390469,
      lng: -99.185811
    });
    map.addObject(juanitoMarker);

    var lauritaMarker = new window.H.map.Marker({
      lat: 19.394552,
      lng: -99.183049
    });
    map.addObject(lauritaMarker);

    var luciMarker = new window.H.map.Marker({
      lat: 19.403564,
      lng: -99.170093
    });
    map.addObject(luciMarker);

    var michMarker = new window.H.map.Marker({
      lat: 19.400634,
      lng: -99.179122
    });
    map.addObject(michMarker);
  }
  var behavior = new window.H.mapevents.Behavior(
    new window.H.mapevents.MapEvents(map)
  );

  addMarkersToMap(map);

  //FUNCTION TO MARKER DOM 'SCHOOL'
  function addDomMarker(map) {
    var outerElement = document.createElement('div'),
      innerElement = document.createElement('div');

    outerElement.style.userSelect = 'none';
    outerElement.style.webkitUserSelect = 'none';
    outerElement.style.msUserSelect = 'none';
    outerElement.style.mozUserSelect = 'none';
    outerElement.style.cursor = 'default';

    innerElement.style.color = 'white';
    innerElement.style.backgroundColor = 'orange';
    innerElement.style.border = '2px solid white';
    innerElement.style.font = 'normal 12px verdana';
    innerElement.style.lineHeight = '12px';

    innerElement.style.paddingTop = '2px';
    innerElement.style.paddingLeft = '2px';
    innerElement.style.paddingRight = '2px';
    innerElement.style.width = '50px';
    innerElement.style.height = '20px';

    // add negative margin to inner element
    // to move the anchor to center of the div
    innerElement.style.marginTop = '-10px';
    innerElement.style.marginLeft = '-10px';

    outerElement.appendChild(innerElement);
    // Add text to the DOM element
    innerElement.innerHTML = 'SCHOOL';
    function changeOpacity(evt) {
      evt.target.style.opacity = 0.6;
    }
    function changeOpacityToOne(evt) {
      evt.target.style.opacity = 1;
    }

    //create dom icon and add/remove opacity listeners
    var domIcon = new window.H.map.DomIcon(outerElement, {
      // the function is called every time marker enters the viewport
      onAttach: function(clonedElement, domIcon, domMarker) {
        clonedElement.addEventListener('mouseover', changeOpacity);
        clonedElement.addEventListener('mouseout', changeOpacityToOne);
      },
      // the function is called every time marker leaves the viewport
      onDetach: function(clonedElement, domIcon, domMarker) {
        clonedElement.removeEventListener('mouseover', changeOpacity);
        clonedElement.removeEventListener('mouseout', changeOpacityToOne);
      }
    });

    // Marker for Chicago Bears home
    var bearsMarker = new window.H.map.DomMarker(
      {
        lat: 19.40468,
        lng: -99.164023
      },
      {
        icon: domIcon
      }
    );
    map.addObject(bearsMarker);
  }
  addDomMarker(map);

  function addLocationsToMap(locations) {
    var group = new window.H.map.Group(),
      position,
      marker,
      i;

    // Add a marker for each location found
    for (i = 0; i < locations.length; i += 1) {
      position = {
        lat: locations[i].location.displayPosition.latitude,
        lng: locations[i].location.displayPosition.longitude
      };
      var marker = new window.H.map.Marker(position);
      marker.label = locations[i].location.address.label;
      group.addObject(marker);
      console.log('for of addLoc');
    }

    group.addEventListener(
      'tap',
      function(evt) {
        map.setCenter(evt.target.getPosition());
        openBubble(evt.target.getPosition(), evt.target.label);
      },
      false
    );

    // Add the locations group to the map
    map.addObject(group);
    map.setViewBounds(group.getBounds());
  }
  reverseGeocode(platform, coordsCurrent);
};

export { HereMaping };
