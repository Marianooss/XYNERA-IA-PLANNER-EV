const request = require('supertest');
const app = require('../backend/server');

describe('Integration Endpoint', () => {
  it('should sync successfully', async () => {
    const res = await request(app)
      .post('/api/integration/sync')
      .send();
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('Sincronización exitosa');
  });
});
