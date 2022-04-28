import os
import random
import sys
import time


class Where:
    def __init__(self, spanish, english):
        self.spanish = spanish
        self.english = english

    is_spanish = True
    def e(self):
        self.is_spanish = False
        return self
    def s(self):
        self.is_spanish = True
        return self

    def with_verb(self, verb):
        #???? handle 'visitar' (no 'en')
        return [self.spanish, self.english]


class When:
    def __init__(self, spanish, english):
        self.spanish = spanish
        self.english = english


class Verb:
    def __init__(self, spanish, english, english_ing=None, english_past=None, english_present=None):
        self.spanish = spanish
        self.english = english
        self.english_ing = english_ing or f"{english}ing"
        self.english_past = english_past or f"{english}ed"
        self.english_present = english_present

        if self.english_present is not None:
            assert len(self.english_present) == 6

        if spanish.endswith("ar"):
            root = spanish[:-2]
            self.gerund = f"{root}ando"
            self.past_participle = f"{root}ado"
            self.past = (
                f"{root}aba",
                f"{root}abas",
                f"{root}a",
                f"{root}amos",
                f"{root}ais",
                f"{root}an",
            )
            self.future = (
                f"{spanish}é",
                f"{spanish}ás",
                f"{spanish}á",
                f"{spanish}emos",
                f"{spanish}eís",
                f"{spanish}án",
            )
        elif spanish.endswith("er"):
            root = spanish[:-2]
            self.gerund = f"{root}iendo"
            self.past_participle = f"{root}ido"
            self.past = (
                f"{root}aba",
                f"{root}abas",
                f"{root}a",
                f"{root}amos",
                f"{root}ais",
                f"{root}an",
            )
            self.future = (
                f"{spanish}é",
                f"{spanish}ás",
                f"{spanish}á",
                f"{spanish}emos",
                f"{spanish}eís",
                f"{spanish}án",
            )
        else:
            raise Exception(f"unknown verb ending: {self.spanish}")

    is_spanish = True
    def e(self):
        self.is_spanish = False
        return self
    def s(self):
        self.is_spanish = True
        return self

    whos = ("yo", "tu", "el", "ella", "nosotros", "vosotros", "ellos")

    YO = 0
    TU = 1
    EL = 2
    NOSOTROS = 3
    VOSOTROS = 4
    ELLOS = 5


    def randomize(func):
        def wrapped_func(self, *args, **kwargs):
            if len(args) == 0 or (len(args) == 1 and args[0] == None):
                who = random.randint(0, len(self.whos) - 1)
                r = []
                self.s()
                r.append(func(self, self.whos[who]))
                self.e()
                r.append(func(self, self.whos[who]))
                return r
            elif len(args) == 1 and type(args[0]) == list:
                who = random.randint(0, len(args) - 1)
                r = []
                self.s()
                r.append(func(self, args[0][who]))
                self.e()
                r.append(func(self, args[0][who]))
                return r
            else:
                r = []
                self.s()
                r.append(func(self, *args, **kwargs))
                self.e()
                r.append(func(self, *args, **kwargs))
                return r
        return wrapped_func



    def show_all(func):
        def wrapped_func(self, *args, **kwargs):
            if ("show_all" in kwargs and kwargs["show_all"] == True):
                r = []
                for who in range(0, len(self.whos)):
                    r.append(func(self, self.whos[who]))
                return r
            else:
                return func(self, *args, **kwargs)
        return wrapped_func


    @show_all
    @randomize
    def will(self, who=None):
        if self.is_spanish:
            match who:
                case "yo":
                    return f"yo {self.future[self.YO]}"
                case "tu":
                    return f"tu {self.future[self.TU]}"
                case "el":
                    return f"él {self.future[self.EL]}"
                case "ella":
                    return f"él {self.future[self.EL]}"
                case "nosotros":
                    return f"nosotros {self.future[self.NOSOTROS]}"
                case "vosotros":
                    return f"vosotros {self.future[self.VOSOTROS]}"
                case "ellos":
                    return f"ellos {self.future[self.ELLOS]}"
                case _:
                    raise Exception(f"unknown {who}")
        else:
            match who:
                case "yo":
                    return f"i will {self.english}"
                case "tu":
                    return f"you will {self.english}"
                case "el":
                    return f"he will {self.english}"
                case "ella":
                    return f"she will {self.english}"
                case "nosotros":
                    return f"we will {self.english}"
                case "vosotros":
                    return f"y'all will {self.english}"
                case "ellos":
                    return f"they will {self.english}"
                case _:
                    raise Exception(f"unknown {who}")


    @show_all
    @randomize
    def will_be(self, who=None):
        if self.is_spanish:
            match who:
                case "yo":
                    return f"yo estaré {self.gerund}"
                case "tu":
                    return f"tu estarás {self.gerund}"
                case "el":
                    return f"él estará {self.gerund}"
                case "ella":
                    return f"ella estará {self.gerund}"
                case "nosotros":
                    return f"nosotros estaremos {self.gerund}"
                case "vosotros":
                    return f"vosotros estareís {self.gerund}"
                case "ellos":
                    return f"ellos estarán {self.gerund}"
                case _:
                    raise Exception(f"unknown {who}")
        else:
            match who:
                case "yo":
                    return f"i will be {self.english_ing}"
                case "tu":
                    return f"you will be {self.english_ing}"
                case "el":
                    return f"he will be {self.english_ing}"
                case "ella":
                    return f"she will be {self.english_ing}"
                case "nosotros":
                    return f"we will be {self.english_ing}"
                case "vosotros":
                    return f"y'all will be {self.english_ing}"
                case "ellos":
                    return f"they will be {self.english_ing}"
                case _:
                    raise Exception(f"unknown {who}")

    @show_all
    @randomize
    def was_be(self, who=None):
        if self.is_spanish:
            match who:
                case "yo":
                    return f"yo estaba {self.gerund}"
                case "tu":
                    return f"yo estabas {self.gerund}"
                case "el":
                    return f"él estaba {self.gerund}"
                case "ella":
                    return f"ella estaba {self.gerund}"
                case "nosotros":
                    return f"nosotros estabamos {self.gerund}"
                case "vosotros":
                    return f"vosotros estabais {self.gerund}"
                case "ellos":
                    return f"ellos estaban {self.gerund}"
                case _:
                    raise Exception(f"unknown {who}")
        else:
            match who:
                case "yo":
                    return f"i was {self.english_ing}"
                case "tu":
                    return f"you were {self.english_ing}"
                case "el":
                    return f"he was {self.english_ing}"
                case "ella":
                    return f"she was {self.english_ing}"
                case "nosotros":
                    return f"we were {self.english_ing}"
                case "vosotros":
                    return f"y'all were {self.english_ing}"
                case "ellos":
                    return f"they were {self.english_ing}"
                case _:
                    raise Exception(f"unknown {who}")


    @show_all
    @randomize
    def was(self, who=None):
        if self.is_spanish:
            match who:
                case "yo":
                    return f"yo {self.past[self.YO]}"
                case "tu":
                    return f"tu {self.past[self.TU]}"
                case "el":
                    return f"él {self.past[self.EL]}"
                case "ella":
                    return f"ella {self.past[self.EL]}"
                case "nosotros":
                    return f"nosotros {self.past[self.NOSOTROS]}"
                case "vosotros":
                    return f"vosotros {self.past[self.VOSOTROS]}"
                case "ellos":
                    return f"ellos {self.past[self.ELLOS]}"
                case _:
                    raise Exception(f"unknown {who}")
        else:
            match who:
                case "yo":
                    return f"i {self.english_past}"
                case "tu":
                    return f"you {self.english_past}"
                case "el":
                    return f"he {self.english_past}"
                case "ella":
                    return f"she {self.english_past}"
                case "nosotros":
                    return f"we {self.english_past}"
                case "vosotros":
                    return f"y'all {self.english_past}"
                case "ellos":
                    return f"they {self.english_past}"
                case _:
                    raise Exception(f"unknown {who}")


    @show_all
    @randomize
    def have_been_be(self, who=None):
        if self.is_spanish:
            match who:
                case "yo":
                    return f"yo he estado {self.gerund}"
                case "tu":
                    return f"tu has estado {self.gerund}"
                case "el":
                    return f"él ha estado {self.gerund}"
                case "ella":
                    return f"ella ha estado {self.gerund}"
                case "nosotros":
                    return f"nosotros hemos estado {self.gerund}"
                case "vosotros":
                    return f"vosotros habeis estado {self.gerund}"
                case "ellos":
                    return f"ellos han estado {self.gerund}"
                case _:
                    raise Exception(f"unknown {who}")
        else:
            match who:
                case "yo":
                    return f"i have been {self.english_ing}"
                case "tu":
                    return f"you have been {self.english_ing}"
                case "el":
                    return f"he has been {self.english_ing}"
                case "ella":
                    return f"she has been {self.english_ing}"
                case "nosotros":
                    return f"we have been {self.english_ing}"
                case "vosotros":
                    return f"y'all have been {self.english_ing}"
                case "ellos":
                    return f"they have been {self.english_ing}"
                case _:
                    raise Exception(f"unknown {who}")


    @show_all
    @randomize
    def have_past(self, who=None):
        if self.is_spanish:
            match who:
                case "yo":
                    return f"yo he {self.past_participle}"
                case "tu":
                    return f"tu has {self.past_participle}"
                case "el":
                    return f"él ha {self.past_participle}"
                case "ella":
                    return f"ella ha {self.past_participle}"
                case "nosotros":
                    return f"nosotros hemos {self.past_participle}"
                case "vosotros":
                    return f"vosotros habeis {self.past_participle}"
                case "ellos":
                    return f"ellos han {self.past_participle}"
                case _:
                    raise Exception(f"unknown {who}")
        else:
            match who:
                case "yo":
                    return f"i have {self.english_past}"
                case "tu":
                    return f"you have {self.english_past}"
                case "el":
                    return f"he has {self.english_past}"
                case "ella":
                    return f"she has {self.english_past}"
                case "nosotros":
                    return f"we have {self.english_past}"
                case "vosotros":
                    return f"y'all have {self.english_past}"
                case "ellos":
                    return f"they have {self.english_past}"
                case _:
                    raise Exception(f"unknown {who}")


