import { Button, Grid, Stack, Progress } from '@mantine/core';
import { Dispatch, SetStateAction, useState } from 'react';
import classes from './ExperienceProgressBar.module.css';

interface ExperienceProps {
  level: number;
  setLevel: Dispatch<SetStateAction<number>>;
}

export default function ExperienceProgressBar({ level, setLevel }: ExperienceProps) {
  const [exp, privateSetExp] = useState(0);
  const increment = 100 / 5;

  const setExp = (value: number) => {
    if (value === 100) {
      privateSetExp(value);
      return;
    }

    if (value > 100) {
      privateSetExp(0);
      setLevel(level + 1);
      return;
    }

    privateSetExp(value);
  }

  return (
    <header className={classes.header}>
      <Stack align="stretch" justify="center" gap="md" p="md">
        <Grid>
          <Grid.Col span={{ base: 12, md: 10 }}>
            <Progress.Root size="xl" h={32}>
              <Progress.Section value={exp}>
                <Progress.Label>
                  Level {level}
                </Progress.Label>
              </Progress.Section>
            </Progress.Root>

          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 2 }}>
            <Button w="100%" size="compact-md" onClick={() => { setExp(exp + increment); }}>
              {exp === 100 ? 'Level Up' : 'Complete task'}
            </Button>
          </Grid.Col>
        </Grid>
      </Stack>
    </header>
  );
}
