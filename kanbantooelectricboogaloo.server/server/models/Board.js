import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Board = new Schema(
  {
    profile_id: { type: String, required: true },
    title: { type: String, required: true }
  },
  { timestamps: true, _id: true, toJSON: { virtuals: true } }
)

export default Board
