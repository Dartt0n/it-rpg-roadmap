'use client';

import { Card, Text, Group, Button, rgba, rem } from '@mantine/core';
import { Dispatch, SetStateAction, useState } from 'react';
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
  data: NodeCardData,
  setState: Dispatch<SetStateAction<number>>,
}

export function NodeCard({ data, setState }: NodeCardProps) {
  const color = prefixToColor(data.prefix);
  const [hovered, setHovered] = useState(false);

  return (
    <Card
      key={data.nodeIdx}
      p="lg"
      w={rem(250)}
      h={rem(280)}
      shadow="lg"
      className={classes.card}
      radius="md"
      component="a"
      onClick={() => { setState(data.nodeIdx); }}
      style={
        {
          boxShadow: hovered
            ? `0 0 30px ${rgba(color, 0.5)}, 0 0 30px ${rgba(color, 0.1)}`
            : 'none',
          transition: 'box-shadow 0.3s ease-in-out',
        }
      }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={classes.image}
        style={{
          backgroundImage: `url(${data.image})`,
          backgroundPositionX: 'center',
        }}
      />
      <div className={classes.overlay} />

      <div className={classes.content}>
        <div>
          <Text size="lg" className={classes.title} fw={500} c={color}>
            {data.prefix} {data.title}
          </Text>

          <Group justify="space-between" gap="xs">
            <Text size="sm" className={classes.description}>
              {data.shortDesc}
            </Text>

            <Group gap="lg">
              <Button justify="center" variant="outline" mt="md" color={color}>
                Read more
              </Button>
            </Group>
          </Group>
        </div>
      </div>
    </Card>
  );
}
