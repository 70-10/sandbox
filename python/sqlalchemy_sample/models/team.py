from datetime import datetime

from setting import metadata
from sqlalchemy.orm import mapper
from sqlalchemy.sql.schema import Column, Table
from sqlalchemy.sql.sqltypes import DateTime, Integer, String


class Team:
    def __init__(self, name) -> None:
        self.name = name
        self.created_at = datetime.now()


team_table = Table("teams", metadata,
                   Column("id", Integer, nullable=False,
                          primary_key=True, autoincrement=True),
                   Column("name", String(100), nullable=False),
                   Column("created_at", DateTime, nullable=False)
                   )

mapper(Team, team_table, properties={
    "id": team_table.c.id,
    "name": team_table.c.name,
    "created_at": team_table.c.created_at
})

Team.__table__ = team_table
