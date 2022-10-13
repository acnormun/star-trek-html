function updateCrewData(crewData){
    const trip = document.getElementById('stdata.tripulation')
    trip.innerHTML = crewData.stdata.tripulation.map(crew => {

        return `
            <li>
                <h2> ${crew.name}</h2>
                <img src="${crew.photo}" alt="${crew.name}">
            </li>
        `
    }).join('')

}
(async () => {
    const crewData = await fetchCrewData()
    updateCrewData(crewData)
})()
