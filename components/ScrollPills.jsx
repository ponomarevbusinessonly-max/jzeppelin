'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

// Each pill flies across the viewport at a specific scroll range.
// ss = scrollStart, se = scrollEnd (fraction of total page, 0–1)
// dir: 1 = left→right, -1 = right→left
// vy: vertical position as fraction of viewport height
const PILLS = [
  { src: '/visualelements/capsule.png',   size: 88, dir:  1, vy: 0.22, ss: 0.08, se: 0.30 },
  { src: '/visualelements/pill.png',      size: 76, dir: -1, vy: 0.62, ss: 0.22, se: 0.44 },
  { src: '/visualelements/smilepill.png', size: 84, dir:  1, vy: 0.74, ss: 0.36, se: 0.58 },
  { src: '/visualelements/starpill.png',  size: 72, dir: -1, vy: 0.38, ss: 0.50, se: 0.72 },
  { src: '/visualelements/alienpill.png', size: 80, dir:  1, vy: 0.52, ss: 0.64, se: 0.86 },
];

function FlyingPill({ cfg, scrollYProgress, vw, vh }) {
  const pad = cfg.size + 60;
  const startX = cfg.dir > 0 ? -pad : vw + pad;
  const endX   = cfg.dir > 0 ? vw + pad : -pad;
  const topPx  = cfg.vy * vh - cfg.size / 2;

  const fadeEdge = 0.04; // fraction of scroll range used for fade in/out

  const x      = useTransform(scrollYProgress, [cfg.ss, cfg.se], [startX, endX]);
  const rotate = useTransform(scrollYProgress, [cfg.ss, cfg.se], [0, cfg.dir * 380]);
  const opacity = useTransform(
    scrollYProgress,
    [cfg.ss, cfg.ss + fadeEdge, cfg.se - fadeEdge, cfg.se],
    [0, 0.88, 0.88, 0]
  );

  return (
    <motion.div
      className="fixed left-0 pointer-events-none z-20"
      style={{ x, rotate, top: `${topPx}px`, opacity }}
    >
      <Image
        src={cfg.src}
        alt=""
        width={cfg.size}
        height={cfg.size}
        style={{ mixBlendMode: 'multiply' }}
      />
    </motion.div>
  );
}

export default function ScrollPills() {
  const [dims, setDims] = useState({ vw: 1440, vh: 900 });
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const update = () => setDims({ vw: window.innerWidth, vh: window.innerHeight });
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <>
      {PILLS.map((cfg, i) => (
        <FlyingPill
          key={i}
          cfg={cfg}
          scrollYProgress={scrollYProgress}
          vw={dims.vw}
          vh={dims.vh}
        />
      ))}
    </>
  );
}
