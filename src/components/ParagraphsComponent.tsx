import { Container } from '@mantine/core';
import { MultiSelect } from '@mantine/core';
import React from 'react';
import { useState, useEffect } from 'react';
import { Verb } from '../components/VerbsComponent'
import { Subject } from '../components/SubjectsComponent'

export class Paragraph {
    spanish: string;
    english: string;

    who: Subject;

    constructor(spanish, english) {
        this.spanish = spanish;
        this.english = english;
    }

    fillTemplate(templateString, templateVars){
        return new Function("return `"+templateString +"`;").call(templateVars);
    }

    sentences(verbs: Verb[], who: Subject) {
        // assert verbs length

        let spanish = this.fillTemplate(this.spanish, {who: who, verbs: verbs});
        let english = this.fillTemplate(this.english, {who: who, verbs: verbs});
        return [spanish, english];
    }
}

export const Paragraphs = [
    new Paragraph(
        "Bueno, ${this.verbs[0].he_estado_ando({ who: this.who.spanish })[0]} en casa esta mañana, \n estaba caminando en el parque ayer \n pero hoy estoy estudiando mucho en la cama \n y mañana estaré visitando los museos en la ciudad.",
        "Well, ${this.verbs[0].he_estado_ando({ who: this.who.spanish })[1]} at home this morning, \n i was walking in the park yesterday, \n but today i am studying a lot in bed and \n tomorrow i will be visiting the museums in the city."
    ),
];


export var CurrentParagraphs;

export function ParagraphsContent() {
    const [value, setValue] = useState<Paragraph[]>(CurrentParagraphs);

    useEffect(() => {
        if (value) {
            CurrentParagraphs = value;
        }
    }, [value]);

    return (
        <Container>
            <MultiSelect
                data={Paragraphs.map(v => {
                    return {
                        label: v.english,
                        value: v,
                    }
                })}
                label="Paragraphs"
                placeholder="Pick paragraph to use"
                value={value}
                onChange={setValue}
                clearable
                clearButtonLabel="Clear selection"
                maxSelectedValues={ 1 }
            />
        </Container>
    )
}
