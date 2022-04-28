import os
import random
import sys
import time


# é


def practice_he_estado(action="random"):
    """
    bueno, yo he estado descansando en casa esta mañana,
    estaba caminando en el parque ayer
    pero hoy estoy estudiando mucho en la cama
    y mañana estaré visitando los museos en la ciudad

    bueno, {subject} {he-estar} {verb-ando} {place} {today-when},
    {hide-pronoun} {past-estar} {verb-ando} {place} {past-when}
    pero {now-when} {hide-pronoun} {now-estar} {verb-ando} {amount} {place}
    y {future-when} {hide-pronoun} {future-estar} {verb-ando} {place} en la ciudad.
    """

    subject = (
        ("I", "yo"),
        ("YOU", "tu"),
        ("SHE", "ella"),
        ("HE", "él"),
        ("WE", "nosotros"),
        ("YOU GUYS", "vosotros"),
        ("THEY", "ellos"),
    )
    he_estar = (
        ("HAVE BEEN", "he"),
        ("HAVE BEEN", "has"),
        ("HAVE BEEN", "ha"),
        ("HAVE BEEN", "ha"),
        ("HAVE BEEN", "hemos"),
        ("HAVE BEEN", "habeis"),
        ("HAVE BEEN", "han"),
    )
    verb_ando = (
        ("RESTING", "descansando", " IN", " en"),
        ("WALKING", "caminando", " IN", " en"),
        ("STUDYING", "estudiando", " IN", " en"),
        ("VISITING", "visitando", "", ""),
        ("OOPS", "OOPS"),
        ("OOPS", "OOPS"),
        ("OOPS", "OOPS"),
        ("OOPS", "OOPS"),
    )
    place = (
        ("AT HOME", "casa"),
        ("THE PARK", "el parque"),
        ("IN BED", "la cama"),
        ("THE MUSEUMS", "los museos"),
        ("OOPS", "OOPS"),
    )
    today_when = (
        ("THIS MORNING", "esta mañana"),
        ("TODAY", "hoy"),
        ("OOPS", "OOPS"),
        ("OOPS", "OOPS"),
    )
    hide_pronoun = (
        ("I ", ""),
        ("YOU ", ""),
        ("SHE ", ""),
        ("HE ", ""),
        ("WE ", ""),
        ("YOU GUYS ", ""),
        ("THEY ", ""),
    )
    now_estar = (
        ("AM", "estoy"),
        ("ARE", "estas"),
        ("IS", "está"),
        ("IS", "está"),
        ("ARE", "estamos"),
        ("ARE", "estáis"),
        ("ARE", "están"),
    )
    past_estar = (
        ("WAS", "estaba"),
        ("WERE", "estabas"),
        ("WAS", "estaba"),
        ("WAS", "estaba"),
        ("WERE", "estabamos"),
        ("WERE", "estabais"),
        ("WERE", "estaban"),
    )
    future_estar = (
        ("WILL BE", "estaré"),
        ("WILL BE", "estarás"),
        ("WILL BE", "estará"),
        ("WILL BE", "estará"),
        ("WILL BE", "estaremos"),
        ("WILL BE", "estareís"),
        ("WILL BE", "estarán"),
    )
    past_when = (
        ("YESTERDAY", "ayer"),
    )
    future_when = (
        ("TOMORROW", "mañana"),
    )
    amount = (
        ("A LOT", "mucho"),
    )

    os.system("clear")

    if action == "static":
        while True:
            os.system("clear")
            input("GET READY... GET SET...\n")
            os.system("clear")
            start = time.time()
            for i in range(0, 1):
                print(f"WELL, {subject[i][0]} {he_estar[i][0]} {verb_ando[i][0]} {place[i][0]} {today_when[i][0]}")
                print(f"{hide_pronoun[i][0]}{past_estar[i][0]} {verb_ando[i+1][0]} {place[i+1][0]} {past_when[i][0]}")
                print(f"BUT {today_when[i+1][0]} {hide_pronoun[i][0]}{now_estar[i][0]} {verb_ando[i+2][0]} {amount[i][0]} {place[i+2][0]}")
                print(f"AND {future_when[i][0]} {hide_pronoun[i][0]}{future_estar[i][0]} {verb_ando[i+3][0]} {place[i+3][0]} IN THE CITY")
            input("")
            end = time.time()
            print(f"COMPLETE IN {int(end - start)} SECONDS\n")
            for i in range(0, 1):
                print(f"bueno, {subject[i][1]} {he_estar[i][1]} estado {verb_ando[i][1]}{verb_ando[i][3]} {place[i][1]} {today_when[i][1]}")
                print(f"{hide_pronoun[i][1]}{past_estar[i][1]} {verb_ando[i+1][1]}{verb_ando[i+1][3]} {place[i+1][1]} {past_when[i][1]}")
                print(f"pero {today_when[i+1][1]} {hide_pronoun[i][1]}{now_estar[i][1]} {verb_ando[i+2][1]} {amount[i][1]}{verb_ando[i+2][3]} {place[i+2][1]}")
                print(f"y {future_when[i][1]} {hide_pronoun[i][1]}{future_estar[i][1]} {verb_ando[i+3][1]} {place[i+3][1]} en la ciudad")
            input("")


