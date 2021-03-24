toggleVisibility = () => {
    const descriptions = document.querySelectorAll('.piece_description');
    const plays = document.querySelectorAll('.play');
    const plusminus = document.querySelectorAll('.plusminus')
    
    descriptions.forEach((description) => {
        console.log(description);
        text = description;
        if (text.style.display == 'none') {
            text.style.display = 'block';
            plusminus.innerHTML = '-'
        } else {
            text.style.display = 'none';
        }
    })
/*
    if (description.style.display == 'none') {
        description.style.display = 'block';
        plusminus.innerHTML = '-'
    } else {
        description.style.display = 'none';
    }
    if (play.style.display == 'none') {
        play.style.display = 'block';
    } else {
        play.style.display = 'none';
    }*/
}