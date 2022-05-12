import { Container, Text, Title, Button } from '@mantine/core';
import React from 'react';
import { useState } from 'react';
import { ConjugationsContent, CurrentConjugations, Conjugations } from './ConjugationsComponent.js'
import { VerbsContent, CurrentVerbs, Verbs, Verb } from './VerbsComponent.js'
import { SubjectsContent, CurrentSubjects, Subjects, Subject } from './SubjectsComponent.js'


export function AboutContent() {
    const [sentence, setSentence] = useState([]);
    const [currentConjugation, setCurrentConjugation] = useState({});
    const [currentVerb, setCurrentVerb] = useState(Verb);
    const [currentSubject, setCurrentSubject] = useState(Subject);
    const updateSentence = () => {
        let conjugationName = CurrentConjugations[Math.floor(Math.random() * CurrentConjugations.length)];
        let conjugation = Conjugations.find(c => c.value === conjugationName);
        setCurrentConjugation(conjugation);
        let verbName = CurrentVerbs[Math.floor(Math.random() * CurrentVerbs.length)];
        let verb = Verbs.find(v => v.spanish === verbName);
        setCurrentVerb(verb);
        let subjectName = CurrentSubjects[Math.floor(Math.random() * CurrentSubjects.length)];
        let subject = Subjects.find(s => s.spanish === subjectName);
        setCurrentSubject(subject);

        let result = ["unset", "unset"];
        console.log(`${conjugation.value} ${subject.spanish} ${verb.spanish}`);
        switch(conjugation.value) {
        case "o":
            result = verb.o(subject.spanish);
            break;
        case "estoy_ando":
            result = verb.estoy_ando(subject.spanish);
            break;
        case "he_estaba_ando":
            result = verb.he_estaba_ando(subject.spanish);
            break;
        case "estaba_ando":
            result = verb.estaba_ando(subject.spanish);
            break;
        case "estare_ando":
            result = verb.estare_ando(subject.spanish);
            break;
        default:
            result = [
                `unrecognized conjugation: ${conjugation.value}`,
                `unrecognized conjugation: ${conjugation.value}`,
            ];
        }
        setSentence(result);
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
            <Text>{sentence[1]}</Text>
            <Text>{sentence[0]}</Text>

        </Container>
    )
}
