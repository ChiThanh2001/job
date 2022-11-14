import Job from '../models/Job.js'
import { StatusCodes } from 'http-status-codes'
import { BadRequestError, NotFoundError, UnAuthenticatedError } from '../errors/index.js'
import mongoose from 'mongoose'
import checkPermission from '../utils/checkPermission.js'

const createJob = async (req, res) => {
    const { company, position } = req.body
    if (!company || !position) {
        throw new BadRequestError('Please provide all values')
    }
    req.body.createdBy = req.user.userId
    const job = await Job.create(req.body)
    res.status(StatusCodes.OK).json({ job })
}

const getAllJobs = async (req, res) => {
    const jobs = await Job.find({ createBy: Object(req.user.userId) })

    // console.log(jobs)
    res.status(StatusCodes.OK).json({ jobs, totalJobs: jobs.length, numOfPages: 1 })
}

const updateJob = async (req, res) => {
    const { id: jobId } = req.params
    const { position, company } = req.body

    if (!position || !company) {
        throw new BadRequestError('Please provide all values')
    }

    const job = await Job.findOne({ _id: jobId })

    if (!job) {
        throw new NotFoundError(`No job with id ${jobId}`)
    }

    checkPermission(req.user, job.createdBy)

    const updatedJob = await Job.findOneAndUpdate({ _id: jobId }, req.body, {
        new: true,
        runValidators: true
    })

    res.status(StatusCodes.OK).json({ updatedJob })
}


const deleteJob = async (req, res) => {
    const { id: jobId } = req.params

    const job = await Job.findOne({ _id: jobId })

    if (!job) {
        throw new NotFoundError(`No job with id ${jobId}`)
    }

    checkPermission(req.user, job.createdBy)

    job.remove()
    res.status(StatusCodes.OK).json({ msg: 'Success! Job removed' })
}

const showStats = async (req, res) => {
    let stats = await Job.aggregate([
        { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },
        { $group: { _id: '$status', count: { $sum: 1 } } },
    ])

    stats = stats.reduce((acc, curr) => {
        const { _id: title, count } = curr
        acc[title] = count
        return acc
    }, {})

    const defaultStats = {
        pending: stats.pending || 0,
        interview: stats.interview || 0,
        declined: stats.declined || 0,
    }

    let monthlyApplications = []

    res.status(StatusCodes.OK).json({ defaultStats,monthlyApplications })
}


export { createJob, deleteJob, getAllJobs, updateJob, showStats }