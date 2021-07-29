/* eslint-disable import/no-extraneous-dependencies */
import 'reflect-metadata';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

import config from './server-config';

let mongo: MongoMemoryServer;

async function initDatabase() {
  mongo = await MongoMemoryServer.create();
  config.test.uri = await mongo.getUri();
  return config.test;
}

async function closeDatabase() {
  await mongo.stop();
  await mongoose.disconnect();
}

export { initDatabase, closeDatabase };
