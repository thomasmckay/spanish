import { Container } from '@mantine/core';
import { MultiSelect } from '@mantine/core';
import React from 'react';
import { useState, useEffect } from 'react';


export const Practices = [
    {label: "Who What Where When Sentences", value: 1},
    {label: "Conjugation Paragraph", value: 2},
];

export var CurrentPractices;

export function PracticesContent() {
    const [value, setValue] = useState(CurrentPractices);

    useEffect(() => {
        CurrentPractices = value;
        console.log(`PracticesComponent: CurrentPractices=${CurrentPractices}`);
    }, [value]);

    return (
        <Container>
            <MultiSelect
                data={Practices}
                label="Practice Types"
                placeholder="Pick a practice type"
                value={value}
                onChange={setValue}
                clearable
                clearButtonLabel="Clear selection"
                maxSelectedValues="1"
            />
        </Container>
    )
}
