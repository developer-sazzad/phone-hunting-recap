

// Get Api details 
const loadPhones = async (searchField='13', isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchField}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones, isShowAll)
}

// Show API details in display
const displayPhones = (phones, isShowAll) => {
    const displayAllPhones = document.getElementById('display-all-phones');
    displayAllPhones.innerHTML = '';

    const showAllPhonesButton = document.getElementById('show-all-phones-button');
    if(phones.length > 9 && !isShowAll){
        showAllPhonesButton.classList.remove('hidden');
    }
    else{
        showAllPhonesButton.classList.add('hidden');
    }

    // prothom 9 ta data dekhanor jonno
    if(!isShowAll){
        phones = phones.slice(0, 9);
    }
    
    // API er vitorer phone gulo single kore show korar jonno loop
    phones.forEach(phone => {
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-base-100 shadow-xl`;
        phoneCard.innerHTML = `
        <figure class="py-5 bg-slate-500">
        <img src=${phone.image} />
        </figure>
        <div class="card-body">
             <h2 class="card-title">${phone.phone_name}</h2>
              <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, in.</P>
            
             <div class="card-actions justify-center">
                <button onclick="" class="btn btn-primary w-full">Show All Details</button>
             </div>
        </div>
        `;

        displayAllPhones.appendChild(phoneCard);
    });
}

const searchFieldResult = (isShowAll) =>{
    const searchField = document.getElementById('search-field').value;
    loadPhones(searchField, isShowAll)
}
// after the click show all button display all phones this brand
const showAllButtons = () => {
    searchFieldResult(true);
}

loadPhones();