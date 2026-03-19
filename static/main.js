const date = document.getElementById("date");


if (date) {
    date.addEventListener("change", (event) => {
    let today_attendance = record[date.value];
    console.log(today_attendance);
    console.log(date.value);

    let i = 0;
    for (const item in people) {
        let here = Boolean(today_attendance[i][1]);
        i++;
        const person = document.getElementById(i);
        console.log(i);
        if (person) {


        person.checked = here;
        }
    }
    });
}