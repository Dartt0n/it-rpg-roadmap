'use client';

import { Card, Text, Group, Button, rgba, rem, Modal, Divider } from '@mantine/core';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import classes from './NodeCard.module.css';
import { prefixToColor } from '../../utils/prefixColor';

export interface NodeCardData {
  nodeIdx: number; // this node index
  type: string; // either "Profession" or "Branch"
  title: string; // e.g. "Backend Developer"
  prefix: string; // e.g. "Senior"
  shortDesc: string; // e.g. "Very experienced developer related ti server-side logic and infrastructure"
  fullDesc: string; // stack, what they do, what are requirements etc
  image: string; // image path, e.g. `nodes/backend.jpg`
  yearsRequired: number; // how many years required, e.g. 4 years
  nextNodes: number[]; // indexes of next nodes
}

interface NodeCardProps {
  level: number,
  data: NodeCardData;
  setState: Dispatch<SetStateAction<number>>;
}

export function NodeCard({ level, data, setState }: NodeCardProps) {
  const color = prefixToColor(data.prefix);
  const enabled = level >= data.yearsRequired;
  const [hovered, setHovered] = useState(false);
  const [openedModal, { open: openModal, close: closeModel }] = useDisclosure(false);

  const buttonReadMore =
    data.fullDesc !== '' ?
      <Button
        justify="center"
        variant="outline"
        mt="md"
        color={color}
        fullWidth
        onClick={openModal}
      >
        Read more
      </Button>
      :
      <></>;


  return (
    <>
      <Modal
        opened={openedModal}
        onClose={closeModel}
        title={
          <Text size="lg" className={classes.title} fw={700} c={color}>
            {data.prefix} {data.title}
          </Text>
        }>
        <Text size="md" className={classes.description}>
          {data.shortDesc}
        </Text>
        <Divider my="md" />
        <Text size="md" className={classes.description}>
          {data.fullDesc}
        </Text>
      </Modal>

      <Card
        h={rem(360)}
        maw={rem(360)}
        shadow="lg"
        className={classes.card}
        radius="md"
        component="a"
        onClick={() => {
          if (enabled) {
            setState(data.nodeIdx);
          }
        }}
        style={{
          boxShadow: (hovered && enabled) ? `0 0 30px ${rgba(color, 0.5)}, 0 0 30px ${rgba(color, 0.1)}` : 'none',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className={classes.image}
          style={{
            backgroundImage: `url(${data.image})`,
            backgroundPositionX: 'center',
            WebkitFilter: enabled ? 'none' : 'grayscale(100%)',
            filter: enabled ? 'none' : 'grayscale(100%)',
          }}
        />
        <div className={classes.overlay} />

        <div className={classes.content}>
          <div>
            <Text size="lg" className={classes.title} fw={700} c={color}>
              {data.prefix} {data.title}
            </Text>

            <Group justify="space-between" gap="xs">
              <Text size="sm" className={classes.description}>
                {data.shortDesc}
              </Text>

              {buttonReadMore}
            </Group>
          </div>
        </div>
      </Card>
    </>
  );
}
