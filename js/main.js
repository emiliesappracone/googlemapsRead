var googleMaps = {
    where : document.getElementById('maps'),
    zoom : 10,
    /**
     * Init Google Maps map
     */
    init : function(){
        var datas = this.getDatas();
        var first = datas[0].latLng;
        // init google map
        var map = new google.maps.Map(
            this.where,
            {
                zoom: this.zoom,
                center: first,
                fullscreenControl: false,
                mapTypeControl: true,
                mapTypeControlOptions: {
                    style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                    position: google.maps.ControlPosition.TOP_RIGHT
                },
                styles: [
                    {
                     //...
                    }
                ]
            }
        );
        this.initMarkers(datas);
    },
    /**
     * Create marker or markers for the map
     * @param datas
     */
    initMarkers : function(datas){
        // check if is one or many objects return
        if(Object.keys(datas).length <= 1){
            // create one marker
        }else{
            // loop on each object to create markers
        }
    },
    /**
     * Get datas from ajax for instance
     */
    getRawDatas : function(){
        var rawDatas = { obj1 : {'lat':'54,565675664', 'lng' : '4,56786454' }, obj2 : {'lat':'54,565675664', 'lng' : '4,56786454' }};
        this.getDatas(rawDatas);
    },
    /**
     * Clean datas as you want
     * @param rawDatas
     * @returns {*}
     */
    getDatas : function (rawDatas) {
        var processedDatas;
        // loop on rawDatas to treats them
        for(var subObject in rawDatas){
            processedDatas['lat'] = rawDatas[subObject].lat;
            processedDatas['lng'] = rawDatas[subObject].lng;
            processedDatas['latLng'] = [rawDatas[subObject].lat, rawDatas[subObject].lng];
        }
        return processedDatas;
    }

};
googleMaps.init();


//$('#maps').html();