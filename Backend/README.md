# Note App With Backend

A backend foundation for a note-taking application, built around a small REST API and MongoDB persistence.

## Planned API

| Method | Endpoint | Purpose |
| --- | --- | --- |
| `GET` | `/notes` | List notes |
| `POST` | `/notes` | Create a note |
| `PATCH` | `/notes/:id` | Update a note |
| `DELETE` | `/notes/:id` | Delete a note |

## Technology

- Node.js
- Express
- MongoDB with Mongoose

## Status

This repository is currently the project home and initial documentation for the notes backend. Application source, database models, environment configuration, and tests will be added as development continues.

## Local setup

The implementation will use environment variables for configuration. Never commit MongoDB connection strings, passwords, API keys, or other secrets.

From the repository root, install and start the backend with:

```bash
cd Backend
npm install
npm start
```

The backend loads environment variables from the root `.env` file.
The API is intended to run locally on port `3000` by default.

## License

No license has been selected yet.