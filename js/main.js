// Подключение Яндекс Карт

ymaps.ready(init);
var myMap,
    myPlacemark;

function init(){
    myMap = new ymaps.Map("map", {
        center: [55.7261,37.7560],
        zoom: 16,
        controls: []
    });

    myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [55.7261,37.7560]
        },
        // Свойства.
        properties: {
            // Контент метки.
            iconContent: '',
            hintContent: 'Рязанский проспект, д. 8А, офис 506 '
        }
    }, {
        preset: 'islands#icon',
        draggable: true,
        iconColor: '#ec312e'
    });
    myMap.behaviors.disable('scrollZoom');

    myMap.geoObjects
        .add(myGeoObject)

}

// -------------------