verbs = [
    Verb("caminar", "walk"),
    Verb("correr", "run", "running", "ran", english_present=("run", "run", "runs", "run", "run", "run")),
    Verb("esperar", "wait"),
    Verb("trabajar", "work"),
]

wheres = [
    Where("en casa", "at home"),
]

past_whens = [
    When("hace dos días", "two days ago"),
    When("ayer", "yesterday"),
    When("anteayer", "the day before yesterday"),
    When("hace un mes", "a month ago"),
    When("hace unos días", "a day ago"),
    When("hace unas horas", "an hour ago"),
    When("la semana pasada", "last week"),
    When("el año pasado", "last year"),
    When("el mes pasado", "last month"),
    When("el fin de semana pasado", "last weekend"),
]
future_whens = [
    When("mañana", "tomorrow"),
    When("pasado mañana", "the day after tomorrow"),
    When("el proximo mes", "next month"),
    When("el proximo viernes", "next friday"),
    When("en dos días", "in two days"),
    When("la semana que viene", "the coming week"),
    When("el mes que viene", "the coming month"),
    When("el año que viene", "the coming year"),
    When("tarde en la noche", "late in the night"),
]

whos = ("yo", "tu", "el", "ella", "nosotros", "vosotros", "ellos")


categories = ("will", "will_be", "was_be", "have_been_be", "have_past")


