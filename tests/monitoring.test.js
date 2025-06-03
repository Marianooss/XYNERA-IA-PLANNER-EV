const request = require('supertest');
const app = require('../backend/server');

describe('Monitoring Endpoint', () => {
  it('should return a prediction', async () => {
    const res = await request(app).get('/api/monitoring/predict');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('prediction');
  });
});
