let contain =document.querySelector('.contain')
let prev = document.querySelector('.btn-prev')
let next = document.querySelector('.btn-next')
let apiData = 0



let endpoint ='https://testimonialapi.toolcarton.com/api'
fetch(endpoint)
.then((response)=>{
    return response.json();
})
.then((data)=>{
    const displayTestimonial=()=>{
        let result = ` <div class="card p-3">
        <div class="image d-flex justify-content-between">
            <div><img src="${data[apiData].avatar}" alt=""></div>
            <div class="profile">
            <h3>${data[apiData].name}</h3>
            <h4>${data[apiData].designation}</h4>
            <h5>${data[apiData].location}</h5>
            <h6>Rating: ${data[apiData].rating}</h6>
        </div>
        </div>
        <div class="card-text">
            <p>${data[apiData].message}</p>
            <div class="play">
                <button class="btn btn-play btn-outline-success">Play Audio</button>
            </div>
        </div>
    </div>`
    
    return result;
    }
    
    
    let display = displayTestimonial();
    contain.innerHTML = display


    const updateTextimonialNext =()=>{
        let lastIndex = data.length - 1;
        console.log(lastIndex);
        if(apiData === lastIndex){
            apiData = 0
        }
    }
    const updateTextimonialPrev =()=>{
        let lastIndex = data.length - 1;
        console.log(lastIndex);
        if(apiData === 1){
            apiData = lastIndex
        }
    }

    let btn_play =document.querySelector('.btn-play');
    
 

    next.addEventListener("click", (e) => {
        e.preventDefault();
        // next.disabled = false;
        if (apiData >= 0 && data[apiData].id <= data.length - 1) {
          apiData++;
          displayTestimonial();
          let display = displayTestimonial();
          contain.innerHTML = display
          console.log(data[apiData].id);
          updateTextimonialNext()
        }
      });

    prev.addEventListener('click', () => {
        // let lastIndex = data.length - 1;
        if (apiData > 0 && data[apiData].id <= data.length - 1) {
            apiData--;
            displayTestimonial();
            let display = displayTestimonial();
            contain.innerHTML = display
            console.log(data[apiData].id);
            updateTextimonialPrev()
          }
    });

    btn_play.addEventListener('click', ()=>{
        audio = new Audio(`${data[apiData].audio}`);
      audio.play();
      console.log(`${data[apiData].id}`);
    })
})




