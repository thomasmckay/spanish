import { Container } from '@mantine/core';
import { MultiSelect } from '@mantine/core';
import React from 'react';
import { useState, useEffect } from 'react';


export const Conjugations = [
    {value: "o", label: "I walk", group: "now"},
    {value: "estoy_ando", label: "I am walking", group: "now"},
    {value: "he_estado_ando", label: "I have been walking", group: "past"},
    {value: "estaba_ando", label: "I was walking (imperfect)", group: "past"},
    {value: "estare_ando", label: "I will be walking", group: "future"},
    {value: "aba", label: "I walked (imperfect)", group: "past"},
    {value: "e", label: "I walked (preterite)", group: "past"},
];

export var CurrentConjugations;

export function ConjugationsContent() {
    const [value, setValue] = useState(CurrentConjugations);

    useEffect(() => {
        CurrentConjugations = value;
        console.log(`ConjugationsComponent: CurrentConjugations=${CurrentConjugations}`);
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
