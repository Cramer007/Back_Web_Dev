import mongoose from 'mongoose'

const artworkSchema = new mongoose.Schema({
  title: String,
  artist: String,
  image: String,
  price: Number,
  likedBy: [String], // tableau d'usernames
})

const Artwork = mongoose.model('Artwork', artworkSchema)

export default Artwork
