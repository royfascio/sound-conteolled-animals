function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/dBT61CwQ7/model.json',modelReady);

}


function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results) {
    if(error){
        console.log(error);
    } else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) +1;
        random_number_g = Math.floor(Math.random() * 255) +1;
        random_number_b = Math.floor(Math.random() * 255) +1;

        document.getElementById("result_label").innerHTML = 'I can hear -'+results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy -'+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        
        img = document.getElementById('dog');
        img1 = document.getElementById('cat');
        img2 = document.getElementById('lion');
        img3 = document.getElementById('elephant');

        if (results[0].label == "barking") {
            img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfOdjzD6scpsIyHZSzsFZBd_HzK6GZQp82tQOcs7k&s';
            img1.src = 'https://cdn.dribbble.com/users/2035338/screenshots/11193887/motion_cat_still_2x.gif?compress=1&resize=400x300';
            img2.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6s1h7aSu8OChJ9iNXkdBccAryH7FWLTa00lEQVPuKmQ&s';
            img3.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcM9sYZZgkj2AgVGq7_IAadiVJmGLv8pGHFkpY3L9sl3-xU_zKdPoKsKVXIKdnpPwOdEk&usqp=CAU';
        }else if(results[0].label == "mewing"){
            img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTATFpvUi-GkPszfcUmAP5vXnMQhXuVl4oksyYoLmA&s';
            img1.src = 'https://i.pinimg.com/originals/c8/8a/c7/c88ac78ed012b6b98b634297c58c8c8f.gif';
            img2.src  ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6s1h7aSu8OChJ9iNXkdBccAryH7FWLTa00lEQVPuKmQ&s';
            img3.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcM9sYZZgkj2AgVGq7_IAadiVJmGLv8pGHFkpY3L9sl3-xU_zKdPoKsKVXIKdnpPwOdEk&usqp=CAU';
        }else if (results[0].label == "roaring"){
            img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTATFpvUi-GkPszfcUmAP5vXnMQhXuVl4oksyYoLmA&s';
            img1.src = 'https://cdn.dribbble.com/users/2035338/screenshots/11193887/motion_cat_still_2x.gif?compress=1&resize=400x300';
            img2.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPMObjt4OrTGBKyaRgN1WiPmDIt1tyUa0WK4ZL_zpFn8sYkYhB7fKPp7JkoE-RG_xp-aA&usqp=CAU';
            img3.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcM9sYZZgkj2AgVGq7_IAadiVJmGLv8pGHFkpY3L9sl3-xU_zKdPoKsKVXIKdnpPwOdEk&usqp=CAU';
        }else{
            img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTATFpvUi-GkPszfcUmAP5vXnMQhXuVl4oksyYoLmA&s';
            img1.src = 'https://cdn.dribbble.com/users/2035338/screenshots/11193887/motion_cat_still_2x.gif?compress=1&resize=400x300';
            img2.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6s1h7aSu8OChJ9iNXkdBccAryH7FWLTa00lEQVPuKmQ&s';
            img3.src = 'https://i.pinimg.com/originals/09/26/9b/09269bfb9812426925cb4e90fb010689.gif';
        }

    }


  
}