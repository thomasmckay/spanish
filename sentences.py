import os
import random
import sys
import time

import words


sentences = (
    (
        "¿Coges estas bolsas y las llevas a la cocina?",
        "Can you take these bags and carry them to the kitchen?",
    ),
    (
        "Este queso es muy ligero, pero no lo quiero.",
        "This cheese is very light, but I don't want it.",
    ),
    (
        "¿Me traes la comida del gato?",
        "Can you bring me the cat's food.",
    ),
    (
        "Hay demasiados platos en la cocina.",
        "There are too many plates in the kitchen.",
    ),
    Ella no tiene tiempo para sentarse.
    She doesn't have time to sit down.
    Por supuesto, ¡lo hago siempre!
    Of course, I always do it!
    ¿Me ayudas a poner esta mesa allá?
    Can you help me put this table over there?
    ¿Dónde está el restaurante más cercano?
    Where is the closest restaurant?
    ¿Cómo llego a la librería?
    How do I get to the bookstore?
    
)


def main(argv):
    while True:
        i = random.randint(0, len(sentences) - 1)
        os.system("clear")

        print(f"{sentences[i][1]}")
        input("")

        print(f"{sentences[i][0]}")
        input("")


if __name__ == '__main__':
    sys.exit(main(sys.argv))
