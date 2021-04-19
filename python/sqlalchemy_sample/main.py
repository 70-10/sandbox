import sys

from models import team, user
from setting import ENGINE, metadata


def main(args):
    for i in metadata.sorted_tables:
        print(i.name)


if __name__ == "__main__":
    main(sys.argv)