def practice_he_ado(action="random"):
    print("nope!")


def practice_estare(action="random"):
    nouns = (
        ("I", "yo", "é"),
        ("YOU", "tu", "ás"),
        ("SHE", "ella", "á"),
        ("HE", "él", "á"),
        ("WE", "nosotros", "emos"),
        ("YOU GUYS", "vosotros", "eís"),
        ("THEY", "ellos", "án"),
    )
    verbs = (
        ("WILL WALK", "caminar", " IN", " en"),
        ("WILL WORK", "trabajar", " IN", " en"),
        ("WILL SPEAK", "hablar", " IN", " en"),
        ("WILL VISIT", "visitar", "", ""),
        ("WILL REST", "descansar", " IN", " en"),
        ("WILL WAIT", "esperar", " IN",  " en"),
        ("WILL BUY", "comprar", " IN", " en"),
    )
    locations = (
        ("THE CINEMA", "el cine"),
        ("THE OUTSKIRTS", "las afueras"),
        ("THE FACTORIA", "la fabrica"),
        ("THE SHOP", "la tienda"),
        ("THE WAREHOUSE", "el almacen"),
        ("THE POST OFFICE", "la oficina de correos"),
        ("THE CITY HALL", "el ayuntamiento"),
    )
    whens = (
        ("TOMORROW", "mañana"),
        ("THE DAY AFTER TOMORROW", "pasado mañana"),
        ("NEXT MONTH", "el proximo mes"),
        ("IN TWO DAYS", "en dos dias"),
        ("THE COMING WEEK", "la semana que viene"),
        ("THE COMING MONTH", "el mes que viene"),
        ("THE COMING YEAR", "el año que viene"),
    )

    os.system("clear")

    if action == "static":
        while True:
            os.system("clear")
            input("GET READY... GET SET...\n")
            os.system("clear")
            start = time.time()
            for i in range(0, 7):
                print(f"{nouns[i][0]} {verbs[i][0]}{verbs[i][2]} {locations[i][0]} {whens[i][0]}")
            input("")
            end = time.time()
            print(f"COMPLETE IN {int(end - start)} SECONDS\n")
            for i in range(0, 7):
                print(f"{nouns[i][1]} {verbs[i][1]}{nouns[i][2]}{verbs[i][3]} {locations[i][1]} {whens[i][1]}")
            input("")

    elif action == "random":
        v = 0
        v_indices = list(range(0, len(verbs)))
        random.shuffle(v_indices)
        n = 0
        n_indices = list(range(0, len(nouns)))
        random.shuffle(n_indices)
        l = 0
        l_indices = list(range(0, len(locations)))
        random.shuffle(l_indices)
        w = 0
        w_indices = list(range(0, len(whens)))
        random.shuffle(w_indices)
        while True:
            input(f"{nouns[n_indices[n]][0]} {verbs[v_indices[v]][0]}{verbs[v_indices[v]][2]} {locations[l_indices[l]][0]} {whens[w_indices[l]][0]}\n")
            input(f"{nouns[n_indices[n]][1]} {verbs[v_indices[v]][1]}{nouns[n_indices[v]][2]}{verbs[v_indices[v]][3]} {locations[l_indices[l]][1]} {whens[w_indices[l]][1]}\n")
            os.system("clear")

            v = v + 1
            if not v < len(verbs):
                v = 0
                v_indices = list(range(0, len(verbs)))
                random.shuffle(v_indices)
            n = n + 1
            if not n < len(nouns):
                n = 0
                n_indices = list(range(0, len(nouns)))
                random.shuffle(n_indices)
            l = l + 1
            if not l < len(locations):
                l = 0
                l_indices = list(range(0, len(locations)))
                random.shuffle(l_indices)
            w = w + 1
            if not w < len(whens):
                w = 0
                w_indices = list(range(0, len(whens)))
                random.shuffle(w_indices)


