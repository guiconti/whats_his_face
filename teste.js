var cv = require('opencv');

try {

    var webcam = new cv.VideoCapture(1);
    var window = new cv.NamedWindow('Video', 0);

        cv.readImage('./gib4.jpg', function(err, image) {

            image.detectObject(cv.FACE_CASCADE, {}, function(err, faces) {

                if (err) throw err;

                for (var i=0; i<faces.length; i++){

                    var x = faces[i]
                    image.ellipse(x.x + x.width/2, x.y + x.height/2, x.width/2, x.height/2);

                }
            
                image.save('./out.jpg');

            });

        });

        /*webcam.read(function(err, webcamImage) {

            if (err) throw err;

            if (webcamImage.size()[0] > 0 && webcamImage.size()[1] > 0){

                console.log(webcamImage.size());
                webcamImage.save('./teste.jpg');

                window.show(webcamImage);

                window.blockingWaitKey(0, 50);

                /*

                //window.show(im);
                cv.readImage(webcamImage, function(err, image){

                    image.detectObject(cv.FACE_CASCADE, {}, function(err, faces) {

                        if (err) throw err;

                        for (var i=0; i<faces.length; i++){

                            var x = faces[i]
                            image.ellipse(x.x + x.width/2, x.y + x.height/2, x.width/2, x.height/2);

                        }
                    
                        image.save('./out.jpg');

                    });

                });
                
            }

            //window.blockingWaitKey(0, 50);

        });*/

} catch (e){

    console.log("Couldn't start camera:", e)

}