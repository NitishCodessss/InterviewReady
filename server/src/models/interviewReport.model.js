import mongoose from "mongoose";

/**
 * Job description
 * resume
 * self description
 * 
 * Result scrore
 * 
 * technical question 
 * behavioural question
 * skill gap
 * 
 * prepration plan
 */
const technicalQuestionSchema = new mongoose.Schema({
    question:{
        type: String,
        required: [true, "Technical Question is required"]
    },
    intention:{
        type: String,
        required: [true, "Intention of the question is required"]
    },
    answer: {
        type: String,
        reuired:[true, "Answer is required"]
    }

},{_id: false})

const behaviouralQuestionSchema = new mongoose.Schema({
     question:{
        type: String,
        required: [true, "Behavioural Question is required"]
    },
    intention:{
        type: String,
        required: [true, "Intention of the question is required"]
    },
    answer: {
        type: String,
        reuired:[true, "Answer is required"]
    }
},{_id: false})

const skillGapSchema = new mongoose.Schema({
    skill: {
        type:String,
        required: [true, "Skill is required"]
    },
    severity:{
        type:String,
        required: [true, "Severity is required"],
        enum: ['low', 'medium', 'high']
    }
},{_id: false})

const preparationPlanSchema = new mongoose.Schema({
    day:{
        type:Number,
        required:[true, "Day is required"]
    },
    focus:{
        type:String,
        required:[true, "focus is required"]
    },
    tasks:[{
        type:String,
        required:[true, "Tasks is required"]
    }]
})
const interviewReportSchema = new mongoose.Schema({
    jobDescription: {
        type: String,
        required: [true, "Job Description is required"]
    },
    resume:{
        type:String
    },
    selfDescription: {
        type:String
    },

    resultScore:{
        type:Number,
        min:0,
        max:100 
    },
    technicalQuestion: [technicalQuestionSchema],
    behavioralQuestion:[behaviouralQuestionSchema],
    skillGap:[skillGapSchema],
    preparationPlan:[preparationPlanSchema]
})

const interviewReportModel = mongoose.Model("InterviewReport", interviewReportSchema);
export default interviewReportModel;