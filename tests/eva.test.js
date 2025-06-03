const request = require('supertest');
const app = require('../backend/server');

describe('EVA Endpoint', () => {
  it('should respond asking to create event when message contains "evento"', async () => {
    const res = await request(app)
      .post('/api/eva/message')
      .send({ message: 'Necesito un evento mañana' });
    expect(res.statusCode).toBe(200);
    expect(res.body.response).toBe('¿Quieres crear un evento?');
  });

  it('should respond with default message when no "evento"', async () => {
    const res = await request(app)
      .post('/api/eva/message')
      .send({ message: 'Hola!' });
    expect(res.statusCode).toBe(200);
    expect(res.body.response).toBe('No entendí tu mensaje');
  });
});
