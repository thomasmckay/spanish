import { Container, Text, Title, Button } from '@mantine/core';
import React from 'react';
import { useState, useEffect, Component } from 'react';
import { ConjugationsContent, CurrentConjugations } from './ConjugationsComponent.js'
import { VerbsContent, CurrentVerbs, Verbs, Verb } from './VerbsComponent.js'
import { SubjectsContent, CurrentSubjects, Subjects, Subject } from './SubjectsComponent.js'


export function AboutContent() {
    const [sentence, setSentence] = useState("");
    const [currentVerb, setCurrentVerb] = useState(Verb);
    const [currentSubject, setCurrentSubject] = useState(Subject);
    const updateSentence = () => {
        let verbName = CurrentVerbs[Math.floor(Math.random() * CurrentVerbs.length)];
        let verb = Verbs.find(v => v.spanish === verbName);
        setCurrentVerb(verb);
        let subjectName = CurrentSubjects[Math.floor(Math.random() * CurrentSubjects.length)];
        let subject = Subjects.find(s => s.spanish === subjectName);
        setCurrentSubject(subject);
        setSentence(`${subject.spanish} ${verb.o(subject.spanish)}`);
        //setSentence(`${CurrentSubjects} ${CurrentVerbs}`)
    };


    return (
        <Container>
            <Title order={2} my="md">Who What Where When Sentences</Title>
            <ConjugationsContent />
            <SubjectsContent />
            <VerbsContent />
            <Button
                onClick={updateSentence}>
                Next Sentence
            </Button>
            <Text>{sentence}</Text>

        </Container>
    )
}
