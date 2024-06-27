export const RMQ_OPTIONS = {
  urls: ['amqp://admin:admin@localhost:5672'],
  queueOptions: {
    durable: false,
  },
};

export const SERVICES = {
  USER: {
    name: 'USER_SERVICE',
    queue: 'user',
  },
  SCHOOL: {
    name: 'SCHOOL_SERVICE',
    queue: 'school',
  },
};
