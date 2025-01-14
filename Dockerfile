
# -------- #
# app base #
# -------- #
FROM node:18-alpine AS app_base
WORKDIR /base
COPY package.json .

# Install node_modules
RUN npm install

# --- #
# app #
# --- #

# Base image for Node.js
FROM app_base AS app

# Port on which app will run
EXPOSE 5173

# Build arguments
ARG POSTGRES_PASSWORD
ARG POSTGRES_HOST
ARG POSTGRES_USER
ARG POSTGRES_PORT
ARG POSTGRES_DB

# Env vars
ENV POSTGRES_USER=${POSTGRES_USER}
ENV POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
ENV POSTGRES_DB=${POSTGRES_DB}
ENV POSTGRES_HOST=${POSTGRES_HOST}
ENV POSTGRES_PORT=${POSTGRES_PORT}

# Work from /app
WORKDIR /app

# Copy dependencies from app_base
COPY --from=app_base /base/node_modules ./node_modules

# Copy required files
COPY ./drizzle ./drizzle
COPY ./src ./src
COPY ./static ./static

COPY drizzle.config.js .
COPY entry.sh .
COPY eslint.config.js .
COPY jsconfig.json .
COPY package.json .
COPY postcss.config.js .
COPY svelte.config.js .
COPY tailwind.config.js .
COPY vite.config.js .

# Install PostgreSQL client
RUN apk add --no-cache postgresql-client

# Verify installation
RUN psql --version

# Build
# RUN npm run build

# Prevents warning of missing .svelte-kit/ dir
RUN npm run check

# Run
ENTRYPOINT [ "sh", "entry.sh" ]