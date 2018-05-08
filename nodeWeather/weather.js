const DarkSkyApi = require('dark-sky-api');
DarkSkyApi.apiKey = '13dbfe094ea15152d2817ee40bcb8d2e';
DarkSkyApi.proxy = '//base-url-to-proxy/service';
DarkSkyApi.proxy = true;
DarkSkyApi.units = 'si'; // default 'us'
DarkSkyApi.language = 'de'; // default 'en'
DarkSkyApi.postProcessor = (item) => { // default null;
    item.day = item.dateTime.format('ddd');
    return item;
}
DarkSkyApi.loadCurrent()
  .then(result => console.log(result));