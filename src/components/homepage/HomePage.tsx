import React from 'react';
import { useRef, useState } from 'react';

import { Container, Tabs } from '@mantine/core';
import { useAccordionState } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';

import { PracticePage } from './PracticePage'
import { VerbPage } from './VerbPage'


export function HomeContent() {


    return (
        <Container>
                    <PracticePage />
        </Container>
    );
}
