// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

dotenv.config();
const app = express();

app.use(cors({ origin: process.env.FRONTEND_ORIGIN }));
app.use(express.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

const bookingSchema = new mongoose.Schema({
  name: String,
  college: String,
  dayPass: String,
  members: [{ name: String, college: String, contact: String, email: String, events: [String] }],
  referralCode: String,
  totalPrice: Number,
  paymentProof: String,
});

const Booking = mongoose.model('Booking', bookingSchema);

app.post('/api/booking', async (req, res) => {
  const { name, college, dayPass, members,referralCode, totalPrice } = req.body;
  try {
    const newBooking = new Booking({ name, college, dayPass, members,referralCode,  totalPrice });
    await newBooking.save();
    res.status(201).json({ message: 'Booking successful', booking: newBooking });
  } catch (error) {
    res.status(500).json({ message: 'Failed to book', error });
  }
});

app.post('/api/upload-proof', upload.single('proof'), async (req, res) => {
  const { bookingId } = req.body;
  try {
    const booking = await Booking.findById(bookingId);
    if (!booking) return res.status(404).json({ message: 'Booking not found' });

    booking.paymentProof = req.file.filename;
    await booking.save();
    res.status(200).json({ message: 'Proof uploaded successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to upload proof', error });
  }
});

const PORT = process.env.PORT || 3200;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
