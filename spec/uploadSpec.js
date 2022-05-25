const {uploadFile, deleteFile} = require('../src/helpers.js');

const {app} = require('../app.js');

it('expect deleteFile to be truthy', () => {
    expect(deleteFile("41607.jpg")).toBeTruthy();
});

it('expect uploadFile to be truthy', async () => {
  const {Blob} = require('buffer');
  let blob = new Blob([""], { type: 'text/html' });
  blob["lastModifiedDate"] = "";
  blob["name"] = "filename";
  blob["originalname"] = "test file name";
  let fake = blob;

  expect(await uploadFile(fake)).toBeTruthy();
});

const request = require('supertest');

describe('Test endpoint responses', () => {
  it('post the api endpoint', async (done) => {
    const response = await request(app)
        .delete('/uploads')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send({ name: "41607.jpg" })
    expect(response.status).toBe(200);
    done();
  }
  )
});
