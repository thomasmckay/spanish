import os
import sys
import words


def study(argv):

    print(words.categories)

    v = words.verbs[0]

    if len(argv) > 1 and argv[1] != "all":
        names = argv[1].split(",")
        for name in names:
            assert name in words.categories
    else:
        names = words.categories

    while True:
        os.system("clear")

        for c in names:
            print(f"{c.upper()}\n")

            v.e()
            lines = getattr(v, c)(show_all=True)
            for line in lines:
                print(f"{line}")

            input("")

            v.s()
            lines = getattr(v, c)(show_all=True)
            for line in lines:
                print(f"{line}")

            input("")

            os.system("clear")


if __name__ == '__main__':
    sys.exit(study(sys.argv))
