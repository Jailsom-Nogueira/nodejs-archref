import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import fileUpload from 'express-fileupload';

import { AddressInfo } from 'net';
import { userRouter } from './routes/userRouter';

dotenv.config();
const app = express();

app.use(express.json());
app.use(fileUpload());
app.use(cors());

app.use('/user', userRouter);

// Remote access
// const server = app.listen(process.env.PORT, () => {
//   if (server) {
//     const address = server.address() as AddressInfo;
//   } else {
//     console.error(`Failed to run the server.`);
//   }
// });
// Local access
const server = app.listen(3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running at http://localhost:${address.port}`);
  } else {
    console.error(`Failed to run the server.`);
  }
});