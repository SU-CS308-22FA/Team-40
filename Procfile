web: gunicorn -w 3 -k uvicorn.workers.UvicornWorker myapi:app
release: alembic upgrade head
