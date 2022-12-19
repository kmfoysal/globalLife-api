import mongoose from "mongoose";

const EventSchema = new mongoose.Schema(
    {
        // userId: {
        //     type: String,
        //     required: true,
        // },
        // username: {
        //     type: String,
        //     required: true,
        // },
        title: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            default: "",
        },
        streetAddress: {
            type: String,
            default: "",
        },
        apartment: {
            type: String,
            default: "",
        },
        city: {
            type: String,
            default: "",
        },
        countryState: {
            type: String,
            default: "",
        },
        postalCode: {
            type: String,
            default: "",
        },
        country: {
            type: String,
            default: "",
        },
        startDate: {
            type: String,
            default: "",
        },
        endDate: {
            type: String,
            default: "",
        },
        startTime: {
            type: String,
            default: "",
        },
        endTime: {
            type: String,
            default: "",
        },
        cost: {
            type: String,
            default: "",
        },
        videoLink: {
            type: String,
            default: "",
        },
        tags: {
            type: [String],
            default: [],
        },
        photos: {
            type: [String],
            default: [],
            required: false,
        },
    },
    { timestamps: true }
);

export default mongoose.model("Event", EventSchema);
