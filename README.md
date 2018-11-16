## Google Maps : <a href="https://developers.google.com/maps/documentation/javascript/tutorial?hl=fr">DOC</a>

#### 1- Get API key from Google Maps
#### 2- Add script with API Key from Google Maps
#### 3- Use Google Maps in you JavaScript file

#### 4- Create index.html

```html
<div class="container">
    <div id="maps">
    </div>
</div>
```

#### 5- Init map

```javascript
var map = new google.maps.Map(
            document.getElementById('maps'),
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
```

#### 5- Create markers map

------------------------------- EDIT HERE -------------------------------

```javascript


```
#### 6- Add markers to map
#### 7- Add style to you map with <a href="https://snazzymaps.com/">Snazzy Maps</a>
#### 8- Others stuffs

