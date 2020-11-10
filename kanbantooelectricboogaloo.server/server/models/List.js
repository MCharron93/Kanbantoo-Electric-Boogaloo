import mongoose from 'mongoose'
const Schema = mongoose.Schema

const List = new Schema(
  {
    creatorId: { type: String, ref: 'Profile', required: true },
    boardId: { type: String, ref: 'Board', required: true },
    title: { type: String, required: true }
  },
  { timestamps: true, _id: true, toJSON: { virtuals: true } }
)

export default List
