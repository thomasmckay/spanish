import { Container, Text, Title, Button, Spoiler } from '@mantine/core';
import React from 'react';
import { useState } from 'react';
import { ConjugationsContent, CurrentConjugations, Conjugations } from './ConjugationsComponent.js'
import { VerbsContent, CurrentVerbs, Verbs, Verb } from './VerbsComponent.js'
import { SubjectsContent, CurrentSubjects, Subjects, Subject } from './SubjectsComponent.js'
import { WheresContent, CurrentWheres, Wheres, EmptyWhere, Where } from './WheresComponent.js'
import { WhensContent, CurrentWhens, Whens, EmptyWhen, When } from './WhensComponent.js'


export function AboutContent() {
    const [sentence, setSentence] = useState([]);
    const [currentConjugation, setCurrentConjugation] = useState({});
    const [currentVerb, setCurrentVerb] = useState(Verb);
    const [currentSubject, setCurrentSubject] = useState(Subject);
    const [currentWhere, setCurrentWhere] = useState(Where);
    const [currentWhen, setCurrentWhen] = useState(When);
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

        let where;
        if (CurrentWheres.length == 0) {
            where = EmptyWhere;
        } else {
            let whereName = CurrentWheres[Math.floor(Math.random() * CurrentWheres.length)];
            where = Wheres.find(v => v.spanish === whereName);
        }
        setCurrentWhere(where);

        let when;
        if (CurrentWhens.length == 0) {
            when = EmptyWhen;
        } else {
            let whenName = CurrentWhens[Math.floor(Math.random() * CurrentWhens.length)];
            when = Whens.find(v => v.spanish === whenName);
        }
        setCurrentWhen(when);

        let sentencePair = ["unset", "unset"];
        console.log(`${conjugation.value} ${subject.spanish} ${verb.spanish}`);
        switch(conjugation.value) {
        case "o":
            sentencePair = verb.o(subject.spanish);
            break;
        case "estoy_ando":
            sentencePair = verb.estoy_ando(subject.spanish);
            break;
        case "he_estaba_ando":
            sentencePair = verb.he_estaba_ando(subject.spanish);
            break;
        case "estaba_ando":
            sentencePair = verb.estaba_ando(subject.spanish);
            break;
        case "estare_ando":
            sentencePair = verb.estare_ando(subject.spanish);
            break;
        default:
            sentencePair = [
                `unrecognized conjugation: ${conjugation.value}`,
                `unrecognized conjugation: ${conjugation.value}`,
            ];
        }
        sentencePair[0] = `${sentencePair[0]} ${where.spanish} ${when.spanish}`;
        sentencePair[1] = `${sentencePair[1]} ${where.english} ${when.english}`;
        setSentence(sentencePair);
    };


    return (
        <Container>
            <Title order={2} my="md">Who What Where When Sentences</Title>
            <ConjugationsContent />
            <SubjectsContent />
            <VerbsContent />
            <WheresContent />
            <WhensContent />
            <Button
                onClick={updateSentence}>
                Next Sentence
            </Button>
            <Text
                size="xl"
            >
                {sentence[1]}
            </Text>
            <Spoiler
                maxHeight={5}
                showLabel="Show Spanish"
                hideLabel="Hide Spanish"
            >
            <Text
                size="xl"
            >
                {sentence[0]}
            </Text>
            </Spoiler>
        </Container>
    )
}
