/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { model, Schema } from 'mongoose';
import IVote from '@interfaces/vote';

const voteSchema = new Schema<IVote>({
  answer: Number,
  count: Number,
  startDot: Number,
  startLevel: Number,
});

voteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;

    delete returnedObject.passwordHash;
  },
});

const Vote = model<IVote>('Vote', voteSchema);

export default Vote;
