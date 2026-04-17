'use client';

import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from 'react-leaflet';
import { base44 } from '@/api/base44Client';
import 'leaflet/dist/leaflet.css';

const substanceColors = {
  GHB: '#e11d48',
  Ketamine: '#7c3aed',
  MDMA: '#ea580c',
  Cocaine: '#0891b2',
  Amphetamine: '#d97706',
  Flunitrazepam: '#be185d',
  Unknown: '#64748b',
};

function timeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return 'Today';
  if (days === 1) return 'Yesterday';
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  return `${months}mo ago`;
}

export default function IncidentMapView({ onReportClick }) {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    base44.entities.IncidentReport.list('-created_date', 100)
      .then(setReports)
      .catch(() => setReports([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="relative w-full h-full">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/60 z-[1000]">
          <div className="w-6 h-6 border-2 border-foreground/20 border-t-foreground rounded-full animate-spin" />
        </div>
      )}
      <MapContainer
        center={[51.0, 10.4]}
        zoom={6}
        style={{ width: '100%', height: '100%' }}
        scrollWheelZoom={false}
        zoomControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="grayscale"
        />
        {reports.map((report) => (
          <CircleMarker
            key={report.id}
            center={[report.lat, report.lng]}
            radius={10}
            pathOptions={{
              color: substanceColors[report.substance_detected] || '#64748b',
              fillColor: substanceColors[report.substance_detected] || '#64748b',
              fillOpacity: 0.85,
              weight: 2,
            }}
            eventHandlers={{ click: () => onReportClick(report) }}
          >
            <Popup>
              <div className="font-body text-xs min-w-[160px]">
                <p className="font-semibold text-sm">{report.venue_name}</p>
                <p className="text-muted-foreground">{report.city}</p>
                <p className="mt-1">
                  <span
                    className="inline-block px-1.5 py-0.5 text-white rounded text-[10px] font-medium"
                    style={{ background: substanceColors[report.substance_detected] }}
                  >
                    {report.substance_detected}
                  </span>
                </p>
                <p className="text-muted-foreground mt-1">{timeAgo(report.created_date)}</p>
              </div>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 z-[1000] bg-background/90 border border-border p-3 text-[10px] font-body space-y-1.5 backdrop-blur-sm">
        {Object.entries(substanceColors).map(([s, c]) => (
          <div key={s} className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full inline-block flex-shrink-0" style={{ background: c }} />
            <span className="text-foreground/70">{s}</span>
          </div>
        ))}
      </div>

      {reports.length === 0 && !loading && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[500]">
          <p className="font-body text-sm text-muted-foreground bg-background/80 px-4 py-2 border border-border">
            No reports yet. Be the first.
          </p>
        </div>
      )}
    </div>
  );
}
