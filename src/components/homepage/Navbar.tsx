import React from 'react';
import { Header, Container, Group, ActionIcon } from '@mantine/core';
import { BrandGithub } from 'tabler-icons-react';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';


export function Nav() {
  return (
    <Header>
      <Container>
          <Group spacing={7}>
              <ActionIcon
                  variant="outline"
                  title="Github source"
              >
                  <a href="https://github.com/thomasmckay/spanish" target="_blank" rel="noreferrer">
                      <BrandGithub size={18} />
                  </a>
              </ActionIcon>
            <ColorSchemeToggle />
        </Group>
      </Container>
    </Header>
  );
}
