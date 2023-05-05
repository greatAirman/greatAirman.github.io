let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/R-C (7).jpg') {
      myImage.setAttribute('src','images/R-C (6).jpg');
    } 
    else if  (mySrc === 'images/R-C (6).jpg')        
    {
      myImage.setAttribute('src', 'images/R-C (5).jpg');
    }
    else if  (mySrc === 'images/R-C (5).jpg')        
    {
      myImage.setAttribute('src', 'images/R-C (4).jpg');
    }
    else    
    {
        myImage.setAttribute('src', 'images/R-C (7).jpg');
      }
}