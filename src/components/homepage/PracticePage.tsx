import React from 'react';
import { useRef, useState } from 'react';

import { Accordion, Button, Center, Container, Divider, Text, Title, Textarea } from '@mantine/core';
import { useAccordionState } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';

import { PracticesContent, CurrentPractices, Practices } from '../PracticesComponent'
import { ConjugationsContent, CurrentConjugations, Conjugations, Conjugation } from '../ConjugationsComponent'
import { VerbsContent, CurrentVerbs, Verbs, Verb } from '../VerbsComponent'
import { VerbGroupsContent } from '../VerbGroupsComponent'
import { SubjectsContent, CurrentSubjects, Subjects, Subject } from '../SubjectsComponent'
import { WheresContent, CurrentWheres, Wheres, EmptyWhere, Where } from '../WheresComponent'
import { WhensContent, CurrentWhens, Whens, EmptyWhen, When } from '../WhensComponent'
import { ParagraphsContent, Paragraphs, Paragraph, CurrentParagraphs } from '../ParagraphsComponent'


export function PracticePage() {
    const [currentPractice, setCurrentPractice] = useState("");
    const [sentence, setSentence] = useState([]);
    const [currentConjugation, setCurrentConjugation] = useState<Conjugation>();
    const [CurrentParagraph, setCurrentParagraph] = useState<Paragraph>();
    const [currentVerb, setCurrentVerb] = useState<Verb>();
    const [currentSubject, setCurrentSubject] = useState<Subject>();
    const [currentWhere, setCurrentWhere] = useState<Where>();
    const [currentWhen, setCurrentWhen] = useState<When>();
    const [state, handlers] = useAccordionState({ total: 1, initialItem: -1 });

    const updatePractice = () => {
        let practice = CurrentPractices ? CurrentPractices[0] : "<Select Practice Type>";
        setCurrentPractice(practice);
        let conjugationName = CurrentConjugations[Math.floor(Math.random() * CurrentConjugations.length)];
        let conjugation = Conjugations.find(c => c.value === conjugationName);
        setCurrentConjugation(conjugation);
        let randomVerb = CurrentVerbs[Math.floor(Math.random() * CurrentVerbs.length)];
        let verb = Verbs.find(v => v.spanish === randomVerb.value);
        setCurrentVerb(verb);
        let subjectName = CurrentSubjects[Math.floor(Math.random() * CurrentSubjects.length)];
        let subject = Subjects.find(s => s.spanish === subjectName);
        setCurrentSubject(subject);
        setCurrentParagraph(CurrentParagraphs ? CurrentParagraphs[0] : undefined)

        let where;
        if (!CurrentWheres || CurrentWheres.length == 0) {
            where = EmptyWhere;
        } else {
            let whereName = CurrentWheres[Math.floor(Math.random() * CurrentWheres.length)];
            where = Wheres.find(v => v.spanish === whereName);
        }
        setCurrentWhere(where);

        let when;
        if (!CurrentWhens || CurrentWhens.length == 0) {
            when = EmptyWhen;
        } else {
            let whenName = CurrentWhens[Math.floor(Math.random() * CurrentWhens.length)];
            when = Whens.find(v => v.spanish === whenName);
        }
        setCurrentWhen(when);

        if (currentPractice === "Paragraph") {
            updateParagraph();
        } else if (currentPractice === "Sentence"){
            updateSentence();
        }
    }


    const updateParagraph = () => {
        if (!CurrentParagraph) {
            return ["unset", "unset"];
        }
        if (!CurrentVerbs || CurrentVerbs.length == 0) {
            return ["unset", "unset"];
        }
        if (!currentSubject) {
            return ["unset", "unset"];
        }

        let verbs = Verbs.filter(v => v.spanish === CurrentVerbs[0].value);
        setSentence(CurrentParagraph.sentences(verbs, currentSubject));

        handlers.toggle(!state);
    }

    const updateSentence = () => {

        let sentencePair = ["unset", "unset"];

        if (!currentConjugation || !currentSubject || !currentVerb) {
            return;
        }

        switch(currentConjugation.value) {
        case "o":
            sentencePair = currentVerb.o({ who: currentSubject.spanish });
            break;
        case "estoy_ando":
            sentencePair = currentVerb.estoy_ando({ who: currentSubject.spanish });
            break;
        case "he_estado_ando":
            sentencePair = currentVerb.he_estado_ando({ who: currentSubject.spanish });
            break;
        case "estaba_ando":
            sentencePair = currentVerb.estaba_ando({ who: currentSubject.spanish });
            break;
        case "estare_ando":
            sentencePair = currentVerb.estare_ando({ who: currentSubject.spanish });
            break;
        case "aba":
            sentencePair = currentVerb.aba({ who: currentSubject.spanish });
            break;
        case "e":
            sentencePair = currentVerb.e({ who: currentSubject.spanish });
            break;
        default:
            sentencePair = [
                `unrecognized conjugation: ${currentConjugation.value}`,
                `unrecognized conjugation: ${currentConjugation.value}`,
            ];
        }
        sentencePair[0] = `${sentencePair[0]} ${currentWhere.spanish} ${currentWhen.spanish}`;
        sentencePair[1] = `${sentencePair[1]} ${currentWhere.english} ${currentWhen.english}`;
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
                              <Text
                                  style={{ "white-space": "pre-line" }}
                                  size="xl"
                              >
                                  { sentence[0] }
                              </Text>
                          </Accordion.Item>
                      </Accordion>

    const nextStep = () => {
        if (accordion.props.state[0] === true) {
            updatePractice();
        } else {
            handlers.toggle(0);
        }
    }

    useHotkeys([['N', () => nextStep()]]);

    return (
        <Container>
        <Container>
            <Button
                onClick={updatePractice}>
                {`Next ${currentPractice ? currentPractice : "<select practice type>"}`}
            </Button>
            <Text
                style={{ "white-space": "pre-line" }}
                size="xl"
            >
                {sentence[1]}
            </Text>
            { accordion }
        </Container>
        <Divider />
            <PracticesContent />
            <VerbsContent />
            <ParagraphsContent />
            <ConjugationsContent />
            <SubjectsContent />
            <WheresContent />
            <WhensContent />
        </Container>
    );
}
