import app from '../../app.js';
import request from 'supertest';

describe('List users from a group', () => {
  test('Return a group\'s users if the group exists', () => {
    request(app)
      .get('/list-group-users/SJ1KAQA56')
      .then(response => {
        expect(response.ok).toBe('true')
        .done();
      })
  });

  test('Return a false `ok` property if group does not exist', () => {
    request(app)
      .get('list-group-users/noGroup')
      .then(repsonse => {
        expect(response.ok).toBe('false')
        .done()
      })
  })
})
