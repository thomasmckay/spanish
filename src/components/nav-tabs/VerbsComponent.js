import { Container, Text, Title } from '@mantine/core';
import { MultiSelect } from '@mantine/core';
import React from 'react';
import { useState, useEffect, Component } from 'react';

class Verb {
    constructor(spanish, english) {
        this.spanish = spanish;
        this.english = english;
    }

    o(who) {
        if (this.spanish.endsWith("ar")) {
            switch(who) {
            case "yo":
                return`${this.spanish.substring(0, this.spanish.length - 2)}o`;
                break;
            case "tu":
                return `${this.spanish.substring(0, this.spanish.length - 2)}as`;
                break;
            default:
                return `unknown 'o' who: ${who}`;
            }
        } else if (this.spanish.endsWith("er") || this.spanish.endsWith("er")) {
            switch(who) {
            case "yo":
                return`${this.spanish.substring(0, this.spanish.length - 2)}o`;
                break;
            case "tu":
                return `${this.spanish.substring(0, this.spanish.length - 2)}as`;
                break;
            default:
                return `unknown 'o' who: ${who}`;
            }
        } else {
            return `unknown 'o' verb ending: ${this.spanish}`;
        }
    }
}

export const Verbs = [
    new Verb("caminar", "walk"),
    new Verb("trabajar", "work"),
    new Verb("esperar", "wait"),
];

export var CurrentVerbs;

export function VerbsContent() {
    const [value, setValue] = useState([]);

    useEffect(() => {
        console.log(`???? verbs=${value}`);
        CurrentVerbs = value;
    });

    return (
        <Container>
            <MultiSelect
                data={Verbs.map(v => v.spanish)}
                label="Verbs"
                placeholder="Pick all that you like"
                value={value}
                onChange={setValue}
                clearable
                clearButtonLabel="Clear selection"
            />
        </Container>
    )
}
