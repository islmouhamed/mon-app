let mongoose = require("mongoose"),
express = require("express"),
router = express.Router();

// Salarier Model
let salarierSchema = require("../models/Salarier");

// CREATE salarier
router.post("/createsalarier", (req, res, next) => {
salarierSchema.create(req.body, (error, data) => {
	if (error) {
	return next(error);
	} else {
	console.log(data);
	res.json(data);
	}
});
});

// READ Salariers
router.get("/salarierlist", (req, res) => {
salarierSchema.find((error, data) => {
	if (error) {
	return next(error);
	} else {
	res.json(data);
	}
});
});

// UPDATE salarier
router
.route("/updatesalarier/:id")
// Get Single Salarier
.get((req, res) => {
	salarierSchema.findById(
		req.params.id, (error, data) => {
	if (error) {
		return next(error);
	} else {
		res.json(data);
	}
	});
})



// Update Salarier Data
.put((req, res, next) => {
	salarierSchema.findByIdAndUpdate(
	req.params.id,
	{
		$set: req.body,
	},
	(error, data) => {
		if (error) {
		return next(error);
		console.log(error);
		} else {
		res.json(data);
		console.log("Salarier modifier avec succée !");
		}
	}
	);
});

// Delete Student
router.delete("/deletesalarier/:id",
(req, res, next) => {
salarierSchema.findByIdAndRemove(
	req.params.id, (error, data) => {
	if (error) {
	return next(error);
	} else {
	res.status(200).json({
		msg: data,
	});
	}
});
});

router
.route("/search/:key")
// Get Single Salarier
.get((req, res) => {
	salarierSchema.find(
		{Fname:req.params.key}, (error, data) => {
	if (error) {
		return next(error);
	} else {
		res.json(data);
	}
	});
})
module.exports = router;
