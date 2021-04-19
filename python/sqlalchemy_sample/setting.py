from sqlalchemy import *
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import *

DATABASE = 'mysql://%s:%s@%s/%s?charset=utf8' % (
    "root",
    "root",
    "db.local",
    "example",
)

ENGINE = create_engine(
    DATABASE,
    encoding="utf-8",
    echo=True
)

metadata = MetaData()
