
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./map.module.css";
import { ReactNode } from "react";
import { LatLngExpression } from "leaflet";

interface mapProps {
    position: LatLngExpression
    center: LatLngExpression | undefined
    children: ReactNode
}

export default function Map({ position, center, children }: mapProps) {

    return (
        <>
            <MapContainer
                className={styles.map}
                center={center}
                zoom={14}
                scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>Set Coffee</Popup>
                </Marker>
            </MapContainer>
            <div className={styles.details}>{children}</div>
        </>
    );
}
