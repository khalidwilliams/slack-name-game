import app from '../../app.js';
import request from 'supertest';

describe('Successfully get user', () => {
  test('Should return a status of 200 if successful', () => {
    return request(app)
      .get('/user-data/UFDTPDFFF')
      .then(response => {
        expect(response.statusCode).toBe(200);
      })
  })

  test('Should return a user\'s profile if successful', () => {
    return request(app)
      .get('/user-data/UFDTPDFFF')
      .then(response => {
        // console.log(response.body)
        expect(response.body.profile).toBeTruthy();
        expect(response.body.profile.real_name).toBe('Brandy Mello');
      })
  })
})
