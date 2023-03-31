import { Container } from '@mantine/core';
import { MultiSelect } from '@mantine/core';
import React from 'react';
import { useState, useEffect } from 'react';
import { Verb, Verbs } from '../components/VerbsComponent'
import { Subject, Subjects } from '../components/SubjectsComponent'

export class Paragraph {
    spanish: string;
    english: string;
    verbs: string[];

    who: Subject;

    constructor({spanish, english, verbs}: { spanish: string; english: string; verbs: string[]}) {
        this.spanish = spanish;
        this.english = english;
        this.verbs = verbs;
    }

    fillTemplate(templateString, templateVars){
        return new Function("return `"+templateString +"`;").call(templateVars);
    }

    sentences(verbs: Verb[], who: Subject) {
        if (verbs.length == 0) {
            for (const name of this.verbs) {
                verbs.push(Verbs.find(v => v.spanish === name) || Verbs[0])
            }
            //verbs = Verbs.filter(v => this.defaultVerbs.indexOf(v.spanish) != -1)
        } else if (verbs.length < this.verbs.length) {
            return ["wrong number of verbs", "wrong number of verbs"]
        }
        if (!who) {
            who = Subjects[0];
        }

        let spanish = this.fillTemplate(this.spanish, {who: who, verbs: verbs});
        let english = this.fillTemplate(this.english, {who: who, verbs: verbs});
        return [spanish, english];
    }
}

export const Paragraphs = [
    new Paragraph({
        verbs: ["descansar", "caminar", "estudiar", "visitar"],
        spanish: "Bueno, ${this.verbs[0].he_estado_ando({ who: this.who.spanish })[0]} en casa esta mañana, \n " +
        "${this.verbs[1].estaba_ando({ who: this.who.spanish })[0]} en el parque ayer \n " +
        "pero hoy ${this.verbs[2].estoy_ando({ who: this.who.spanish })[0]} mucho en la cama \n " +
        "y mañana ${this.verbs[3].estare_ando({ who: this.who.spanish })[0]} los museos en la ciudad.",
        english: "Well, ${this.verbs[0].he_estado_ando({ who: this.who.spanish })[1]} at home this morning, \n " +
        "${this.verbs[1].estaba_ando({ who: this.who.spanish })[1]} in the park yesterday, \n " +
        "but today ${this.verbs[2].estoy_ando({ who: this.who.spanish })[1]} a lot in bed and \n " +
        "tomorrow ${this.verbs[3].estare_ando({ who: this.who.spanish })[1]} the museums in the city.",
    }),
    new Paragraph({
        verbs: ["dar"],
        spanish: "${this.verbs[0].spanish} un chapuzón en el lago.",
        english: "${this.verbs[0].english} a dip in the lake.",
    })
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
