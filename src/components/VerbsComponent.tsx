import { Container } from '@mantine/core';
import { TransferList, TransferListData } from '@mantine/core';
import React from 'react';
import { useState, useEffect } from 'react';



enum WhoNouns {
    yo,
    tu,
    el,
    ella,
    nosotros,
    vosotros,
    ellos,
};


class Verb {
    spanish: string;
    english: string;
    english_ing: string;
    english_ed: string;
    spanish_who: {};
    english_who: {};

    spanish_o: {};
    english_o: {};
    spanish_estoy: {};
    english_estoy: {};
    spanish_ando: string;
    spanish_aba: {};
    spanish_he: {};
    spanish_e: {};
    spanish_estaba: {};
    english_estaba: {};
    spanish_estare: {};
    english_estare: {};

    constructor({ spanish, english, english_ing = undefined, english_ed = undefined, spanish_o = undefined, spanish_ando = undefined, spanish_aba = undefined, spanish_e = undefined }: {
        spanish: string;
        english: string;
        english_ing?: string;
        english_ed?: string;
        spanish_o?: {};
        spanish_ando?: string;
        spanish_aba?: {};
        spanish_e?: {};
     }) {
        this.spanish = spanish;
        this.english = english;

        this.spanish_who = {
            yo: "yo",
            tu: "tú",
            el: "él",
            ella: "ella",
            nosotros: "nosotros",
            vosotros: "vosotros",
            ellos: "ellos",
        };

        this.english_who = {
            yo: "i",
            tu: "you",
            el: "he",
            ella: "she",
            nosotros: "we",
            vosotros: "y'all",
            ellos: "they",
        };

        let base = this.spanish.substring(0, this.spanish.length - 2);

        if (english_ing) {
            this.english_ing = english_ing;
        } else if (this.english.endsWith("e")) {
            this.english_ing = `${this.english.substring(0, this.english.length - 1)}ing`;
        } else {
            this.english_ing = `${this.english}ing`;
        }

        if (english_ed) {
            this.english_ed = english_ed;
        } else if (this.english.endsWith("e")) {
            this.english_ed = `${this.english}d`;
        } else {
            this.english_ed = `${this.english}ed`;
        }

        if (spanish_o) {
            this.spanish_o = spanish_o;
        } else if (this.spanish.endsWith("ar")) {
            this.spanish_o = {
                yo: `${base}o`,
                tu: `${base}as`,
                el: `${base}a`,
                ella: `${base}a`,
                nosotros: `${base}amos`,
                vosotros: `${base}áis`,
                ellos: `${base}an`,
            };
        } else {
            this.spanish_o = {
                yo: `${base}o`,
                tu: `${base}as`,
                el: `${base}a`,
                ella: `${base}a`,
                nosotros: `${base}amos`,
                vosotros: `${base}áis`,
                ellos: `${base}an`,
            };
        }

        if (spanish_aba) {
            this.spanish_aba = spanish_aba;
        } else if (this.spanish.endsWith("ar")) {
            this.spanish_aba = {
                yo: `${base}aba`,
                tu: `${base}abas`,
                el: `${base}aba`,
                ella: `${base}aba`,
                nosotros: `${base}ábamos`,
                vosotros: `${base}abais`,
                ellos: `${base}aban`,
            };
        } else {
            this.spanish_aba = {
                yo: `${base}ía`,
                tu: `${base}ías`,
                el: `${base}ía`,
                ella: `${base}ía`,
                nosotros: `${base}íamos`,
                vosotros: `${base}íais`,
                ellos: `${base}ían`,
            };
        }

        if (spanish_e) {
            this.spanish_e = spanish_e;
        } else if (this.spanish.endsWith("ar")) {
            this.spanish_e = {
                yo: `${base}é`,
                tu: `${base}aste`,
                el: `${base}ó`,
                ella: `${base}ó`,
                nosotros: `${base}amos`,
                vosotros: `${base}asteis`,
                ellos: `${base}aron`,
            };
        } else {
            this.spanish_e = {
                yo: `${base}í`,
                tu: `${base}iste`,
                el: `${base}ió`,
                ella: `${base}ió`,
                nosotros: `${base}imos`,
                vosotros: `${base}isteis`,
                ellos: `${base}ieron`,
            };
        }

        if (spanish_ando) {
            this.spanish_ando = spanish_ando;
        } else if (this.spanish.endsWith("ar")) {
            this.spanish_ando = `${base}ando`;
        } else {
            this.spanish_ando = `${base}iendo`;
        }

        this.english_o = {
            yo: `${this.english}`,
            tu: `${this.english}`,
            el: `${this.english}s`,
            ella: `${this.english}s`,
            nosotros: `${this.english}`,
            vosotros: `${this.english}`,
            ellos: `${this.english}`,
        };

        this.spanish_estoy = {
            yo: "estoy",
            tu: "estas",
            el: "está",
            ella: "está",
            nosotros: "estamos",
            vosotros: "estáis",
            ellos: "están"
        };
        this.english_estoy = {
            yo: "am",
            tu: "are",
            el: "is",
            ella: "is",
            nosotros: "are",
            vosotros: "are",
            ellos: "are"
        };

        this.spanish_estaba = {
            yo: "estaba",
            tu: "estabas",
            el: "estaba",
            ella: "estaba",
            nosotros: "estábamos",
            vosotros: "estabais",
            ellos: "estaban"
        };
        this.english_estaba = {
            yo: "was",
            tu: "were",
            el: "was",
            ella: "was",
            nosotros: "were",
            vosotros: "were",
            ellos: "were"
        };

        this.spanish_estare = {
            yo: "estaré",
            tu: "estarás",
            el: "estará",
            ella: "estará",
            nosotros: "estaremos",
            vosotros: "estareís",
            ellos: "estarán"
        };

        this.spanish_he = {
            yo: "he",
            tu: "has",
            el: "ha",
            ella: "ha",
            nosotros: "hemos",
            vosotros: "habéis",
            ellos: "han"
        };
    }


