var Notes= require('../model/notesModel')
exports.addnotes = function (req, res) {
    var formdata = req.body
    var notesobj = new Notes();
    notesobj.title = formdata.title
    if (req.file != undefined) {
        var image = req.file
        notesobj.document = "notes/" + image.filename;
    }
    else {
        notesobj.document = "notes/default.jpg"
    }
    notesobj.save()
    .then(data => {
        res.status(200).send({ success: true, message: "Notes added successfully", status: 200, data: data })
    })
}