def print_spanish_english(verb, where=None, when=None):
    os.system("clear")
    print(f"{verb[1]} {where[1] if where else ''} {when.english if when else ''}")
    input("")
    print(f"{verb[0]} {where[0] if where else ''} {when.spanish if when else ''}")
    input("")


def main(argv):
    global categories, verbs, wheres, whos

    # ???? 'was' is not correct
    if len(argv) > 1 and argv[1] != "all":
        names = argv[1].split(",")
        for name in names:
            assert name in categories
        categories = names

    if len(argv) > 2 and argv[2] != "all":
        names = argv[2].split(",")
        verbs = list(filter(lambda v: v.spanish in names, verbs))

    if len(argv) > 3 and argv[3] != "all":
        names = argv[3].split(",")
        whos = list(filter(lambda w: w in names, whos))
    else:
        whos = [None]

    show_where = False
    show_when = False

    while True:
        c = categories[random.randint(0, len(categories) - 1)]
        v = verbs[random.randint(0, len(verbs) - 1)]
        w = wheres[random.randint(0, len(wheres) - 1)].with_verb(v)
        s = whos[random.randint(0, len(whos) - 1)]

        if c in ("will", "will_be"):
            t = future_whens[random.randint(0, len(future_whens) - 1)]
        elif c in ("was_be", "have_been_be", "have_past"):
            t = past_whens[random.randint(0, len(past_whens) - 1)]
        else:
            raise Exception(f"unknown category: {categories}")

        os.system("clear")
        r = getattr(v, c)(s)
        print_spanish_english(r)
        print_spanish_english(r, w)
        print_spanish_english(r, w, t)

    print(v.e().will(show_all=True))
    print(v.e().will_be(show_all=True))
    print(v.e().was_be(show_all=True))
    print(v.e().was(show_all=True))
    print(v.e().have_been_be(show_all=True))


    v = Verb("correr", "run", "running", "ran", english_present=("run", "run", "runs", "run", "run", "run"))

    print(v.e().will(show_all=True))
    print(v.e().will_be(show_all=True))
    print(v.e().was_be(show_all=True))
    print(v.e().was(show_all=True))
    print(v.e().have_been_be(show_all=True))


if __name__ == '__main__':
    sys.exit(main(sys.argv))