def practice_estaba(action="random"):
    verbs = (
        ("I WAS", "yo estaba"),
        ("YOU WERE", "tu estabas"),
        ("SHE WAS", "ella estaba"),
        ("WE WERE", "nosotros estabamos"),
        ("YOU GUYS WERE", "vosotros estabais"),
        ("THEY WERE", "ellos estaban"),
    )
    nouns = (
        ("WAITING IN", "esperando en"),
        ("BUYING IN", "comprando en"),
        ("SPEAKING IN", "hablando en"),
        ("VISITING", "visitando"),
        ("WALKING IN", "caminando en"),
        ("RESTING IN", "descansando en"),
    )
    locations = (
        ("THE PARK", "el parque"),
        ("THE OUTSKIRTS", "las afueras"),
        ("THE BANK", "el banco"),
        ("THE SCHOOL", "la escuela"),
        ("THE MUSEUM", "el museo"),
        ("THE CHURCH", "la iglesia"),
    )
    whens = (
        ("YESTERDAY", "ayer"),
        ("A MONTH AGO", "hace un mes"),
        ("LAST WEEK", "la semana pasada"),
        ("LAST YEAR", "el año pasado"),
        ("TWO DAYS AGO", "hace dos dias"),
        ("AN HOUR AGO", "hace una hora"),
    )

    os.system("clear")

    if action == "static":
        while True:
            os.system("clear")
            input("GET READY... GET SET...\n")
            os.system("clear")
            start = time.time()
            for i in range(0, 6):
                print(f"{verbs[i][0]} {nouns[i][0]} {locations[i][0]} {whens[i][0]}")
            input("")
            end = time.time()
            print(f"COMPLETE IN {int(end - start)} SECONDS\n")
            for i in range(0, 6):
                print(f"{verbs[i][1]} {nouns[i][1]} {locations[i][1]} {whens[i][1]}")
            input("")

    elif action == "random":
        v = 0
        v_indices = list(range(0, len(verbs)))
        random.shuffle(v_indices)
        n = 0
        n_indices = list(range(0, len(nouns)))
        random.shuffle(n_indices)
        l = 0
        l_indices = list(range(0, len(locations)))
        random.shuffle(l_indices)
        w = 0
        w_indices = list(range(0, len(whens)))
        random.shuffle(w_indices)
        while True:

            input(f"{verbs[v_indices[v]][0]} {nouns[n_indices[n]][0]} {locations[l_indices[l]][0]} {whens[w_indices[l]][0]}")
            input(f"{verbs[v_indices[v]][1]} {nouns[n_indices[n]][1]} {locations[l_indices[l]][1]} {whens[w_indices[l]][1]}")
            os.system("clear")

            v = v + 1
            if not v < len(verbs):
                v = 0
                v_indices = list(range(0, len(verbs)))
                random.shuffle(v_indices)
            n = n + 1
            if not n < len(nouns):
                n = 0
                n_indices = list(range(0, len(nouns)))
                random.shuffle(n_indices)
            l = l + 1
            if not l < len(locations):
                l = 0
                l_indices = list(range(0, len(locations)))
                random.shuffle(l_indices)
            w = w + 1
            if not w < len(whens):
                w = 0
                w_indices = list(range(0, len(whens)))
                random.shuffle(w_indices)