    o({ who }: { who: string; }): string[] {
        return [
                `${this.spanish_who[who]} ${this.spanish_o[who]}`,
                `${this.english_who[who]} ${this.english_o[who]}`,
        ];
    }


    estoy_ando({ who }: { who: string; }): string[] {
        return [
                `${this.spanish_who[who]} ${this.spanish_estoy[who]} ${this.spanish_ando}`,
                `${this.english_who[who]} ${this.english_estoy[who]} ${this.english_ing}`,
        ];
    }


    he_estado_ando({ who }: { who: string; }): string[] {
        return [
                `${this.spanish_who[who]} ${this.spanish_he[who]} estado ${this.spanish_ando}`,
                `${this.english_who[who]} have been ${this.english_ing}`,
        ];
    }


    estaba_ando({ who }: { who: string; }): string[] {
        return [
                `${this.spanish_who[who]} ${this.spanish_estaba[who]} estado ${this.spanish_ando}`,
                `${this.english_who[who]} ${this.english_estaba[who]} ${this.english_ing}`,
        ];
    }


    estare_ando({ who }: { who: string; }): string[] {
        return [
                `${this.spanish_who[who]} ${this.spanish_estare[who]} ${this.spanish_ando}`,
                `${this.english_who[who]} will be ${this.english_ing}`,
        ];
    }


    aba({ who }: { who: string; }): string[] {
        return [
                `${this.spanish_who[who]} ${this.spanish_aba[who]}`,
                `${this.english_who[who]} ${this.english_ed}`,
        ];
    }


    e({ who }: { who: string; }): string[] {
        return [
                `${this.spanish_who[who]} ${this.spanish_e[who]}`,
                `${this.english_who[who]} ${this.english_ed}`,
        ];
    }
}

