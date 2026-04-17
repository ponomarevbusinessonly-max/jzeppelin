'use client';

import React from 'react';
import { X, Calendar, FlaskConical } from 'lucide-react';

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

export default function ReportPanel({ report, onClose }) {
  if (!report) return null;

  const color = substanceColors[report.substance_detected] || '#64748b';

  return (
    <div className="absolute top-4 right-4 z-[1000] w-72 bg-background border border-border shadow-lg font-body">
      <div className="flex items-start justify-between p-4 border-b border-border">
        <div>
          <h3 className="font-heading text-2xl tracking-tight leading-tight">{report.venue_name}</h3>
          <p className="text-sm text-muted-foreground mt-0.5">{report.city}</p>
        </div>
        <button onClick={onClose} className="p-1 hover:opacity-60 transition-opacity ml-2 flex-shrink-0">
          <X size={16} />
        </button>
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <FlaskConical size={14} className="text-muted-foreground flex-shrink-0" />
          <span
            className="inline-block px-2 py-0.5 text-white text-xs font-medium rounded-sm"
            style={{ background: color }}
          >
            {report.substance_detected}
          </span>
        </div>

        {report.test_used && (
          <div className="flex items-start gap-2">
            <span className="text-xs text-muted-foreground">Test:</span>
            <span className="text-xs">{report.test_used}</span>
          </div>
        )}

        {report.description && (
          <p className="text-sm text-muted-foreground leading-relaxed border-t border-border pt-3">
            &ldquo;{report.description}&rdquo;
          </p>
        )}

        <div className="flex items-center gap-2 pt-1 border-t border-border">
          <Calendar size={12} className="text-muted-foreground" />
          <span className="text-xs text-muted-foreground">{timeAgo(report.created_date)}</span>
          {report.anonymous && (
            <span className="text-xs text-muted-foreground ml-auto italic">Anonymous</span>
          )}
        </div>
      </div>
    </div>
  );
}
