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

if (window.location.pathname === '/admin-config') {
    const delete_button = document.getElementById("delete");
    const person_dd = document.getElementById("person");
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const roll = document.getElementById("roll");
    let person = person_dd.value;
    person_dd.addEventListener("change", (event) => {
        person = person_dd.value;
        fnamne.value=
    });

    delete_button.addEventListener("click", (event) => {
       fetch('https://jrdrama.pythonanywhere.com/process', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: person,
        })
    });
}