import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Comment = new Schema(
  {
    // boardId: { type: String, ref: 'Board', required: true },
    creatorId: { type: String, ref: 'Profile', required: true },
    listId: { type: String, required: true },
    taskId: { type: String, required: true },
    body: { type: String, required: true }
  },
  { timestamps: true, _id: true, toJSON: { virtuals: true } }
)

export default Comment
