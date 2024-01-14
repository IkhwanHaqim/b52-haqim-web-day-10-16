function getTestimonialData() {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.npoint.io/6edc81cb137d12882abc", true)
xhr.onload = () => {
   
    if(xhr.status === 200){
        const response = JSON.parse(xhr.responseText)
        resolve(response)
    } else {
        reject('Error loading data')
    }
}

xhr.onerror = () => {
    reject("Network Error!")
}

xhr.send()
    })
}

async function allTestimonial() {
    document.getElementById("testimonials").innerHTML = "Waiting..."
    const testimonials = await getTestimonialData()
    const testimonialHTML  = testimonials.map((value) => {
        return `<div class="testimonial">
                    <img src="${value.image}">
                    <p class="quote">"${value.content}"</p>
                    <p class="author">- ${value.author}</p>
                </div>`
    })
    document.getElementById("testimonials").innerHTML = testimonialHTML.join(" ")
}

async function filterTestimonial(rating) {
    document.getElementById("testimonials").innerHTML = "Waiting..."
    const testimonials = await getTestimonialData()
    const filteredTestimonial = testimonials.filter((value) => value.rating === rating)
    
    const filteredTestimonialHTML = filteredTestimonial.map((value) => {
        return `<div class="testimonial">
                    <img src="${value.image} alt="">
                    <p class="quote">"${value.content}"</p>
                    <p class="author">- ${value.author}</p>
                </div>`
        })
    document.getElementById("testimonials").innerHTML = filteredTestimonialHTML.join(" ")
}

allTestimonial()