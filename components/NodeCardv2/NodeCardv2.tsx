'use client';

import { IconQuestionMark } from '@tabler/icons-react';
import { Card, Image, Text, Group, Button, ActionIcon, rgba, Modal, Divider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React, { Dispatch, SetStateAction, useState } from 'react';
import classes from './NodeCardv2.module.css';
import { prefixToColor } from '../../utils/prefixColor'

export interface NodeCardv2Data {
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

interface NodeCardv2Props {
  level: number,
  data: NodeCardv2Data;
  setState: Dispatch<SetStateAction<number>>;
}

export function NodeCardv2({ level, data, setState }: NodeCardv2Props) {
  const color = prefixToColor(data.prefix);
  const enabled = level >= data.yearsRequired;
  const [hovered, setHovered] = useState(false);
  const [openedModal, { open: openModal, close: closeModel }] = useDisclosure(false);

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
        w={360}
        withBorder
        radius="md"
        p="md"
        className={classes.card}
        style={{
          boxShadow: (hovered && enabled) ? `0 0 30px ${rgba(color, 0.5)}, 0 0 30px ${rgba(color, 0.1)}` : 'none',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Card.Section>
          <Image
            src={data.image}
            alt={data.title}
            height={250}
            style={{
              WebkitFilter: enabled ? 'none' : 'grayscale(100%)',
              filter: enabled ? 'none' : 'grayscale(100%)',
            }} />
        </Card.Section>

        <Card.Section className={classes.section} mt="md">
          <Group justify="apart">
            <Text fz="lg" fw={700} c={color}>
              {data.prefix} {data.title}
            </Text>
          </Group>
          <Text fz="sm" mt="xs">
            {data.shortDesc}
          </Text>
        </Card.Section>

        <Group mt="xs">
          <Button
            radius="md"
            variant="outline"
            color={color}
            style={{ flex: 1 }}
            disabled={!enabled}
            onClick={() => {
              if (enabled) {
                setState(data.nodeIdx);
              }
            }}>
            Select this path
          </Button>
          <ActionIcon variant="default" radius="md" size={36} onClick={openModal}>
            <IconQuestionMark color={color} className={classes.like} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Card>
    </>
  );
}
