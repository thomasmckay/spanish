import { Container, Text, Title } from '@mantine/core';
import { MultiSelect } from '@mantine/core';
import React from 'react';
import { useState, useEffect, Component } from 'react';

class Subject {
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
    const [value, setValue] = useState([]);
    //const [currentSubjects, setCurrentSubjects] = useState([]);
    //useEffect(() => { setCurrentSubjects(value) }, [value]);

    useEffect(() => {
        console.log(`???? subjects=${value}`);
        CurrentSubjects = value;
    }, [value]);

    return (
        <Container>
            <MultiSelect
                data={Subjects.map(v => v.spanish)}
                label="Subjects"
                placeholder="Pick all that you like"
                value={value}
                onChange={setValue}
                clearable
                clearButtonLabel="Clear selection"
            />
        </Container>
    )
}
