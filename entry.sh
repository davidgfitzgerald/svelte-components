#!/bin/bash

# Set the environment variables for convenience
PGUSER="${POSTGRES_USER}"
PGPASSWORD="${POSTGRES_PASSWORD}"
PGHOST="${POSTGRES_HOST}"
PGPORT="${POSTGRES_PORT}"
PGDATABASE="${POSTGRES_DB}"

export PGPASSWORD  # psql uses this environment variable for authentication

echo "Attempting to connect to PostgreSQL:"
echo ""
echo -e "\t PGUSER=${POSTGRES_USER}"
echo -e "\t POSTGRES_PASSWORD=[REDACTED]"
echo -e "\t POSTGRES_HOST=${POSTGRES_HOST}"
echo -e "\t POSTGRES_PORT=${POSTGRES_PORT}"
echo -e "\t POSTGRES_DB=${POSTGRES_DB}"
echo ""

echo "Waiting for PostgreSQL ..."

while true; do
    # Try to connect to the database
    if psql -h "$PGHOST" -U "$PGUSER" -d "$PGDATABASE" -p "$PGPORT" -c '\q'; then
        echo "PostgreSQL is ready"
        break
    else
        echo "PostgreSQL is not ready yet. Retrying in 1 second ..."
        sleep 1
    fi
done

# Running migrations
echo "Running migrations"
npm run db:migrate

# Running svelte app
npm run dev