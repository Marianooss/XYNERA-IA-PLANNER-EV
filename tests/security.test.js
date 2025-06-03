const request = require('supertest');
const app = require('../backend/server');

describe('Security Endpoint', () => {
  it('should return an array of alerts', async () => {
    const res = await request(app).get('/api/security/alerts');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body[0]).toHaveProperty('id');
    expect(res.body[0]).toHaveProperty('threat');
    expect(res.body[0]).toHaveProperty('level');
  });
});
