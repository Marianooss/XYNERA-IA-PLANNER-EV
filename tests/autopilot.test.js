const request = require('supertest');
const app = require('../backend/server');

describe('Autopilot Endpoint', () => {
  it('should optimize an SQL query', async () => {
    const res = await request(app)
      .post('/api/autopilot/optimize')
      .send({ query: 'SELECT * FROM users' });
    expect(res.statusCode).toEqual(200);
    expect(res.body.optimizedQuery).toContain('SELECT id, name');
  });
});
