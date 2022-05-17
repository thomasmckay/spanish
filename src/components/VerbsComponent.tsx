import { Container } from '@mantine/core';
import { MultiSelect } from '@mantine/core';
import React from 'react';
import { useState, useEffect } from 'react';

class XYZ {
    name: string;

    constructor() {
        this.name = "abc";
    }
}


class Verb {
    spanish: string;
    english: string;
    props: any;

    constructor(spanish, english, props={}) {
        this.spanish = spanish;
        this.english = english;
        this.props = props;
    }

    o(who) {
        let result = "";
        if (this.spanish.endsWith("ar")) {
            switch(who) {
            case "yo":
                result = [
                    `yo ${this.spanish.substring(0, this.spanish.length - 2)}o`,
                    `i ${this.english}`,
                ];
                break;
            case "tu":
                result = [
                    `tú ${this.spanish.substring(0, this.spanish.length - 2)}as`,
                    `you ${this.english}`,
                ];
                break;
            case "el":
                result = [
                    `él ${this.spanish.substring(0, this.spanish.length - 2)}a`,
                    `he ${this.english}s`,
                ];
                break;
            case "ella":
                result = [
                    `ella ${this.spanish.substring(0, this.spanish.length - 2)}a`,
                    `she ${this.english}s`,
                ];
                break;
            case "nosotros":
                result = [
                    `nosotros ${this.spanish.substring(0, this.spanish.length - 2)}amos`,
                    `we ${this.english}`,
                ];
                break;
            case "vosotros":
                result = [
                    `vosotros ${this.spanish.substring(0, this.spanish.length - 2)}áis`,
                    `y'all ${this.english}`,
                ];
                break;
            case "ellos":
                result = [
                    `ellos ${this.spanish.substring(0, this.spanish.length - 2)}an`,
                    `they ${this.english}`,
                ];
                break;
            default:
                result = [
                    `unknown 'o' who: ${who}`,
                    `unknown 'o' who: ${who}`,
                ];
            }
        } else if (this.spanish.endsWith("er") || this.spanish.endsWith("er")) {
            switch(who) {
            case "yo":
                result = [
                    `yo ${this.spanish.substring(0, this.spanish.length - 2)}o`,
                    `i ${this.english}`,
                ];
                break;
            case "tu":
                result = [
                    `tú ${this.spanish.substring(0, this.spanish.length - 2)}es`,
                    `you ${this.english}`,
                ];
                break;
            case "el":
                result = [
                    `él ${this.spanish.substring(0, this.spanish.length - 2)}e`,
                    `he ${this.english}s`,
                ];
                break;
            case "ella":
                result = [
                    `ella ${this.spanish.substring(0, this.spanish.length - 2)}e`,
                    `she ${this.english}s`,
                ];
                break;
            case "nosotros":
                result = [
                    `nosotros ${this.spanish.substring(0, this.spanish.length - 2)}emos`,
                    `we ${this.english}`,
                ];
                break;
            case "vosotros":
                result = [
                    `vosotros ${this.spanish.substring(0, this.spanish.length - 2)}éis`,
                    `y'all ${this.english}`,
                ];
                break;
            case "ellos":
                result = [
                    `ellos ${this.spanish.substring(0, this.spanish.length - 2)}en`,
                    `they ${this.english}`,
                ];
                break;
            default:
                result = [
                    `unknown 'o' who: ${who}`,
                    `unknown 'o' who: ${who}`,
                ];
            }
        } else {
            result = [
                `unknown 'o' verb ending: ${this.spanish}`,
                `unknown 'o' verb ending: ${this.spanish}`,
            ];
        }

        return result;
    }

