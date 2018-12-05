import 'whatwg-fetch'

const getAntennas = area => {
    const url = new URL("https://infoantenas.herokuapp.com/antennas");
    const params = {
        lat1: area.SWPoint.lat,
        lng1: area.SWPoint.lng,
        lat2: area.NEPoint.lat,
        lng2: area.NEPoint.lng,
    };

    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    return fetch(url)
        .then(response => response.json())
        .then(mapToMarkers);
};

const mapToMarkers = response => {
    if (typeof response === 'undefined' || typeof response.features === 'undefined') {
        return [];
    }

    return response.features.reduce(groupByCoordinates, {});
};

const groupByCoordinates = (acc, cur) => {
    const key = JSON.stringify(cur.geometry.coordinates);

    if (acc[key]) {
        acc[key].antennas = acc[key].antennas.concat(cur);
    } else {
        acc[key] = getMarker(cur);
    }

    return acc;
};

const getMarker = x => (
    {
        position: {
            lat: x.geometry.coordinates[1],
            lng: x.geometry.coordinates[0]
        },
        antennas: [x]
    });

export {getAntennas};