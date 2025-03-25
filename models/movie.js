import mongoose from "mongoose"

const movieSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        plot: {
            type: String,
            required: true,
        },
        runtime: {
            type: Number,
            required: true,
        },
        rated: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
)

movieSchema. index({title: 1});
movieSchema.index({plot: 1});
movieSchema. index({runtime: 1});
movieSchema.index({rated: 1});

export default mongoose.model("Movie", movieSchema);