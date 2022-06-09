import { Container } from '@mantine/core';
import { MultiSelect } from '@mantine/core';
import React from 'react';
import { useState, useEffect } from 'react';

import { Verbs, CurrentVerbs } from './VerbsComponent';


const VerbGroups = [
    {label: "May 21st", value: ["llegar", "llevar"]},
    {label: "another", value: ["caminar", "correr"]},
];


export function VerbGroupsContent() {

    const [value, setValue] = useState();

    useEffect(() => {
        if (!value) {
            return;
        }

        for (const group of value) {
            for (const verbName of group) {
                if (!CurrentVerbs.find(v => v.spanish === verbName)) {
                    let verb = Verbs.find(v => v.spanish === verbName);
                    if (verb) {
                       CurrentVerbs.push({
                           label: verb.english,
                           value: verb.spanish,
                       });
                    }
                }
            }
        }
    });

    return (
        <Container>
            <MultiSelect
                value={value}
                onChange={setValue}
                data={VerbGroups}
                label="Pre-defined VerbGroups"
                placeholder="Pick verb groups"
                clearable
                clearButtonLabel="Clear selection"
            />
        </Container>
    )
}
