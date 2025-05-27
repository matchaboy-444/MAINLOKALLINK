import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 5000;
const URL = process.env.MONGO_URL;

mongoose.connect(URL).then(() => {
    console.log("server is starting");
    app.listen(PORT, (req, res) => {
        console.log("server is listening to ", PORT);


    })

}).catch((error) => { console.log(error) });
//residents
const ResidentSchema = mongoose.Schema({
    name: String,
    age: Number,
    sex: String,
    address: String,
    employment: Boolean
})


const ResidentModel = mongoose.model('residents', ResidentSchema);

app.get('/residents', (req, res) => {
    ResidentModel.find().then((data) => {
        res.json(data);
    }).then((data) => { console.log(data) }).catch(err => console.log(err));
})

app.get('/residents-query', (req, res) => {

    const { name, ageMin, ageMax, sex, address, employment } = req.query

    const filterQuery = {}
    if (name) {
        filterQuery.name = new RegExp(name, 'i')
    }
    if (address) {
        filterQuery.address = new RegExp(address, 'i')
    }
    if (sex) {
        filterQuery.sex = new RegExp(sex, 'i')
    }

    if (employment === 'yes' || employment === 'true') {
        filterQuery.employment = true;
    } else if (employment === 'no' || employment === 'false') {
        filterQuery.employment = false;
    }

    if (ageMin !== undefined && ageMax !== undefined) {
        filterQuery.age = { $gte: Number(ageMin), $lte: Number(ageMax) }
    }

    ResidentModel.find(filterQuery).then((data) => { res.json(data) }).catch((err) => {
        console.error
        res.json({ message: 'Error' })
    })

})

app.post('/residents', async (req, res) => {
    try {
        const { name, age, sex, address, employed } = req.body;

        const alrExist = await ResidentModel.findOne({ name, age, sex, address });
        if (alrExist) {
            return res.status(409).json({ message: "This one already exist" })
        }


        const newResident = new ResidentModel({
            name,
            age,
            sex,
            address,
            employment: employed === "true" || employed === true,
        });
        await newResident.save();
        res.status(201).json({ message: "Resident saved successfully", resident: newResident });
    } catch (error) {
        console.error("Error saving resident:", error);
        res.status(500).json({ error: "Failed to save resident" });
    }
});

app.put('/residents/:id', async (req, res) => {
    const { id } = req.params;
    const UpdatedData = req.body;

    const updating = await ResidentModel.findByIdAndUpdate(id, UpdatedData, { new: true })
    if (!updating) {
        res.status(404).json({ message: "Not Successful" })
    }
    res.status(200).json({ message: "Resident updated successfully", resident: updating });
})

app.delete('/residents/:id', async (req, res) => {
    const { id } = req.params;

    const deleting = await ResidentModel.deleteOne({ _id: id })
    if (deleting.deletedCount === 0) {
        res.status(404).json({ message: "Not Successful" })
    }
    res.status(200).json({ message: "Resident Deleted successfully", resident: deleting });
})
//announcements

const AnnouncementsSchema = mongoose.Schema({
    date: Date,
    activity: String
})

const AnnouncementsModel = mongoose.model('announcements', AnnouncementsSchema);
//admin page
app.get('/announcements-admin', (req, res) => {
    AnnouncementsModel.find().then((data) => {
        res.json(data);
    }).then((data) => { console.log(data); }).catch((err) => console.log(err));
})
//client page
app.get('/announcements', (req, res) => {
    AnnouncementsModel.find().limit(4).then((data) => {
        res.json(data);
    }).then((data) => { console.log(data); }).catch((err) => console.log(err));
})

app.post('/announcements-admin', async (req, res) => {
    const { activity, date } = req.body;
    try {
        const alrExist = await AnnouncementsModel.findOne({ activity })

        if (alrExist) {
            return res.status(409).json({ message: "This Data is already Exist" });

        }
        const AddAnnouncement = new AnnouncementsModel({
            activity,
            date
        })

        await AddAnnouncement.save().then(() => { console.log("One Announcement added") })
        res.status(200).json({ message: "Announcement Added", announcements: AddAnnouncement })
    }
    catch (err) {
        console.log(err);

    }
})