    estoy_ando(who) {
        let result = "";
        let english_ing = this.props.english_ing || `${this.english}ing`;
        if (this.spanish.endsWith("ar")) {
            switch(who) {
            case "yo":
                result = [
                    `yo estoy ${this.spanish.substring(0, this.spanish.length - 2)}ando`,
                    `i am ${english_ing}`,
                ];
                break;
            case "tu":
                result = [
                    `tú estás ${this.spanish.substring(0, this.spanish.length - 2)}ando`,
                    `you are ${english_ing}`,
                ];
                break;
            case "el":
                result = [
                    `él está ${this.spanish.substring(0, this.spanish.length - 2)}ando`,
                    `he is ${english_ing}`,
                ];
                break;
            case "ella":
                result = [
                    `ella está ${this.spanish.substring(0, this.spanish.length - 2)}ando`,
                    `she is ${english_ing}`,
                ];
                break;
            case "nosotros":
                result = [
                    `nosotros estamos ${this.spanish.substring(0, this.spanish.length - 2)}ando`,
                    `we are ${english_ing}`,
                ];
                break;
            case "vosotros":
                result = [
                    `vosotros estáis ${this.spanish.substring(0, this.spanish.length - 2)}ando`,
                    `y'all are ${english_ing}`,
                ];
                break;
            case "ellos":
                result = [
                    `ellos están ${this.spanish.substring(0, this.spanish.length - 2)}ando`,
                    `they are ${english_ing}`,
                ];
                break;
            default:
                result = [
                    `unknown 'o' who: ${who}`,
                    `unknown 'o' who: ${who}`,
                ];
            }
        } else if (this.spanish.endsWith("er") || this.spanish.endsWith("er")) {
            switch(who) {
            case "yo":
                result = [
                    `yo estoy ${this.spanish.substring(0, this.spanish.length - 2)}iendo`,
                    `i am ${english_ing}`,
                ];
                break;
            case "tu":
                result = [
                    `tú estás ${this.spanish.substring(0, this.spanish.length - 2)}iendo`,
                    `you are ${english_ing}`,
                ];
                break;
            case "el":
                result = [
                    `él está ${this.spanish.substring(0, this.spanish.length - 2)}iendo`,
                    `he is ${english_ing}`,
                ];
                break;
            case "ella":
                result = [
                    `ella está ${this.spanish.substring(0, this.spanish.length - 2)}iendo`,
                    `she is ${english_ing}`,
                ];
                break;
            case "nosotros":
                result = [
                    `nosotros estamos ${this.spanish.substring(0, this.spanish.length - 2)}iendo`,
                    `we are ${english_ing}`,
                ];
                break;
            case "vosotros":
                result = [
                    `vosotros estáis ${this.spanish.substring(0, this.spanish.length - 2)}iendo`,
                    `y'all are ${english_ing}`,
                ];
                break;
            case "ellos":
                result = [
                    `ellos están ${this.spanish.substring(0, this.spanish.length - 2)}iendo`,
                    `they are ${english_ing}`,
                ];
                break;
            default:
                result = [
                    `unknown 'o' who: ${who}`,
                    `unknown 'o' who: ${who}`,
                ];
            }
        } else {
            result = [
                `unknown 'o' verb ending: ${this.spanish}`,
                `unknown 'o' verb ending: ${this.spanish}`,
            ];
        }

        return result;
    }

    he_estado_ando(who) {
        let result = "";
        let english_ing = this.props.english_ing || `${this.english}ing`;
        if (this.spanish.endsWith("ar")) {
            switch(who) {
            case "yo":
                result = [
                    `yo he estado ${this.spanish.substring(0, this.spanish.length - 2)}ando`,
                    `i have been ${english_ing}`,
                ];
                break;
            case "tu":
                result = [
                    `tú has estado ${this.spanish.substring(0, this.spanish.length - 2)}ando`,
                    `you have been ${english_ing}`,
                ];
                break;
            case "el":
                result = [
                    `él ha estado ${this.spanish.substring(0, this.spanish.length - 2)}ando`,
                    `he has been ${english_ing}`,
                ];
                break;
            case "ella":
                result = [
                    `ella ha estado ${this.spanish.substring(0, this.spanish.length - 2)}ando`,
                    `she has been ${english_ing}`,
                ];
                break;
            case "nosotros":
                result = [
                    `nosotros hemos estado ${this.spanish.substring(0, this.spanish.length - 2)}ando`,
                    `we have been ${english_ing}`,
                ];
                break;
            case "vosotros":
                result = [
                    `vosotros habeis estado ${this.spanish.substring(0, this.spanish.length - 2)}ando`,
                    `y'all have been ${english_ing}`,
                ];
                break;
            case "ellos":
                result = [
                    `ellos han estado ${this.spanish.substring(0, this.spanish.length - 2)}ando`,
                    `they have been ${english_ing}`,
                ];
                break;
            default:
                result = [
                    `unknown 'o' who: ${who}`,
                    `unknown 'o' who: ${who}`,
                ];
            }
        } else if (this.spanish.endsWith("er") || this.spanish.endsWith("er")) {
            switch(who) {
            case "yo":
                result = [
                    `yo he estado ${this.spanish.substring(0, this.spanish.length - 2)}iendo`,
                    `i have been ${english_ing}`,
                ];
                break;
            case "tu":
                result = [
                    `tú has estado ${this.spanish.substring(0, this.spanish.length - 2)}iendo`,
                    `you have been ${english_ing}`,
                ];
                break;
            case "el":
                result = [
                    `él ha estado ${this.spanish.substring(0, this.spanish.length - 2)}iendo`,
                    `he has been ${english_ing}`,
                ];
                break;
            case "ella":
                result = [
                    `ella ha estado ${this.spanish.substring(0, this.spanish.length - 2)}iendo`,
                    `she has been ${english_ing}`,
                ];
                break;
            case "nosotros":
                result = [
                    `nosotros hemos estado ${this.spanish.substring(0, this.spanish.length - 2)}iendo`,
                    `we have been ${english_ing}`,
                ];
                break;
            case "vosotros":
                result = [
                    `vosotros habeis estado ${this.spanish.substring(0, this.spanish.length - 2)}iendo`,
                    `y'all have been ${english_ing}`,
                ];
                break;
            case "ellos":
                result = [
                    `ellos han estado ${this.spanish.substring(0, this.spanish.length - 2)}iendo`,
                    `they have been ${english_ing}`,
                ];
                break;
            default:
                result = [
                    `unknown 'o' who: ${who}`,
                    `unknown 'o' who: ${who}`,
                ];
            }
        } else {
            result = [
                `unknown 'o' verb ending: ${this.spanish}`,
                `unknown 'o' verb ending: ${this.spanish}`,
            ];
        }

        return result;
    }

