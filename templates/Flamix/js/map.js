var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('maps'), {
          center: {lat: 41.33589, lng: 19.81687 },
          zoom: 16
        });

        addMarker({lat: 41.33589, lng: 19.81687  });

        function addMarker(coords){
        	var marker = new google.maps.Marker({
        		position:coords,
        		map:map
        	})        	
        }
      }