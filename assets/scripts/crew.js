function updateCrewData(crewData){
    const tripulation = document.getElementById('stdata.tripulation')
    tripulation.innerHTML = crewData.tripulation.map(crew => {

        return `
            <div class="crew-list">
                <button type="show-crew" class="btn" onclick="openPopup()"> ${crew.name}</button>
                <img src="${crew.photo}" alt="${crew.name}" class"stdata.crew">
            </div>
        `
    }).join('')
}

(async () => {
    const crewData = await fetchCrewData()
    updateCrewData(crewData)
})()
