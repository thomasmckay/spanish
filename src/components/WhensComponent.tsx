import { Container } from '@mantine/core';
import { MultiSelect } from '@mantine/core';
import React from 'react';
import { useState, useEffect } from 'react';

class When {
    constructor(spanish, english, when) {
        this.spanish = spanish;
        this.english = english;
        this.when = when;
    }
}

export const Whens = [
    new When("ahora", "now", "now"),

    new When("hace dos días", "two days ago", "past"),
    new When("ayer", "yesterday", "past"),
    new When("anteayer", "the day before yesterday", "past"),
    new When("hace un mes", "a month ago", "past"),
    new When("hace unos días", "a day ago", "past"),
    new When("hace unas horas", "an hour ago", "past"),
    new When("la semana pasada", "last week", "past"),
    new When("el año pasado", "last year", "past"),
    new When("el mes pasado", "last month", "past"),
    new When("el fin de semana pasado", "last weekend", "past"),

    new When("mañana", "tomorrow", "future"),
    new When("pasado mañana", "the day after tomorrow", "future"),
    new When("el proximo mes", "next month", "future"),
    new When("el proximo viernes", "next friday", "future"),
    new When("en dos días", "in two days", "future"),
    new When("la semana que viene", "the coming week", "future"),
    new When("el mes que viene", "the coming month", "future"),
    new When("el año que viene", "the coming year", "future"),
    new When("tarde en la noche", "late in the night", "future"),
];

export const EmptyWhen = new When("", "", "");


export var CurrentWhens;

export function WhensContent() {
    const [value, setValue] = useState(CurrentWhens);

    useEffect(() => {
        CurrentWhens = value;
        console.log(`WhensComponent: CurrentWhens=${CurrentWhens}`);
    }, [value]);

    return (
        <Container>
            <MultiSelect
                data={Whens.map(v => {
                    return {
                        label: v.english,
                        value: v.spanish,
                        group: v.when
                    }
                })}
                label="Whens"
                placeholder="Pick times to use in sentences"
                value={value}
                onChange={setValue}
                clearable
                clearButtonLabel="Clear selection"
            />
        </Container>
    )
}
