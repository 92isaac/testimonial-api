let contain =document.querySelector('.contain')
let apiData = 0

const displayTestimonial=(data)=>{
    contain.innerHTML = ` <div class="card p-3">
    <div class="image">
        <img src="${data[0].avatar}" alt="">
    </div>
    <div class="card-text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis in aspernatur ut ducimus accusamus quas quidem et eligendi id dolor.</p>
        <div class="play">
            <button class="btn btn-outline-success">Play Audio</button>
        </div>
    </div>
    <div class="card-btn d-flex justify-content-between">
        <button class="btn">Prev</button>
        <button class="btn">Next</button>
    </div>
</div>`
}

let endpoint ='https://testimonialapi.toolcarton.com/api'
fetch(endpoint)
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
    displayTestimonial(data)
})