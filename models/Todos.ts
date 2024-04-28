const mongoose = require!('mongoose')

const TodosSchema = new mongoose.Schema({
    title: { type: String, required: true },
    isComplete: { type: Boolean, default: false },
    user: { type: mongoose.Types.ObjectId, ref: 'User' }
}, { timestamps: true })

const TodosModel = mongoose.models.Todo || mongoose.model('Todo', TodosSchema)

export default TodosModel;