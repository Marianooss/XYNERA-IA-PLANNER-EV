const request = require('supertest');
const app = require('../backend/server');

describe('ESG Endpoint', () => {
  it('should calculate carbon footprint correctly', async () => {
    const res = await request(app)
      .post('/api/esg/calculate')
      .send({ energyUsage: 100 });
    expect(res.statusCode).toBe(200);
    expect(res.body.carbonFootprint).toBeCloseTo(50);
    expect(res.body.recommendation).toBe('Reducir uso en 20%');
  });
});
