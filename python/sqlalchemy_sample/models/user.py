from datetime import datetime

from setting import metadata
from sqlalchemy.orm import mapper, relationship
from sqlalchemy.sql.schema import Column, ForeignKey, Table
from sqlalchemy.sql.sqltypes import DateTime, Integer, String

from models.team import Team


class User:
    def __init__(self, name: str, age: int, team: Team) -> None:
        self.name = name
        self.age = age
        self.team = team
        self.created_at = datetime.now()


user_table = Table("users", metadata,
                   Column("id", Integer, nullable=False,
                          primary_key=True, autoincrement=True),
                   Column("name", String(100), nullable=False),
                   Column("age", Integer, nullable=False),
                   Column("team_id", ForeignKey("teams.id"), nullable=False),
                   Column("created_at", DateTime, nullable=False)
                   )

mapper(User, user_table, properties={
    "id": user_table.c.id,
    "name": user_table.c.name,
    "age": user_table.c.age,
    "team": relationship(Team),
    "created_at": user_table.c.created_at
})

User.__table__ = user_table
