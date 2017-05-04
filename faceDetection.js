try {

    var webcam = new cv.VideoCapture(0);
    
    var counter = 1;

    setInterval(() => {

        webcam.read((err, webcamImage) => {

            if (err) throw err;

            if (webcamImage.size()[0] > 0 && webcamImage.size()[1] > 0){

                //console.log(webcamImage.size());
                //webcamImage.save('./teste.jpg');

                //window.show(webcamImage);

                webcamImage.detectObject(cv.FACE_CASCADE, {}, function(err, faces) {

                    if (err) throw err;

                    for (var i=0; i<faces.length; i++){

                        var x = faces[i]
                        webcamImage.ellipse(x.x + x.width/2, x.y + x.height/2, x.width/2, x.height/2);

                    }
                
                    webcamImage.save('./out' + counter + '.jpg');

                    counter++;

                });

            }

        });

    }, 20);

} catch (err){

    console.log(err);

}