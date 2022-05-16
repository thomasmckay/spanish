import { Container } from '@mantine/core';
import { MultiSelect } from '@mantine/core';
import React from 'react';
import { useState, useEffect } from 'react';

class Where {
    constructor(spanish, english) {
        this.spanish = spanish;
        this.english = english;
    }
}

export const Wheres = [
    new Where("en casa", "at home"),
];

export const EmptyWhere = new Where("", "");

export var CurrentWheres;

export function WheresContent() {
    const [value, setValue] = useState([]);

    useEffect(() => {
        CurrentWheres = value;
    }, [value]);

    return (
        <Container>
            <MultiSelect
                data={Wheres.map(v => {
                    return {
                        label: v.english,
                        value: v.spanish
                    }
                })}
                label="Wheres"
                placeholder="Pick locations to use in sentences"
                value={value}
                onChange={setValue}
                clearable
                clearButtonLabel="Clear selection"
            />
        </Container>
    )
}