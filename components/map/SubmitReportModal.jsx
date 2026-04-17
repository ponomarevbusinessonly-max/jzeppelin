'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';
import { base44 } from '@/api/base44Client';

const SUBSTANCES = ['GHB', 'Ketamine', 'MDMA', 'Cocaine', 'Amphetamine', 'Flunitrazepam', 'Unknown'];
const TESTS = ['DRINK CHECK TEST', 'MULTI-DRUG TEST', 'THC PARENT TEST'];

const CITY_PRESETS = [
  { label: 'Berlin', city: 'Berlin', country: 'DE', lat: 52.52, lng: 13.405 },
  { label: 'Hamburg', city: 'Hamburg', country: 'DE', lat: 53.55, lng: 9.993 },
  { label: 'Munich', city: 'Munich', country: 'DE', lat: 48.137, lng: 11.576 },
  { label: 'Cologne', city: 'Cologne', country: 'DE', lat: 50.938, lng: 6.96 },
  { label: 'Frankfurt', city: 'Frankfurt', country: 'DE', lat: 50.11, lng: 8.682 },
  { label: 'Amsterdam', city: 'Amsterdam', country: 'NL', lat: 52.37, lng: 4.9 },
  { label: 'Vienna', city: 'Vienna', country: 'AT', lat: 48.21, lng: 16.37 },
  { label: 'Zurich', city: 'Zurich', country: 'CH', lat: 47.38, lng: 8.54 },
  { label: 'Paris', city: 'Paris', country: 'FR', lat: 48.85, lng: 2.35 },
  { label: 'Brussels', city: 'Brussels', country: 'BE', lat: 50.85, lng: 4.35 },
];

export default function SubmitReportModal({ onClose, onSubmitted }) {
  const [form, setForm] = useState({
    venue_name: '',
    city: '',
    country: 'DE',
    lat: null,
    lng: null,
    substance_detected: '',
    test_used: '',
    description: '',
    anonymous: true,
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const selectCity = (preset) => {
    setForm(f => ({ ...f, city: preset.city, country: preset.country, lat: preset.lat, lng: preset.lng }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.lat || !form.lng) { setError('Please select a city.'); return; }
    setSubmitting(true);
    try {
      await base44.entities.IncidentReport.create(form);
      onSubmitted();
    } catch {
      setError('Submission failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-foreground/30 backdrop-blur-sm">
      <div className="bg-background border border-border w-full max-w-lg font-body max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-heading text-3xl tracking-tight">Submit a Report</h2>
          <button onClick={onClose} className="p-1 hover:opacity-60 transition-opacity">
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {error && <p className="text-sm text-red-500">{error}</p>}

          <div>
            <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Venue / Location name *</label>
            <input
              required
              value={form.venue_name}
              onChange={e => setForm(f => ({ ...f, venue_name: e.target.value }))}
              placeholder="e.g. Berghain, Bar XYZ"
              className="w-full px-4 py-3 border border-border bg-transparent text-sm focus:outline-none focus:border-foreground transition-colors"
            />
          </div>

          <div>
            <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">City *</label>
            <div className="flex flex-wrap gap-2 mb-2">
              {CITY_PRESETS.map(p => (
                <button
                  key={p.label}
                  type="button"
                  onClick={() => selectCity(p)}
                  className={`px-3 py-1 text-xs border transition-colors ${form.city === p.city ? 'bg-foreground text-background border-foreground' : 'border-border hover:border-foreground'}`}
                >
                  {p.label}
                </button>
              ))}
            </div>
            {form.city && (
              <p className="text-xs text-muted-foreground">Selected: {form.city}</p>
            )}
          </div>

          <div>
            <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Substance detected *</label>
            <div className="flex flex-wrap gap-2">
              {SUBSTANCES.map(s => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setForm(f => ({ ...f, substance_detected: s }))}
                  className={`px-3 py-1 text-xs border transition-colors ${form.substance_detected === s ? 'bg-foreground text-background border-foreground' : 'border-border hover:border-foreground'}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Test used</label>
            <div className="flex flex-col gap-2">
              {TESTS.map(t => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setForm(f => ({ ...f, test_used: t }))}
                  className={`px-3 py-2 text-xs border text-left transition-colors ${form.test_used === t ? 'bg-foreground text-background border-foreground' : 'border-border hover:border-foreground'}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Details (optional)</label>
            <textarea
              value={form.description}
              onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
              placeholder="Any additional context..."
              rows={3}
              className="w-full px-4 py-3 border border-border bg-transparent text-sm focus:outline-none focus:border-foreground transition-colors resize-none"
            />
          </div>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={form.anonymous}
              onChange={e => setForm(f => ({ ...f, anonymous: e.target.checked }))}
              className="w-4 h-4"
            />
            <span className="text-sm text-muted-foreground">Submit anonymously</span>
          </label>

          <button
            type="submit"
            disabled={submitting || !form.substance_detected || !form.city}
            className="w-full py-4 bg-foreground text-background font-heading text-xl tracking-wide hover:bg-foreground/90 transition-colors disabled:opacity-40"
          >
            {submitting ? 'Submitting…' : 'Submit Report'}
          </button>
        </form>
      </div>
    </div>
  );
}
