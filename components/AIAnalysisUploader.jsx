'use client';

import React, { useState } from 'react';
import { Upload, Lock } from 'lucide-react';
import { useDict } from '@/lib/i18n/LocaleProvider';

export default function AIAnalysisUploader() {
  const dict = useDict();
  const u = dict.aiAnalysis.uploader;
  const [dragOver, setDragOver] = useState(false);

  return (
    <div
      className={`relative mt-14 w-full max-w-md border-2 border-dashed transition-colors ${
        dragOver ? 'border-foreground/40 bg-secondary' : 'border-border'
      } p-14 flex flex-col items-center gap-4 cursor-not-allowed select-none`}
      onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
      onDragLeave={() => setDragOver(false)}
      onDrop={(e) => { e.preventDefault(); setDragOver(false); }}
    >
      {/* Locked overlay */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] flex items-center justify-center z-10">
        <div className="flex flex-col items-center gap-2">
          <Lock size={22} className="text-muted-foreground" />
          <span className="font-body text-xs text-muted-foreground">{u.lockedLabel}</span>
        </div>
      </div>

      <Upload size={32} className="text-muted-foreground/30" />
      <p className="font-body text-sm text-muted-foreground/40">
        {u.drop}
      </p>
      <span className="font-body text-xs text-muted-foreground/30">{u.types}</span>
    </div>
  );
}
