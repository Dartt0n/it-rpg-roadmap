'use client';

import { useState } from 'react';
import NodeGrid from '@/components/NodeGrid/NodeGrid';
import { NODES } from './data';

export default function HomePage() {
  const [currentNodeIdx, setCurrentNodeIdx] = useState(999);
  const cards = NODES[currentNodeIdx].nextNodes.map(idx => NODES[idx])

  return (
    <>
      <NodeGrid data={cards} setCurrent={setCurrentNodeIdx}>
      </NodeGrid>
    </>
  );
}
