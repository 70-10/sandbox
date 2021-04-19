import sys

from models import team, user
from setting import ENGINE, metadata


def main(args):
    metadata.create_all(ENGINE)


if __name__ == "__main__":
    main(sys.argv)
