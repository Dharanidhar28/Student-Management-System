
from pydantic import BaseModel, ConfigDict, EmailStr, Field
from datetime import datetime

class StudentCreate(BaseModel):
    name: str = Field(json_schema_extra={"example": "Rahul Sharma"})
    email: EmailStr = Field(json_schema_extra={"example": "example@example.com"})
    age: int = Field(ge=0, json_schema_extra={"example": 1})
    course: str = Field(json_schema_extra={"example": "Computer Science"})
   

class Student(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    name: str
    email: EmailStr
    age: int
    course: str
    enrollment_date: datetime

class studentListResponse(BaseModel):
    students: list[Student]
    total: int  

class UserLogin(BaseModel):
    email: str
    password: str
