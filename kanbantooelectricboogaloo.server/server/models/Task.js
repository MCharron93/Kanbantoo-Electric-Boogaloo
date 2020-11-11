import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Task = new Schema(
  {
    // Consider adding boardId to utilitze for making an API request once, and then loading the tasks into the AppState
    creatorId: { type: String, ref: 'Profile', required: true },
    listId: { type: String, required: true },
    body: { type: String, required: true }
  },
  { timestamps: true, _id: true, toJSON: { virtuals: true } }
)

export default Task
