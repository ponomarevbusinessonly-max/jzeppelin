'use client';

import React, { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import ReportPanel from '@/components/map/ReportPanel';
import SubmitReportModal from '@/components/map/SubmitReportModal';

const ease = [0.22, 1, 0.36, 1];

const IncidentMapView = dynamic(
  () => import('@/components/map/IncidentMapView'),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center bg-muted">
        <div className="w-6 h-6 border-2 border-foreground/20 border-t-foreground rounded-full animate-spin" />
      </div>
    ),
  }
);

export default function IncidentMap() {
  const [selectedReport, setSelectedReport] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [mapKey, setMapKey] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitted = useCallback(() => {
    setShowModal(false);
    setSubmitted(true);
    setMapKey(k => k + 1);
    setTimeout(() => setSubmitted(false), 4000);
  }, []);

  return (
    <section id="map" className="relative py-28 md:py-36 border-t border-border">
      <div className="w-full px-6 md:px-16 lg:px-24">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease }}
          >
            <h2 className="font-heading text-5xl md:text-7xl tracking-tight leading-[0.95]">
              Incident Map
            </h2>
            <motion.p
              className="font-body text-muted-foreground text-lg font-light mt-4 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease, delay: 0.12 }}
            >
              User-submitted reports of substance detection across Europe. Click a pin to see details.
            </motion.p>
          </motion.div>

          <motion.button
            onClick={() => setShowModal(true)}
            className="flex-shrink-0 px-8 py-4 bg-foreground text-background font-heading text-xl tracking-wide hover:bg-foreground/90 transition-colors self-start sm:self-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease, delay: 0.2 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
          >
            + Report an incident
          </motion.button>
        </div>

        {/* Submission success banner */}
        <AnimatePresence>
          {submitted && (
            <motion.div
              className="mb-6 px-5 py-3 border border-border bg-secondary font-body text-sm"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease }}
            >
              Report submitted. Thank you for keeping the community informed.
            </motion.div>
          )}
        </AnimatePresence>

        {/* Map */}
        <motion.div
          className="relative w-full h-[520px] md:h-[620px] border border-border overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.75, ease, delay: 0.15 }}
        >
          <IncidentMapView key={mapKey} onReportClick={setSelectedReport} />
          <ReportPanel report={selectedReport} onClose={() => setSelectedReport(null)} />
        </motion.div>

        <motion.p
          className="mt-4 text-xs text-muted-foreground/50 font-body"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          All reports are anonymous by default. Data is community-submitted and unverified.
        </motion.p>
      </div>

      {showModal && (
        <SubmitReportModal
          onClose={() => setShowModal(false)}
          onSubmitted={handleSubmitted}
        />
      )}
    </section>
  );
}
