const change_the_home_Page=()=>{
    console.log("Hidden the home page ")
    const find_homeBanner=document.getElementById("home_page_banner")
    find_homeBanner.classList.add("hidden")

    const find_all_post_product=document.getElementById("All_product_section")
    find_all_post_product.classList.remove("hidden")
}

const change_the_Product_Page=()=>{
    console.log("Hidden the home page ")
    const find_homeBanner=document.getElementById("home_page_banner")
    find_homeBanner.classList.remove("hidden")

    const find_all_post_product=document.getElementById("All_product_section")
    find_all_post_product.classList.add("hidden")
}


const show_all_data=()=>{
    
    
    fetch("https://fakestoreapi.com/products")
    .then(res=>res.json())
    .then(data=>show_all_cards(data))
}
show_all_data()


const show_category=(category)=>{
    console.log(category)
    fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then(res=>res.json())
    .then(data=>show_all_cards(data))

}


const show_all_cards=(data)=>{
    
    
    console.log(data)
    const find_container=document.getElementById("All_product_container")
    find_container.innerHTML=""
   
  data.map((data)=>{
        console.log("My map data ",data)
        const create_element=document.createElement("div")

        create_element.innerHTML=`
        <div class="max-w-sm bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden font-sans">
    
    <div class="bg-gray-100 p-8 flex justify-center items-center h-64">
        <img class="max-h-full object-contain mix-blend-multiply" src="${data.image}" alt="${data.title}">
    </div>

    <div class="p-5">
        <div class="flex justify-between items-center mb-3">
            <span class="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                ${data.category}
            </span>
            <div class="flex items-center text-gray-500 text-sm">
                <i class="fa-solid fa-star text-yellow-400 mr-1"></i>
                <span>${data.rating.rate}</span>
                <span class="ml-1 text-gray-400">(${data.rating.count})</span>
            </div>
        </div>

        <h2 class="text-lg font-bold text-gray-800 truncate mb-2">
            ${data.title}
        </h2>

        <p class="text-2xl font-extrabold text-black mb-5">
            $${data.price}
        </p>

        <div class="flex gap-3">
            <button onclick="my_modal_3.showModal();show_the_details(${data.id})" id="openBtn" class="flex-1 flex items-center justify-center gap-2 border border-gray-300 py-2.5 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 transition-colors">
                <i class="fa-regular fa-eye"></i> Details
            </button>
            <button class="flex-1 flex items-center justify-center gap-2 bg-indigo-600 py-2.5 rounded-lg text-white font-semibold hover:bg-indigo-700 transition-shadow shadow-indigo-200 shadow-lg">
                <i class="fa-solid fa-cart-shopping"></i> Add
            </button>
        </div>
    </div>
</div>
    
    
    `
    find_container.appendChild(create_element)

    })
    
    

    
   
    

}

