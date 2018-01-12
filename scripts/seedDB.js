const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/musictoyourears",
  {
    useMongoClient: true
  }
);

const instructorSeed = [
	{
		name: "Rob Mayzes",
		about: "Professional mixer and musician. Founder of Musician on a Mission, an online learning resource for musicians and home recordists with over 25,000 subscribers. Successful entrepreneur and co-founder of Sweet Marketing, a global social media management agency. I worked in a range of studios in London thorough my teenage years and early twenties, both as an professional engineer and musician... But then my interests shifted to building businesses, and eventually teaching! So, now I want to help YOU to achieve your biggest music and business goals. Let's do this :)",
		imgUrl: "https://www.udemy.com/music-production-in-logic-pro-x-course/",
		date: new Date(Date.now())
	},
	{
		name: "Tyler Larson",
		about: "Tyler Larson (born May 30, 1989) is a musician of many influences. With over fifteen years experience playing the guitar, Tyler has appeared on several studio albums, performed with many diverse artists, and studied with some of the most renowned guitarists on the planet, including Joe Stump, Dave Fiuczynski, Tomo Fujita, Dave Tronzo, Jon Finn, and others. After earning his B.M. Degree in Guitar Performance from the esteemed Berklee College of Music, which includes alumni such as Steve Vai, John Petrucci, Al Di Meola, and Pat Metheny, among others, Tyler began his career as a professional musician, and in 2015 Tyler founded a brand called Music is Win which has become a rising force in the entertainment and music space, with his videos amassing tens of millions of views to date and his audience rising to hundreds of thousands of subscribers across social media. Tyler has received endorsements from PRS Guitars, Peavey Electronics, Universal Audio, Wampler Pedals, ZAOR Studio Furniture, Source Audio, Empress Effects, MONO Cases, Bugera, and many other esteemed companies.",
		imgUrl: "https://www.udemy.com/guitar-super-system-level-3/",
		date: new Date(Date.now())
	},
	{
		name: "Robin Hall",
		about: "PIANOFORALL is one of the most popular piano courses online and has now taught more than 100,000 students worldwide since 2006. If you would like more information on the course or to read hundreds more amazing reviews check out the pianoforall main website online. CBT4PANIC is a professional Cognitive Behavioural Therapy treatment plan for anxiety, panic disorder and agoraphobia. CBT4PANIC was created by a group of dedicated Professional Cognitive Behavioural Therapists and Psychotherapists with extensive training and years of expertise working both in the private sector and for the British National Health Service. My goal in life is to share my passions and to make whatever seems complicated EASY! I believe we all have a great capacity for learning - if we are taught in the right way! Learning should be FUN :-)",
		imgUrl: "https://www.udemy.com/pianoforall-incredible-new-way-to-learn-piano-keyboard/",
		date: new Date(Date.now())
	}
];

db.Instructor
  .remove({})
  .then(() => db.Instructor.collection.insertMany(instructorSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });