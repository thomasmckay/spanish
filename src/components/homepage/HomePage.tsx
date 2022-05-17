import React from 'react';
import { useRef, useState } from 'react';

import { Accordion, Button, Center, Container, Divider, Text, Title } from '@mantine/core';
import { useAccordionState } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';

import { ConjugationsContent, CurrentConjugations, Conjugations } from '../ConjugationsComponent'
import { VerbsContent, CurrentVerbs, Verbs, Verb } from '../VerbsComponent'
import { SubjectsContent, CurrentSubjects, Subjects, Subject } from '../SubjectsComponent'
import { WheresContent, CurrentWheres, Wheres, EmptyWhere, Where } from '../WheresComponent'
import { WhensContent, CurrentWhens, Whens, EmptyWhen, When } from '../WhensComponent'


export function HomeContent() {
    const [sentence, setSentence] = useState([]);
    const [currentConjugation, setCurrentConjugation] = useState({});
    const [currentVerb, setCurrentVerb] = useState<Verb>();
    const [currentSubject, setCurrentSubject] = useState<Subject>();
    const [currentWhere, setCurrentWhere] = useState<Where>();
    const [currentWhen, setCurrentWhen] = useState<When>();
    const [state, handlers] = useAccordionState({ total: 1, initialItem: -1 });

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

        if (!conjugation || !subject || !verb) {
            return;
        }

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

        handlers.toggle(!state);
    };

    const accordion = <Accordion
                          state={state}
                          onChange={handlers.setState}
                      >
                          <Accordion.Item
                              label="Show Spanish"
                          >
                              { sentence[0] }
                          </Accordion.Item>
                      </Accordion>

    const nextStep = () => {
        if (accordion.props.state[0] === true) {
            updateSentence();
        } else {
            handlers.toggle(0);
        }
    }

    useHotkeys([['N', () => nextStep()]]);

    return (
        <Container>
            <Title order={2} my="md">Who What Where When Sentences</Title>
            <ConjugationsContent />
            <SubjectsContent />
            <VerbsContent />
            <WheresContent />
            <WhensContent />
            <Divider />
            <Button
                onClick={updateSentence}>
                Next Sentence
            </Button>
            <Text
                size="xl"
            >
                {sentence[1]}
            </Text>
            { accordion }
        </Container>
    );
}
