'use client';

import { useState } from 'react';
import NodeGrid from '@/components/NodeGrid/NodeGrid';
import { NODES } from './data';
import ExperienceProgressBar from '@/components/ExperienceProgressBar/ExperienceProgressBar';

export default function HomePage() {
  const [currentNodeIdx, setCurrentNodeIdx] = useState(999);
  const [currentLevel, setCurrentLevel] = useState(0);
  const cards = NODES[currentNodeIdx].nextNodes.map((idx) => NODES[idx]);
  const currentData = NODES[currentNodeIdx];

  return (
    <>
      <ExperienceProgressBar
        data={currentData}
        level={currentLevel}
        setLevel={setCurrentLevel}
      >
      </ExperienceProgressBar>
      <NodeGrid data={cards} setCurrent={setCurrentNodeIdx} level={currentLevel}>
      </NodeGrid>
    </>
  );
}
