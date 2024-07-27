'use client';

import { Center, Container, Flex, Title } from '@mantine/core';
import { Dispatch, SetStateAction } from 'react';
// import { NodeCard, NodeCardData } from '../NodeCard/NodeCard';
import { NodeCardv2, NodeCardv2Data } from '../NodeCardv2/NodeCardv2';

interface NodeGridProps {
  level: number;
  data: NodeCardv2Data[];
  setCurrent: Dispatch<SetStateAction<number>>;
}

export default function NodeGrid({ level, data, setCurrent }: NodeGridProps) {
  const cards = data.map((card) => (
    <div key={card.nodeIdx}>
      <NodeCardv2 setState={setCurrent} data={card} level={level}></NodeCardv2>
    </div>
  ));

  return (
    <Container fluid size="md">
      <Center mb={30}>
        {
          cards.length === 0 ?
            <Title order={1}>Refrech page to start over</Title>
            :
            <Title order={1}>Choose your career development path</Title>
        }
      </Center>
      <Flex
        mih={50}
        gap="xl"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
      >
        {cards}
      </Flex>
    </Container>
  );
}
