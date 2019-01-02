import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import request from 'request';
dotenv.config();

export const env = {
  ...process.env,
};
