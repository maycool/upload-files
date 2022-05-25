# Welcome to the Upload Files API project!

This is a `npm` workspaces built with javaScript and containing multiple packages.

## Local Development

Before getting started, you must copy the `.env.example` file in the project root to your own `.env` file which you will not be committing to the git repository. The values provided in the example file are those of the project test environment by default. You most probably will not need to modify these values to get started.

The first thing you should do is [install Docker](https://docs.docker.com/get-docker/) on your machine. Then, in order to create the docker containers for the database you should run `npm db:init` from the project root. This should pull the required images and create one containers for you. Note that values from the `.env` file you created earlier were used to configure those containers.

If this is your first run, you probably would want to run the following commands from the project root before you start development:

## Testing

In order to test functions and api response run `npm run test`.
## API

### Upload file API
This API to upload file to GCS bucket
```
{{baseUrl}}uploads  POST
```
```
{
    "status": "SUCCESS",
    "serverMessage": "UPLOAD_FILE",
    "userMessage": "Upload was successful.",
    "items": "https://storage.googleapis.com/extreme-solution-task-bucket/41607.jpg"
}
```

### Delete file API
This API to delete file from GCS bucket
```
{{baseUrl}}uploads  DELETE
```
```
{
    "name": "41607.jpg"
}
```
```
{
    "status": "SUCCESS",
    "serverMessage": "DELETE_FILE",
    "userMessage": "Delete was successful."
}
```
