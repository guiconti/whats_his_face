var cv = require('opencv');
const webcam = new cv.VideoCapture(0);

exports.normalPhoto = (req, res) => {

    try {

        webcam.read((err, webcamImage) => {

            if (err) throw err;

            if (webcamImage.size()[0] > 0 && webcamImage.size()[1] > 0){

                //console.log(webcamImage.size());
                webcamImage.save('./image/room.jpg');
                res.status(200).sendFile(process.cwd() + '/image/room.jpg');

                //window.show(webcamImage);

                /*webcamImage.detectObject(cv.FACE_CASCADE, {}, function(err, faces) {

                    if (err) throw err;

                    for (var i=0; i<faces.length; i++){

                        var x = faces[i]
                        webcamImage.ellipse(x.x + x.width/2, x.y + x.height/2, x.width/2, x.height/2);

                    }
                
                    webcamImage.save('./out' + counter + '.jpg');

                });*/

            }

        });

    } catch (err){

        console.log(err);
        res.status(400).json({error: err});

    }

}