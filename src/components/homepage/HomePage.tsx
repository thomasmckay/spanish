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
            <Tabs>
                <Tabs.Tab
                    label="Verbs"
                >
                    <VerbPage />
                </Tabs.Tab>
                <Tabs.Tab
                    label="Practice"
                >
                    <PracticePage />
                </Tabs.Tab>
            </Tabs>
        </Container>
    );
}
