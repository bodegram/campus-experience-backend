import React, { useEffect, useRef } from 'react'
import DashboardLayout from './layouts/DashboardLayout'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png'

// You may need to import Leaflet's default icon CSS as well
import 'leaflet/dist/leaflet.css';

// Set default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl,
    iconUrl,
    shadowUrl,
});

export default function Map() {

    const popularPlaces = [
        { name: 'FUNAAB Main Campus', position: [7.1405, 3.3238] },
        { name: 'FUNAAB Library', position: [7.1390, 3.3245] },
        { name: 'Students’ Union Building', position: [7.1420, 3.3250] },
        { name: 'Conference Center', position: [7.1430, 3.3260] },
        { name: 'Veterinary Teaching Hospital', position: [7.1440, 3.3200] },
        { name: 'Agricultural Economics Department', position: [7.1410, 3.3225] },
        { name: 'Animal Science Department', position: [7.1415, 3.3210] },
        { name: 'Food Science and Technology Department', position: [7.1408, 3.3220] },
        { name: 'Crop Science Department', position: [7.1402, 3.3255] },
        { name: 'College of Environmental Resources Management', position: [7.1395, 3.3232] },
        { name: 'FUNAAB Sports Complex', position: [7.1425, 3.3290] },
        { name: 'Microbiology Laboratory', position: [7.1435, 3.3248] },
        { name: 'Chemistry Laboratory', position: [7.1445, 3.3253] },
        { name: 'Physics Laboratory', position: [7.1450, 3.3265] },
        { name: 'Library and Information Science Department', position: [7.1385, 3.3240] },
        { name: 'Agricultural Engineering Department', position: [7.1375, 3.3205] },
        { name: 'Environmental Management Department', position: [7.1392, 3.3275] },
        { name: 'FUNAAB ICT Center', position: [7.1388, 3.3295] },
        { name: 'FUNAAB Market', position: [7.1428, 3.3229] },
        { name: 'Student Hostel A', position: [7.1400, 3.3300] },
        { name: 'Student Hostel B', position: [7.1403, 3.3305] },
        { name: 'Staff Quarters', position: [7.1412, 3.3215] },
        { name: 'FUNAAB Main Gate', position: [7.1398, 3.3230] },
        { name: 'Cafeteria', position: [7.1432, 3.3280] },
        { name: 'Health Center', position: [7.1380, 3.3295] },
        { name: 'Art Gallery', position: [7.1442, 3.3223] },
        { name: 'Research Farm', position: [7.1455, 3.3208] },
        { name: 'Auditorium', position: [7.1407, 3.3257] },
        { name: 'Botanical Garden', position: [7.1422, 3.3200] },
        { name: 'Central Post Office', position: [7.1419, 3.3275] },
        { name: 'Security Office', position: [7.1393, 3.3255] },
        { name: 'Conference Hall', position: [7.1453, 3.3250] },
        { name: 'Parking Lot', position: [7.1438, 3.3288] },
        { name: 'Football Field', position: [7.1409, 3.3310] },
        { name: 'Basketball Court', position: [7.1401, 3.3301] },
    ];
    const position = popularPlaces[0].position;


    return (
        <DashboardLayout>
            <div className='h-screen w-full relative'>
                {/* <iframe
                    frameborder="0" className='border-0 h-screen w-full'

                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.056319041468!2d4.2340034!3d8.1428295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10370ddf3dc40c29%3A0x4fcf5756d7ef3776!2sHOME%20OF%20CHAMPIONS%20ASSEMBLY!5e0!3m2!1sen!2sng!4v1568841054170!5m2!1sen!2sng"
                    allowfullscreen>
                </iframe> */}
                <MapContainer center={position} zoom={13} style={{ height: '100vh', width: '100%' }} whenCreated={mapInstance => { mapRef.current = mapInstance; }} // Capture the map instance
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {popularPlaces.map((place, index) => (
                        <Marker key={index} position={place.position}>
                            {/* You can add an empty Popup to keep the marker */}
                            <Popup>
                                {place.name}
                            </Popup>
                        </Marker>
                    ))}


                </MapContainer>

            </div>
        </DashboardLayout>
    )
}
