FROM python:3.7.3-alpine

# stop generationg byte codes (.pyc)
ENV PYTHONDONTWRITEBYTECODE 1
# to disable output buffering
ENV PYTHONUNBUFFERED 1

RUN mkdir -p /app/src

WORKDIR /app
COPY ./requirements.txt /app
COPY ./manage.py /app
COPY ./src /app/src

RUN pip install -r requirements.txt

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]