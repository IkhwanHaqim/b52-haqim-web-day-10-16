const blogs = [];

function addBlog(e) {
    e.preventDefault()

    const calculateDuration = () => {
        const startDate = new Date (document.getElementById("startDate").value)
        const endDate = new Date (document.getElementById("endDate").value)

    startDate.setHours(0,0,0,0)
    endDate.setHours(0,0,0,0)
    const oneDay = 24 * 60 * 60 * 1000;
    const difference = Math.abs(endDate-startDate);
    const results =Math.round(difference/oneDay);

    return results;
    }
    const duration = calculateDuration();

    const name = document.getElementById("Name").value
    const message = document.getElementById("message").value
    const nodejs = document.getElementById("nodejs").checked
    const php = document.getElementById("php").checked
    const apple = document.getElementById("apple").checked
    const android = document.getElementById("android").checked
    let image = document.getElementById("image").files
    

    image = URL.createObjectURL(image[0])
    

    const blog = {
        name,
        startDate,
        endDate,
        duration,
        message,
        nodejs,
        php,
        apple,
        android,
        image

    }
    
    blogs.unshift(blog)
    renderBlog()
    console.log("blogs", blogs)

}

function renderBlog() {
    let html = ''

    for(let index = 0; index < blogs.length; index++) {
        let renderTechIcons = ''

        if(blogs[index].nodejs) {   
            renderTechIcons += `<i class="fa-brands fa-node-js"></i>` 
        }

        if(blogs[index].php) {   
            renderTechIcons += `<i class="fa-brands fa-php"></i>`
        }

        if(blogs[index].apple) {   
            renderTechIcons += `<i class="fa-brands fa-apple"></i>`
        }

        if(blogs[index].android) {   
            renderTechIcons += `<i class="fa-brands fa-android"></i>`
        }

        html += `
        <div class="card">
            <img src="${blogs[index].image}" alt="" />
            <h2>
            <a href="/detail-blog/12" target="_blank">${blogs[index].name} </a>
            </h2>
        <div class="detail-card-content">
Duration: ${blogs[index].duration} day 
        </div>
        <p>
            ${blogs[index].message}
        </p>
       
            <p>${renderTechIcons}</p>
        <div class="btn-card">
            <button class="btn-edit">Edit</button>
            <button class="btn-delete">Delete</button>
        </div>
    </div>
`
    }

    document.getElementById("contents-isi").innerHTML = html
}



renderBlog()


