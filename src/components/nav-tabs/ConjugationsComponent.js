import { Container, Text, Title } from '@mantine/core';
import { MultiSelect } from '@mantine/core';
import React from 'react';
import { useState, useEffect, Component } from 'react';


const Conjugations = [
    {value: "o", label: "I walk"},
    {value: "estoy_ando", label: "I am walking"},
    {value: "he_estado_ando", label: "I have been walking"},
    {value: "estaba_ando", label: "I was walking"},
    {value: "estare_ando", label: "I will be walking"},
];

export var CurrentConjugations;

export function ConjugationsContent() {
    const [value, setValue] = useState([]);

    useEffect(() => {
        console.log(`???? conjugations=${value}`);
        CurrentConjugations = value;
    });

    return (
        <Container>
            <MultiSelect
                data={Conjugations}
                label="Conjugations"
                placeholder="Pick all that you like"
                value={value}
                onChange={setValue}
                clearable
                clearButtonLabel="Clear selection"
            />
        </Container>
    )
}
