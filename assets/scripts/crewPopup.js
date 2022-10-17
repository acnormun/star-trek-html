function getID(id) {
    const crewData = fetch(`https://raw.githubusercontent.com/acnormun/star-trek/main/assets/data/stdata.json`)
        .then(response => response.json())
        .then(data => {

            const crewId = document.getElementById('popup')
            crewId.innerHTML = data.tripulation.map(crew => {

                if (crew.id == id) {
                    return `
                        <div class="popup">
                            <div class="popup-top">
                                <div>${crew.name}</div>
                                <button class="close-button">&times;</button>
                            </div>
                            <div class="popup-content">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi magnam aliquid praesentium pariatur iusto voluptate corrupti nesciunt sunt aliquam veniam, 
                                hic ratione illo sapiente temporibus libero, tempore nisi labore distinctio!
                            </div>

                        </div>
                `
                }
            })
        }
        )
}