'use client';

import { Container, Flex } from '@mantine/core';
import { Dispatch, SetStateAction } from 'react';
import { NodeCard, NodeCardData } from '../NodeCard/NodeCard';

interface NodeGridProps {
  level: number;
  data: NodeCardData[];
  setCurrent: Dispatch<SetStateAction<number>>;
}

export default function NodeGrid({ level, data, setCurrent }: NodeGridProps) {
  const cards = data.map((card) => (
    <div key={card.nodeIdx}>
      <NodeCard setState={setCurrent} data={card} level={level}></NodeCard>
    </div>
  ));

  return (
    <Container fluid size="md">
      <Flex
        mih={50}
        gap="xl"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
      >
        {/* <SimpleGrid type="container" cols={{ base: 1, '600px': 2, '850px': 3, '1000px': 4 }} spacing="md"> */}
        {cards}
        {/* </SimpleGrid> */}
      </Flex>
    </Container>
  );
}