    estaba_ando(who) {
        let result = "";
        let english_ing = this.props.english_ing || `${this.english}ing`;
        if (this.spanish.endsWith("ar")) {
            switch(who) {
            case "yo":
                result = [
                    `yo estaba ${this.spanish.substring(0, this.spanish.length - 2)}ando`,
                    `i was ${english_ing}`,
                ];
                break;
            case "tu":
                result = [
                    `tú estabas ${this.spanish.substring(0, this.spanish.length - 2)}ando`,
                    `you were ${english_ing}`,
                ];
                break;
            case "el":
                result = [
                    `él estaba ${this.spanish.substring(0, this.spanish.length - 2)}ando`,
                    `he was ${english_ing}`,
                ];
                break;
            case "ella":
                result = [
                    `ella estaba ${this.spanish.substring(0, this.spanish.length - 2)}ando`,
                    `she was ${english_ing}`,
                ];
                break;
            case "nosotros":
                result = [
                    `nosotros estabamos ${this.spanish.substring(0, this.spanish.length - 2)}ando`,
                    `we were ${english_ing}`,
                ];
                break;
            case "vosotros":
                result = [
                    `vosotros estabais ${this.spanish.substring(0, this.spanish.length - 2)}ando`,
                    `y'all were ${english_ing}`,
                ];
                break;
            case "ellos":
                result = [
                    `ellos estaban ${this.spanish.substring(0, this.spanish.length - 2)}ando`,
                    `they were ${english_ing}`,
                ];
                break;
            default:
                result = [
                    `unknown 'o' who: ${who}`,
                    `unknown 'o' who: ${who}`,
                ];
            }
        } else if (this.spanish.endsWith("er") || this.spanish.endsWith("er")) {
            switch(who) {
            case "yo":
                result = [
                    `yo estaba ${this.spanish.substring(0, this.spanish.length - 2)}iendo`,
                    `i was ${english_ing}`,
                ];
                break;
            case "tu":
                result = [
                    `tú estabas ${this.spanish.substring(0, this.spanish.length - 2)}iendo`,
                    `you were ${english_ing}`,
                ];
                break;
            case "el":
                result = [
                    `él estaba ${this.spanish.substring(0, this.spanish.length - 2)}iendo`,
                    `he was ${english_ing}`,
                ];
                break;
            case "ella":
                result = [
                    `ella estaba ${this.spanish.substring(0, this.spanish.length - 2)}iendo`,
                    `she was ${english_ing}`,
                ];
                break;
            case "nosotros":
                result = [
                    `nosotros estabamos ${this.spanish.substring(0, this.spanish.length - 2)}iendo`,
                    `we were ${english_ing}`,
                ];
                break;
            case "vosotros":
                result = [
                    `vosotros estabais ${this.spanish.substring(0, this.spanish.length - 2)}iendo`,
                    `y'all were ${english_ing}`,
                ];
                break;
            case "ellos":
                result = [
                    `ellos estaban ${this.spanish.substring(0, this.spanish.length - 2)}iendo`,
                    `they were ${english_ing}`,
                ];
                break;
            default:
                result = [
                    `unknown 'o' who: ${who}`,
                    `unknown 'o' who: ${who}`,
                ];
            }
        } else {
            result = [
                `unknown 'o' verb ending: ${this.spanish}`,
                `unknown 'o' verb ending: ${this.spanish}`,
            ];
        }

        return result;
    }

