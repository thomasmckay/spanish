import React from 'react';
import { useRef, useState } from 'react';

import { Accordion, Button, Center, Container, Divider, Text, Title } from '@mantine/core';
import { useAccordionState } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';

import { VerbsContent } from '../VerbsComponent'
import { VerbGroupsContent } from '../VerbGroupsComponent'


export function VerbPage() {
    return (
        <Container>
            <VerbsContent />
            <VerbGroupsContent />
        </Container>
    );
}
