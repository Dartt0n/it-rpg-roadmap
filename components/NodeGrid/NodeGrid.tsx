'use client';

import { Container, SimpleGrid } from '@mantine/core';
import { Dispatch, SetStateAction } from 'react';
import { NodeCard, NodeCardData } from '../NodeCard/NodeCard';

interface NodeGridProps {
  data: NodeCardData[]
  setCurrent: Dispatch<SetStateAction<number>>
}

export default function NodeGrid({ data, setCurrent }: NodeGridProps) {
  const cards = data.map(card => (
    <div key={card.nodeIdx}>
      <NodeCard setState={setCurrent} data={card}>
      </NodeCard>
    </div>
  ));

  return (
    <Container py="xl">
      <SimpleGrid cols={3} spacing="lg">
        {cards}
      </SimpleGrid>
    </Container>
  );
}
