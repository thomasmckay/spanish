import { Container } from '@mantine/core';
import { MultiSelect } from '@mantine/core';
import React from 'react';
import { useState, useEffect } from 'react';


export class Conjugation {
    value: string;
    label: string;
    group: string;

  constructor(value: string, label: string, group: string) {
    this.value = value;
    this.label = label;
    this.group = group;
  }
}


export const Conjugations = [
    new Conjugation("o", "I walk", "now"),
    new Conjugation("estoy_ando", "I am walking", "now"),
    new Conjugation("he_estado_ando", "I have been walking", "past"),
    new Conjugation("estaba_ando", "I was walking (imperfect)", "past"),
    new Conjugation("estare_ando", "I will be walking", "future"),
    new Conjugation("aba", "I walked (imperfect)", "past"),
    new Conjugation("e", "I walked (preterite)", "past"),
];

export var CurrentConjugations;

export function ConjugationsContent() {
    const [value, setValue] = useState(CurrentConjugations);

    useEffect(() => {
        CurrentConjugations = value;
    });

    return (
        <Container>
            <MultiSelect
                data={Conjugations}
                label="Conjugations"
                placeholder="Pick verb conjugations to use in sentences"
                value={value}
                onChange={setValue}
                clearable
                clearButtonLabel="Clear selection"
            />
        </Container>
    )
}
