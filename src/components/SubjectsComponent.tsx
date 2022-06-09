import { Container } from '@mantine/core';
import { MultiSelect } from '@mantine/core';
import React from 'react';
import { useState, useEffect } from 'react';

export class Subject {
    spanish: string;
    english: string;

    constructor(spanish, english) {
        this.spanish = spanish;
        this.english = english;
    }
}

export const Subjects = [
    new Subject("yo", "i"),
    new Subject("tu", "you"),
    new Subject("el", "he"),
    new Subject("ella", "she"),
    new Subject("nosotros", "we"),
    new Subject("vosotros", "y'all"),
    new Subject("ellos", "they"),
];

export var CurrentSubjects;

export function SubjectsContent() {
    const [value, setValue] = useState(CurrentSubjects);

    useEffect(() => {
        CurrentSubjects = value;
    }, [value]);

    return (
        <Container>
            <MultiSelect
                data={Subjects.map(v => {
                    return {
                        label: v.english,
                        value: v.spanish,
                    }
                })}
                label="Whos"
                placeholder="Pick subjects to use in sentences"
                value={value}
                onChange={setValue}
                clearable
                clearButtonLabel="Clear selection"
            />
        </Container>
    )
}
