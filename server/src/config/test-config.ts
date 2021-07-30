/* eslint-disable import/no-extraneous-dependencies */
import 'reflect-metadata';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

import config from './server-config';

let mongo: MongoMemoryServer;

/**
 * Init a new mongo memory server for a test
 *
 * @returns Test config with new mongo memory server uri
 */
async function initDatabase() {
  mongo = await MongoMemoryServer.create();
  config.test.uri = await mongo.getUri();
  return config.test;
}

/**
 * Close any connection for a test
 */
async function closeDatabase() {
  await mongo.stop();
  await mongoose.disconnect();
}

export { initDatabase, closeDatabase };
