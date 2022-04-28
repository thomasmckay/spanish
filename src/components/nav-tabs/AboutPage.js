import { Container, Text, Title, Button } from '@mantine/core';
import { MultiSelect } from '@mantine/core';
import React from 'react';
import { useState, useEffect, Component } from 'react';
import { VerbsContent, CurrentVerbs } from './VerbsComponent.js'
//import { Verb } from '../../models/verb.js'
//import { Verbs } from '../../data/verbs.js'

const Subjects = [
    { value: 'yo', label: 'yo' },
    { value: 'tu', label: 'tu' },
];

export function AboutContent() {
    const [value, setValue] = useState([]);
    let currentSubjects = [];

    useEffect(() => {
        console.log(`???? subjects=${value} verbs=${CurrentVerbs}`);
        currentSubjects = value;
    });


    function showSentence() {
        console.log(`???? showSentence=${CurrentVerbs}`);
        currentSentence = `${CurrentVerbs}`;
        return currentSentence;
    }

    let currentSentence = "here we go";

    return (
        <Container>
            <Title order={2} my="md">Spanish</Title>
            <Text>Subjects: {currentSubjects} Verbs: {CurrentVerbs}</Text>
            <MultiSelect
                data={Subjects}
                label="Subjects"
                placeholder="Pick all that you like"
                value={value}
                onChange={setValue}
                clearable
                clearButtonLabel="Clear selection"
            />
            <VerbsContent />
            <Text>{showSentence()}</Text>
            <Button
                onClick={showSentence}>
                click me
            </Button>

        </Container>
    )
}