app.put('/announcements-admin/:id', async (req, res) => {
    const UpdatedData = req.body
    const { id } = req.params

    try {
        const Update = await AnnouncementsModel.findByIdAndUpdate(id, UpdatedData, { new: true })
        if (!Update) {
            return res.status(404).json({ message: "Doesnt exist" })
        }
        res.status(200).json({ message: "Sucessfully Updated" });


    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: "Server Error" })

    }
})
app.delete('/announcements-admin/:id', async (req, res) => {
    const { id } = req.params

    const deletedannouncement = await AnnouncementsModel.deleteOne({ _id: id });
    if (deletedannouncement.deletedCount == 0) {
        return res.status(404).json({ message: "Data error" })
    }

    res.status(200).json({ message: "Data Deleted", announcement: deletedannouncement })
})
//officials

const OfficialsSchema = mongoose.Schema({
    name: String,
    age: Number,
    sex: String,
    address: String,
    yearElected: Number,
    position: String
})

const OfficialsModel = mongoose.model('officials', OfficialsSchema);

app.get('/officials', (req, res) => {
    OfficialsModel.find().then((data) => { res.json(data) }).then((data) => { console.log(data) }).catch(err => console.log(err));
})

app.post('/officials', async (req, res) => {
    const { name, age, sex, address, yearElected, position } = req.body;
    try {

        const findExisting = await OfficialsModel.findOne({ name })
        if (findExisting) {
            return res.status(409).json({ message: "Data already Existing" });
        }

        const AddData = new OfficialsModel({
            name, age, sex, address, yearElected, position
        })
        await AddData.save()
        res.status(200).json({ message: "New Data Added" })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: "Server Error" })
    }
})

app.put("/officials/:id", async (req, res) => {
    const UpdatedData = req.body
    const { id } = req.params
    try {
        const Update = await OfficialsModel.findByIdAndUpdate(id, UpdatedData, { new: true })
        if (!Update) {
            res.status(404).json({ message: "Data doesnt exist" })
        }

        res.status(200).json({ message: "Successfull Updated" })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Server Error" })
    }
})

app.delete('/officials/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const DeletedData = await OfficialsModel.deleteOne({ _id: id });
        if (DeletedData.deletedCount === 0) {
            return res.status(404).json({ message: "Deletion error" })
        }
        res.status(200).json({ message: "Success Deletion" })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Server Error" })
    }
})

const UserSchema = mongoose.Schema({
    user: String,
    password: String
})

const UserModel = mongoose.model('users', UserSchema)
app.get('/user', async (req, res) => {

    await UserModel.find().then((data) => { res.json(data) }).then((data) => { console.log(data) }).catch((err) => {
        console.log(err)
    })
})

app.post('/user', async (req, res) => {
    const { user, password } = req.body
    try {
        const LoginFind = await UserModel.findOne({ user, password })
        if (LoginFind) {
            res.status(200).json({ message: "Success", role: LoginFind.user })
        }
        else {
            res.status(409).json({ message: "Data not found" })
        }
    } catch (err) {
        res.status(500).json({ message: "Server Error" })
    }
})

//request File Methods

const FileRecordSchema = mongoose.Schema(
    {
        name: String,
        filetype: String,
        time: String,
        date: String,
        status: String

    })

const FileRecordModel = mongoose.model('FileRequest', FileRecordSchema);

app.get('/filerecord', async (req, res) => {
    FileRecordModel.find().then((data) => {
        res.json(data)
        console.log(data)
    }).catch(err => console.log(err));
})

app.post('/filerecord', async (req, res) => {
    const { name, filetype, time, date, status } = req.body;

    try {
        const AddData = new FileRecordModel({
            name, filetype, time, date, status
        })

        await AddData.save()
        res.status(200).json({ message: "New Data Added" })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: "Server Error" })

    }
})

app.put('/filerecord/:id', async (req, res) => {
    const StatusUpdate = req.body;
    const { id } = req.params

    try {
        const UpdateStatus = await FileRecordModel.findByIdAndUpdate(id, StatusUpdate, { new: true })
        if (!UpdateStatus) {
            res.status(404).json({ message: "Data doesnt exist" })
        }
        res.status(201).json({ message: "Success" })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: "Server Error" })

    }

})