def practice_estoy(action="random"):
    verbs = (
        ("I AM", "yo estoy"),
        ("YOU ARE", "tu estas"),
        ("HE IS", "él está"),
        ("SHE IS", "ella está"),
        ("WE ARE", "nosotros estamos"),
        ("YOU GUYS ARE", "vosotros estáis"),
        ("THEY ARE", "ellos están"),
        # Extra below here
        ("MIGUEL IS", "miguel está"),
        ("MIGUEL AND MARIA ARE", "miguel y maria están"),
        ("MIGUEL AND I ARE", "miguel y yo estamos"),
    )
    nouns = (
        ("WAITING IN", "esperando en"),
        ("WALKING IN", "caminando en"),
        ("SPEAKING IN", "hablando en"),
        ("VISITING", "visitando"),
        ("BUYING IN", "comprando en"),
        ("WORKING IN", "trabajando en"),
        ("RESTING IN", "descansando en"),
    )
    locations = (
        ("THE MUSEUM", "el museo"),
        ("THE PARK", "el parque"),
        ("THE BANK", "el banco"),
        ("THE CHURCH", "la iglesia"),
        ("THE HOTEL", "el hotel"),
        ("THE STREET", "la calle"),
        ("THE OFFICE", "la oficina"),
    )

    os.system("clear")

    if action == "static":
        while True:
            os.system("clear")
            input("GET READY... GET SET...\n")
            os.system("clear")
            start = time.time()
            for i in range(0, 7):
                print(f"{verbs[i][0]} {nouns[i][0]} {locations[i][0]}")
            input("")
            end = time.time()
            print(f"COMPLETE IN {int(end - start)} SECONDS\n")
            for i in range(0, 7):
                print(f"{verbs[i][1]} {nouns[i][1]} {locations[i][1]}")
            input("")

    elif action == "random":
        v = 0
        v_indices = list(range(0, len(verbs)))
        random.shuffle(v_indices)
        n = 0
        n_indices = list(range(0, len(nouns)))
        random.shuffle(n_indices)
        l = 0
        l_indices = list(range(0, len(locations)))
        random.shuffle(l_indices)
        while True:

            input(f"{verbs[v_indices[v]][0]} {nouns[n_indices[n]][0]} {locations[l_indices[l]][0]}")
            input(f"{verbs[v_indices[v]][1]} {nouns[n_indices[n]][1]} {locations[l_indices[l]][1]}")
            os.system("clear")

            v = v + 1
            if not v < len(verbs):
                v = 0
                v_indices = list(range(0, len(verbs)))
                random.shuffle(v_indices)
            n = n + 1
            if not n < len(nouns):
                n = 0
                n_indices = list(range(0, len(nouns)))
                random.shuffle(n_indices)
            l = l + 1
            if not l < len(locations):
                l = 0
                l_indices = list(range(0, len(locations)))
                random.shuffle(l_indices)


def practice(name):
    if name == "estoy":
        return practice_estoy()
    elif name == "static-estoy":
        return practice_estoy(action="static")
    elif name == "estaba":
        return practice_estaba()
    elif name == "static-estaba":
        while True:
            practice_estaba(action="static")
    elif name == "estare":
        return practice_estare()
    elif name == "static-estare":
        while True:
            practice_estare(action="static")
    elif name == "he-estado":
        while True:
            practice_he_estado(action="static")
    else:
        raise Exception(f"Unknown practice '{name}'")


def main(argv):
    if len(argv) < 2:
        raise Exception("Please specify a practice: estoy")

    practice(argv[1])

    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv))
