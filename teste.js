var cv = require('opencv');

try {

    var webcam = new cv.VideoCapture(0);
    //var window = new cv.NamedWindow('Video', 1);

    setInterval(() => {

        webcam.read((err, webcamImage) => {

            if (err) throw err;

            if (webcamImage.size()[0] > 0 && webcamImage.size()[1] > 0){

                //console.log(webcamImage.size());
                webcamImage.save('./teste.jpg');

                //window.show(webcamImage);

                webcamImage.detectObject(cv.FACE_CASCADE, {}, function(err, faces) {

                    if (err) throw err;

                    for (var i=0; i<faces.length; i++){

                        var x = faces[i]
                        webcamImage.ellipse(x.x + x.width/2, x.y + x.height/2, x.width/2, x.height/2);

                    }
                
                    webcamImage.save('./out.jpg');

                });

            }

        });

    }, 20);

} catch (e){

    console.log("Couldn't start camera:", e)

}