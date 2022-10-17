function getID(id){
    const crewData = fetch(`https://raw.githubusercontent.com/acnormun/star-trek/main/assets/data/stdata.json`)
    .then(response => response.json())
    .then(data => {

        const crewId = document.getElementById('popup')
        crewId.innerHTML = data.tripulation.map(crew => {

            if (crew.id ==id) {
                return `
                <div class ="popup"> alooooo</div>
                
                `   
            }
        })  
    }
    )
}