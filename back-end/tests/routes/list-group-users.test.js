import app from '../../app.js';
import request from 'supertest';

describe('List users from a group', () => {
  test('Return an ok if successful', () => {
    request(app)
      .get('/list-group-users')
      .then(response => {
        expect(response.ok).toBe('true')
      })
  })
})