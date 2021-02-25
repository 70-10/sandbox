import logging
from logging import StreamHandler

stream_handler = StreamHandler()
stream_handler.setLevel(logging.INFO)
stream_handler.setFormatter(logging.Formatter(
    "%(asctime)s %(name)s [%(levelname)s] %(funcName)s: %(message)s"))
logging.basicConfig(level=logging.NOTSET, handlers=[stream_handler])

logging.info("Test")

logger = logging.getLogger(__name__)


def test_func():
    logger.info("Test")


if __name__ == "__main__":
    logger.info("test")
    test_func()