    estare_ando(who) {
        let result = "";
        let english_ing = this.props.english_ing || `${this.english}ing`;
        if (this.spanish.endsWith("ar")) {
            switch(who) {
            case "yo":
                result = [
                    `yo estaré ${this.spanish.substring(0, this.spanish.length - 2)}ando`,
                    `i will be ${english_ing}`,
                ];
                break;
            case "tu":
                result = [
                    `tú estarás ${this.spanish.substring(0, this.spanish.length - 2)}ando`,
                    `you will be ${english_ing}`,
                ];
                break;
            case "el":
                result = [
                    `él estará ${this.spanish.substring(0, this.spanish.length - 2)}ando`,
                    `he will be ${english_ing}`,
                ];
                break;
            case "ella":
                result = [
                    `ella estará ${this.spanish.substring(0, this.spanish.length - 2)}ando`,
                    `she will be ${english_ing}`,
                ];
                break;
            case "nosotros":
                result = [
                    `nosotros estaremos ${this.spanish.substring(0, this.spanish.length - 2)}ando`,
                    `we will be ${english_ing}`,
                ];
                break;
            case "vosotros":
                result = [
                    `vosotros estareís ${this.spanish.substring(0, this.spanish.length - 2)}ando`,
                    `y'all will be ${english_ing}`,
                ];
                break;
            case "ellos":
                result = [
                    `ellos estarán ${this.spanish.substring(0, this.spanish.length - 2)}ando`,
                    `they will be ${english_ing}`,
                ];
                break;
            default:
                result = [
                    `unknown 'o' who: ${who}`,
                    `unknown 'o' who: ${who}`,
                ];
            }
        } else if (this.spanish.endsWith("er") || this.spanish.endsWith("er")) {
            switch(who) {
            case "yo":
                result = [
                    `yo estaré ${this.spanish.substring(0, this.spanish.length - 2)}iendo`,
                    `i will be ${english_ing}`,
                ];
                break;
            case "tu":
                result = [
                    `tú estarás ${this.spanish.substring(0, this.spanish.length - 2)}iendo`,
                    `you will be ${english_ing}`,
                ];
                break;
            case "el":
                result = [
                    `él estará ${this.spanish.substring(0, this.spanish.length - 2)}iendo`,
                    `he will be ${english_ing}`,
                ];
                break;
            case "ella":
                result = [
                    `ella estará ${this.spanish.substring(0, this.spanish.length - 2)}iendo`,
                    `she will be ${english_ing}`,
                ];
                break;
            case "nosotros":
                result = [
                    `nosotros estaremos ${this.spanish.substring(0, this.spanish.length - 2)}iendo`,
                    `we will be ${english_ing}`,
                ];
                break;
            case "vosotros":
                result = [
                    `vosotros estareís ${this.spanish.substring(0, this.spanish.length - 2)}iendo`,
                    `y'all will be ${english_ing}`,
                ];
                break;
            case "ellos":
                result = [
                    `ellos estarán ${this.spanish.substring(0, this.spanish.length - 2)}iendo`,
                    `they will be ${english_ing}`,
                ];
                break;
            default:
                result = [
                    `unknown 'o' who: ${who}`,
                    `unknown 'o' who: ${who}`,
                ];
            }
        } else {
            result = [
                `unknown 'o' verb ending: ${this.spanish}`,
                `unknown 'o' verb ending: ${this.spanish}`,
            ];
        }

        return result;
    }
}

export const Verbs = [
    new Verb("caminar", "walk"),
    new Verb("trabajar", "work"),
    new Verb("esperar", "wait"),
    new Verb("correr", "run", {english_ing: "running"}),
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
                data={Verbs.map(v => {
                    return {
                        label: v.english,
                        value: v.spanish,
                    }
                })}
                label="Whats"
                placeholder="Pick verbs to use in sentences"
                value={value}
                onChange={setValue}
                clearable
                clearButtonLabel="Clear selection"
            />
        </Container>
    )
}
