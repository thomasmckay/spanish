import React from 'react';
import { useRef, useState } from 'react';

import { Accordion, Button, Center, Container, Divider, Text, Title } from '@mantine/core';
import { useAccordionState } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';

import { PracticesContent, CurrentPractices, Practices } from '../PracticesComponent'
import { ConjugationsContent, CurrentConjugations, Conjugations } from '../ConjugationsComponent'
import { VerbsContent, CurrentVerbs, Verbs, Verb } from '../VerbsComponent'
import { SubjectsContent, CurrentSubjects, Subjects, Subject } from '../SubjectsComponent'
import { WheresContent, CurrentWheres, Wheres, EmptyWhere, Where } from '../WheresComponent'
import { WhensContent, CurrentWhens, Whens, EmptyWhen, When } from '../WhensComponent'


export function PracticePage() {
    const [sentence, setSentence] = useState([]);
    const [currentConjugation, setCurrentConjugation] = useState({});
    const [currentVerb, setCurrentVerb] = useState<Verb>();
    const [currentSubject, setCurrentSubject] = useState<Subject>();
    const [currentWhere, setCurrentWhere] = useState<Where>();
    const [currentWhen, setCurrentWhen] = useState<When>();
    const [state, handlers] = useAccordionState({ total: 1, initialItem: -1 });

    const updateSentence = () => {
        console.log(`???? CurrentConjugations=${CurrentConjugations}  ${Conjugations.length}`);
        console.log(`???? CurrentVerbs=${CurrentVerbs}  ${Verbs.length}`);
        console.log(`???? CurrentSubjects=${CurrentSubjects}  ${Subjects.length}`);

        let conjugationName = CurrentConjugations[Math.floor(Math.random() * CurrentConjugations.length)];
        let conjugation = Conjugations.find(c => c.value === conjugationName);
        setCurrentConjugation(conjugation);
        let randomVerb = CurrentVerbs[Math.floor(Math.random() * CurrentVerbs.length)];
        let verb = Verbs.find(v => v.spanish === randomVerb.value);
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
            console.log(`Missing: conjugation=${conjugation} subject=${subject} verb=${verb}`);
            return;
        }

        switch(conjugation.value) {
        case "o":
            sentencePair = verb.o(subject.spanish);
            break;
        case "estoy_ando":
            sentencePair = verb.estoy_ando(subject.spanish);
            break;
        case "he_estado_ando":
            sentencePair = verb.he_estado_ando(subject.spanish);
            break;
        case "estaba_ando":
            sentencePair = verb.estaba_ando(subject.spanish);
            break;
        case "estare_ando":
            sentencePair = verb.estare_ando(subject.spanish);
            break;
        case "aba":
            sentencePair = verb.aba(subject.spanish);
            break;
        case "e":
            sentencePair = verb.e(subject.spanish);
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
            <PracticesContent />
            <ConjugationsContent />
            <SubjectsContent />
            <WheresContent />
            <WhensContent />
            <Divider />
            <Container>
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
        </Container>
    );
}
