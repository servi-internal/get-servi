"use client";

import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const LOCATIONS = [
  { name: "New York", lat: 40.7128, lng: -74.006 },
  { name: "Texas", lat: 30.2672, lng: -97.7431 },
  { name: "Florida", lat: 27.9944, lng: -81.7603 },
  { name: "Amsterdam", lat: 52.3676, lng: 4.9041 },
  { name: "Saudi Arabia", lat: 24.7136, lng: 46.6753 },
];

function createPulseIcon() {
  return L.divIcon({
    className: "",
    html: `
      <div style="position:relative;width:40px;height:40px;">
        <div style="position:absolute;inset:0;border-radius:50%;background:rgba(255,102,0,0.15);animation:servi-pulse 2s ease-out infinite;"></div>
        <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:14px;height:14px;border-radius:50%;background:#FF6600;border:3px solid white;box-shadow:0 2px 8px rgba(255,102,0,0.5);"></div>
      </div>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
  });
}

const pulseIcon = createPulseIcon();

export function LeafletMap() {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
      <style>{`
        @keyframes servi-pulse {
          0% { transform: scale(0.5); opacity: 1; }
          100% { transform: scale(2); opacity: 0; }
        }
        .servi-tooltip {
          background: #1F2937 !important;
          color: white !important;
          border: none !important;
          border-radius: 8px !important;
          padding: 6px 12px !important;
          font-size: 12px !important;
          font-weight: 700 !important;
          letter-spacing: 0.025em !important;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;
          white-space: nowrap !important;
        }
        .servi-tooltip::before {
          border-top-color: #1F2937 !important;
        }
        .leaflet-tooltip-top.servi-tooltip::before {
          border-top-color: #1F2937 !important;
        }
        .servi-tooltip .servi-dot {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #FF6600;
          margin-right: 6px;
          vertical-align: middle;
        }
      `}</style>
      <MapContainer
        center={[40, -20]}
        zoom={2.5}
        minZoom={2}
        maxZoom={6}
        scrollWheelZoom={false}
        style={{ height: "400px", width: "100%" }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {LOCATIONS.map((loc) => (
          <Marker
            key={loc.name}
            position={[loc.lat, loc.lng]}
            icon={pulseIcon}
          >
            <Tooltip
              permanent
              direction="top"
              offset={[0, -20]}
              className="servi-tooltip"
            >
              <span className="servi-dot" />
              {loc.name}
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
