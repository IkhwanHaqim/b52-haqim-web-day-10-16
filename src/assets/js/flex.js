function submitData()  {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const phonenumber = document.getElementById("phonenumber").value
    const subject = document.getElementById("subject").value
    const message = document.getElementById("message").value

    if (name == "") {
        return alert("name must be filled in")
    } else if (email =="") {
        return alert("email must be filled in")
    } else if (phonenumber == "") {
        return alert("phonenumber must be filled in")
    } else if (subject =="") {
        return alert("subject must be filled in")
    } else if (message =="") {
        return alert("message must be filled in")
    }

    console.log(name)
    console.log(email)
    console.log(phonenumber)
    console.log(subject)
    console.log(message)

    let a = document.createElement('a')

    a.href = `mailto:${email}?subject=${subject}&body=${encodeURIComponent(message)}`
    a.click()
}
