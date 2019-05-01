import app from '../../app.js';
import request from 'supertest';

describe('Server ping', () => {
  test('recieve a pong', () => {
    return request(app)
      .get('/ping')
      // .expect(200)
      .then(response => {
        // console.log(response)
        expect(response.text).toBe('pong')
      })
  })
})