export const Verbs = [
    new Verb({ spanish: "abrir", english: "open" }),
    new Verb({ spanish: "almorzar", english: "have lunch" }),
    new Verb({ spanish: "alquilar", english: "rent" }),
    new Verb({ spanish: "amar", english: "love" }),
    new Verb({ spanish: "andar", english: "walk" }),
    new Verb({ spanish: "beber", english: "drink" }),
    new Verb({ spanish: "buscar", english: "look for" }),
    new Verb({ spanish: "cambiar", english: "change" }),
    new Verb({ spanish: "caminar", english: "walk" }),
    new Verb({ spanish: "cantar", english: "sing" }),
    new Verb({ spanish: "cenar", english: "have dinner" }),
    new Verb({ spanish: "cepillarse", english: "brush" }),
    new Verb({ spanish: "cerrar", english: "close" }),
    new Verb({ spanish: "cocer", english: "cook" }),
    new Verb({ spanish: "cocinar", english: "cook" }),
    new Verb({ spanish: "coger", english: "take" }),
    new Verb({ spanish: "comenzar", english: "start" }),
    new Verb({ spanish: "comer", english: "eat" }),
    new Verb({ spanish: "comprar", english: "buy" }),
    new Verb({ spanish: "conocer", english: "know" }),
    new Verb({ spanish: "contestar", english: "answer" }),
    new Verb({ spanish: "correr", english: "run", english_ing: "running" }),
    new Verb({ spanish: "costar", english: "cost" }),
    new Verb({ spanish: "dar", english: "give" }),
    new Verb({ spanish: "decir", english: "say" }),
    new Verb({ spanish: "dejar", english: "leave" }),
    new Verb({ spanish: "descansar", english: "rest" }),
    new Verb({ spanish: "desear", english: "wish" }),
    new Verb({ spanish: "dibujar", english: "draw" }),
    new Verb({ spanish: "disfrutar", english: "enjoy" }),
    new Verb({ spanish: "dormir", english: "sleep" }),
    new Verb({ spanish: "ducharse", english: "shower" }),
    new Verb({ spanish: "elegir", english: "choose" }),
    new Verb({ spanish: "empezar", english: "start" }),
    new Verb({ spanish: "encontrar", english: "find" }),
    new Verb({ spanish: "enseñar", english: "teach" }),
    new Verb({ spanish: "entender", english: "understand" }),
    new Verb({ spanish: "entrar", english: "enter" }),
    new Verb({ spanish: "enviar", english: "send" }),
    new Verb({ spanish: "escribir", english: "write" }),
    new Verb({ spanish: "escuchar", english: "listen to" }),
    new Verb({ spanish: "esperar", english: "wait" }),
    new Verb({ spanish: "estar", english: "be" }),
    new Verb({ spanish: "estudiar", english: "study" }),
    new Verb({ spanish: "gastar", english: "spend" }),
    new Verb({ spanish: "girar", english: "turn" }),
    new Verb({ spanish: "hablar", english: "speak" }),
    new Verb({ spanish: "hacer", english: "make" }),
    new Verb({ spanish: "hervir", english: "boil" }),
    new Verb({ spanish: "ir", english: "go" }),
    new Verb({ spanish: "jugar", english: "play" }),
    new Verb({ spanish: "lavar", english: "wash" }),
    new Verb({ spanish: "leer", english: "read" }),
    new Verb({ spanish: "levantar", english: "raise" }),
    new Verb({ spanish: "limpiar", english: "clean" }),
    new Verb({ spanish: "llamar", english: "call" }),
    new Verb({ spanish: "llegar", english: "arrive" }),
    new Verb({ spanish: "llevar", english: "wear", english_ed: "wore" }),
    new Verb({ spanish: "llover", english: "rain" }),
    new Verb({ spanish: "mandar", english: "order" }),
    new Verb({ spanish: "manejar", english: "drive" }),
    new Verb({ spanish: "mirar", english: "look at" }),
    new Verb({ spanish: "montar", english: "ride" }),
    new Verb({ spanish: "nadar", english: "swim" }),
    new Verb({ spanish: "necesitar", english: "need" }),
    new Verb({ spanish: "olvidar", english: "forget" }),
    new Verb({ spanish: "pagar", english: "pay" }),
    new Verb({ spanish: "pasar", english: "pass" }),
    new Verb({ spanish: "pensar", english: "think" }),
    new Verb({ spanish: "perder", english: "lose" }),
    new Verb({ spanish: "practicar", english: "practice" }),
    new Verb({ spanish: "preguntar", english: "ask" }),
    new Verb({ spanish: "preparar", english: "prepare" }),
    new Verb({ spanish: "probar", english: "try" }),
    new Verb({ spanish: "probarse", english: "try on" }),
    new Verb({ spanish: "quedarse", english: "stay" }),
    new Verb({ spanish: "recordar", english: "remember" }),
    new Verb({ spanish: "regresar", english: "return" }),
    new Verb({ spanish: "repetir", english: "do again" }),
    new Verb({ spanish: "saber", english: "know" }),
    new Verb({ spanish: "salir", english: "leave" }),
    new Verb({ spanish: "saludar", english: "greet" }),
    new Verb({ spanish: "seguir", english: "continue" }),
    new Verb({ spanish: "sentar", english: "sit" }),
    new Verb({ spanish: "sentarse", english: "sit" }),
    new Verb({ spanish: "tener", english: "have" }),
    new Verb({ spanish: "tocar", english: "touch" }),
    new Verb({ spanish: "tomar", english: "take" }),
    new Verb({ spanish: "trabajar", english: "work" }),
    new Verb({ spanish: "traer", english: "bring" }),
    new Verb({ spanish: "valer", english: "cost" }),
    new Verb({ spanish: "venir", english: "come" }),
    new Verb({ spanish: "ver", english: "see" }),
    new Verb({ spanish: "viajar", english: "travel" }),
    new Verb({ spanish: "visitar", english: "visit" }),
    new Verb({ spanish: "vivir", english: "live" }),
    new Verb({ spanish: "volar", english: "fly" }),
    new Verb({
            spanish: "volver", english: "return",
            spanish_o: {
                yo: "vuelvo",
                tu: "vuelves",
                el: "vuelve",
                ella: "vuelve",
                nosotros: "volvemos",
                vosotros: "volvéis",
                ellos: "vuelven",
            }
        }),
];

export var CurrentVerbs;

export function VerbsContent() {
    const initialValues: TransferListData = [
        Verbs.map(v => {
                   return {
                       label: `${v.english} / ${v.spanish}`,
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
