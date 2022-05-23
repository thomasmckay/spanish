import { Container } from '@mantine/core';
import { TransferList, TransferListData } from '@mantine/core';
import React from 'react';
import { useState, useEffect } from 'react';


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
        } else if (this.spanish.endsWith("er") || this.spanish.endsWith("ir")) {
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

    aba(who) {
        let result = "";
        let english_ing = this.props.english_ing || `${this.english}ing`;
        if (this.spanish.endsWith("ar")) {
            switch(who) {
            case "yo":
                result = [
                    `yo ${this.spanish.substring(0, this.spanish.length - 2)}aba`,
                    `i ${this.english}ed`,
                ];
                break;
            case "tu":
                result = [
                    `tú ${this.spanish.substring(0, this.spanish.length - 2)}abas`,
                    `you ${this.english}ed`,
                ];
                break;
            case "el":
                result = [
                    `él ${this.spanish.substring(0, this.spanish.length - 2)}aba`,
                    `he ${this.english}ed`,
                ];
                break;
            case "ella":
                result = [
                    `ella ${this.spanish.substring(0, this.spanish.length - 2)}aba`,
                    `she ${this.english}ed`,
                ];
                break;
            case "nosotros":
                result = [
                    `nosotros ${this.spanish.substring(0, this.spanish.length - 2)}ábamos`,
                    `we ${this.english}ed`,
                ];
                break;
            case "vosotros":
                result = [
                    `vosotros ${this.spanish.substring(0, this.spanish.length - 2)}abais`,
                    `y'all ${this.english}ed`,
                ];
                break;
            case "ellos":
                result = [
                    `ellos ${this.spanish.substring(0, this.spanish.length - 2)}aban`,
                    `they ${this.english}ed`,
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
                    `yo ${this.spanish.substring(0, this.spanish.length - 2)}ía`,
                    `i ${this.english}ed`,
                ];
                break;
            case "tu":
                result = [
                    `tú ${this.spanish.substring(0, this.spanish.length - 2)}ías`,
                    `you ${this.english}ed`,
                ];
                break;
            case "el":
                result = [
                    `él ${this.spanish.substring(0, this.spanish.length - 2)}ía`,
                    `he ${this.english}ed`,
                ];
                break;
            case "ella":
                result = [
                    `ella ${this.spanish.substring(0, this.spanish.length - 2)}ía`,
                    `she ${this.english}ed`,
                ];
                break;
            case "nosotros":
                result = [
                    `nosotros ${this.spanish.substring(0, this.spanish.length - 2)}íamos`,
                    `we ${this.english}ed`,
                ];
                break;
            case "vosotros":
                result = [
                    `vosotros ${this.spanish.substring(0, this.spanish.length - 2)}íais`,
                    `y'all ${this.english}ed`,
                ];
                break;
            case "ellos":
                result = [
                    `ellos ${this.spanish.substring(0, this.spanish.length - 2)}ían`,
                    `they ${this.english}ed`,
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


    e(who) {
        let result = "";
        let english_ing = this.props.english_ing || `${this.english}ing`;
        if (this.spanish.endsWith("ar")) {
            switch(who) {
            case "yo":
                result = [
                    `yo ${this.spanish.substring(0, this.spanish.length - 2)}é`,
                    `i ${this.english}ed`,
                ];
                break;
            case "tu":
                result = [
                    `tú ${this.spanish.substring(0, this.spanish.length - 2)}aste`,
                    `you ${this.english}ed`,
                ];
                break;
            case "el":
                result = [
                    `él ${this.spanish.substring(0, this.spanish.length - 2)}ó`,
                    `he ${this.english}ed`,
                ];
                break;
            case "ella":
                result = [
                    `ella ${this.spanish.substring(0, this.spanish.length - 2)}ó`,
                    `she ${this.english}ed`,
                ];
                break;
            case "nosotros":
                result = [
                    `nosotros ${this.spanish.substring(0, this.spanish.length - 2)}amos`,
                    `we ${this.english}ed`,
                ];
                break;
            case "vosotros":
                result = [
                    `vosotros ${this.spanish.substring(0, this.spanish.length - 2)}asteis`,
                    `y'all ${this.english}ed`,
                ];
                break;
            case "ellos":
                result = [
                    `ellos ${this.spanish.substring(0, this.spanish.length - 2)}aron`,
                    `they ${this.english}ed`,
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
                    `yo ${this.spanish.substring(0, this.spanish.length - 2)}í`,
                    `i ${this.english}ed`,
                ];
                break;
            case "tu":
                result = [
                    `tú ${this.spanish.substring(0, this.spanish.length - 2)}iste`,
                    `you ${this.english}ed`,
                ];
                break;
            case "el":
                result = [
                    `él ${this.spanish.substring(0, this.spanish.length - 2)}ió`,
                    `he ${this.english}ed`,
                ];
                break;
            case "ella":
                result = [
                    `ella ${this.spanish.substring(0, this.spanish.length - 2)}ió`,
                    `she ${this.english}ed`,
                ];
                break;
            case "nosotros":
                result = [
                    `nosotros ${this.spanish.substring(0, this.spanish.length - 2)}imos`,
                    `we ${this.english}ed`,
                ];
                break;
            case "vosotros":
                result = [
                    `vosotros ${this.spanish.substring(0, this.spanish.length - 2)}isteis`,
                    `y'all ${this.english}ed`,
                ];
                break;
            case "ellos":
                result = [
                    `ellos ${this.spanish.substring(0, this.spanish.length - 2)}ieron`,
                    `they ${this.english}ed`,
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
    new Verb("abrir", "open"),
    new Verb("almorzar", "have lunch"),
    new Verb("alquilar", "rent"),
    new Verb("amar", "love"),
    new Verb("andar", "walk"),
    new Verb("beber", "drink"),
    new Verb("buscar", "look for"),
    new Verb("cambiar", "change"),
    new Verb("caminar", "walk"),
    new Verb("cantar", "sing"),
    new Verb("cenar", "have dinner"),
    new Verb("cepillarse", "brush"),
    new Verb("cerrar", "close"),
    new Verb("cocer", "cook"),
    new Verb("cocinar", "cook"),
    new Verb("coger", "take"),
    new Verb("comenzar", "start"),
    new Verb("comer", "eat"),
    new Verb("comprar", "buy"),
    new Verb("conocer", "know"),
    new Verb("contestar", "answer"),
    new Verb("correr", "run", {english_ing: "running"}),
    new Verb("costar", "cost"),
    new Verb("dar", "give"),
    new Verb("decir", "say"),
    new Verb("dejar", "leave"),
    new Verb("descansar", "rest"),
    new Verb("desear", "wish"),
    new Verb("dibujar", "draw"),
    new Verb("disfrutar", "enjoy"),
    new Verb("dormir", "sleep"),
    new Verb("ducharse", "shower"),
    new Verb("elegir", "choose"),
    new Verb("empezar", "start"),
    new Verb("encontrar", "find"),
    new Verb("enseñar", "teach"),
    new Verb("entender", "understand"),
    new Verb("entrar", "enter"),
    new Verb("enviar", "send"),
    new Verb("escribir", "write"),
    new Verb("escuchar", "listen to"),
    new Verb("esperar", "wait"),
    new Verb("estar", "be"),
    new Verb("estudiar", "study"),
    new Verb("gastar", "spend"),
    new Verb("girar", "turn"),
    new Verb("hablar", "speak"),
    new Verb("hacer", "make"),
    new Verb("hervir", "boil"),
    new Verb("ir", "go"),
    new Verb("jugar", "play"),
    new Verb("lavar", "wash"),
    new Verb("leer", "read"),
    new Verb("levantar", "raise"),
    new Verb("limpiar", "clean"),
    new Verb("llamar", "call"),
    new Verb("llegar", "arrive"),
    new Verb("llevar", "wear"),
    new Verb("llover", "rain"),
    new Verb("mandar", "order"),
    new Verb("manejar", "drive"),
    new Verb("mirar", "look at"),
    new Verb("montar", "ride"),
    new Verb("nadar", "swim"),
    new Verb("necesitar", "need"),
    new Verb("olvidar", "forget"),
    new Verb("pagar", "pay"),
    new Verb("pasar", "pass"),
    new Verb("pensar", "think"),
    new Verb("perder", "lose"),
    new Verb("practicar", "practice"),
    new Verb("preguntar", "ask"),
    new Verb("preparar", "prepare"),
    new Verb("probar", "try"),
    new Verb("probarse", "try on"),
    new Verb("quedarse", "stay"),
    new Verb("recordar", "remember"),
    new Verb("regresar", "return"),
    new Verb("repetir", "do again"),
    new Verb("saber", "know"),
    new Verb("salir", "leave"),
    new Verb("saludar", "greet"),
    new Verb("seguir", "continue"),
    new Verb("sentar", "sit"),
    new Verb("sentarse", "sit"),
    new Verb("tener", "have"),
    new Verb("tocar", "touch"),
    new Verb("tomar", "take"),
    new Verb("trabajar", "work"),
    new Verb("traer", "bring"),
    new Verb("valer", "cost"),
    new Verb("venir", "come"),
    new Verb("ver", "see"),
    new Verb("viajar", "travel"),
    new Verb("visitar", "visit"),
    new Verb("vivir", "live"),
    new Verb("volar", "fly"),
    new Verb("volver", "return"),
];

export var CurrentVerbs;

export function VerbsContent() {
    const initialValues: TransferListData = [
        Verbs.map(v => {
                   return {
                       label: v.english,
                       value: v.spanish,
                   }
               }),
        CurrentVerbs || [],
    ];
    const [value, setValue] = useState<TransferListData>(initialValues);

    useEffect(() => {
        CurrentVerbs = value[1];
        console.log(`VerbsComponent: CurrentVerbs=${CurrentVerbs}`);
    });

    return (
        <Container>
            <TransferList
                value={value}
                onChange={setValue}
                searchPlaceholder="Search..."
                nothingFound="Nothing found"
                titles={["Available Verbs", "Selected Verbs"]}
                breakpoint="sm"
            />
        </Container>
    )
}
