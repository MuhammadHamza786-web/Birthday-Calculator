
const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "Octuber", "November", "December"]

function calculateBirthday() {
    let userInput = document.getElementById("dateofbirth").value;
    let userDate = new Date(`${userInput} 00:00:00`);
    let today = new Date();

    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);


    let currentYear = today.getFullYear();

    let birthdayThisYear = new Date(`${userInput} 00:00:00`);
    birthdayThisYear.setFullYear(currentYear);

    let userYear;
    let previousBirthday;
    let nextBirthday;

    if (today.getTime() >= birthdayThisYear.getTime()) {
        userYear = today.getFullYear() - userDate.getFullYear()
        previousBirthday = `${birthdayThisYear.getDate()}${months[birthdayThisYear.getMonth()]} ${birthdayThisYear.getFullYear()}`
        nextBirthday = `${birthdayThisYear.getDate()}${months[birthdayThisYear.getMonth()]} ${birthdayThisYear.getFullYear() + 1}`
    } else {
        userYear = today.getFullYear() - userDate.getFullYear() - 1
        previousBirthday = `${birthdayThisYear.getDate()}${months[birthdayThisYear.getMonth()]} ${birthdayThisYear.getFullYear() - 1}`
        nextBirthday = `${birthdayThisYear.getDate()}${months[birthdayThisYear.getMonth()]} ${birthdayThisYear.getFullYear()}`
    }
    if (today.getTime() === birthdayThisYear.getTime()) {
        alert("🥳🎉 Happy Birthday! 🎂🍰\nEnjoy your special day!");
        document.getElementById("result").innerHTML = ""
        document.getElementById("happybirthday").innerHTML = `🎉 Happy Birthday! 🎂<br>
        May Allah bless you with happiness and success 🤲✨`;


    } else {
        document.getElementById("happybirthday").innerHTML = ""
        document.getElementById("result").innerHTML = `<p>Age: ${userYear} <br> previousBirthday: ${previousBirthday} <br> nextBirthday: ${nextBirthday}</p>`

    }

}
