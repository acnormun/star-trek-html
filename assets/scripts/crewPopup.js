function crewPopup(id){
    const tripulation = document.getElementById('stdata.tripulation')
    tripulation.innerHTML = crewData.tripulation.map(crew => {
        
        if (toString(crew.name)==id) {
            
            return `
            
                <div class="popup">
                    <div class="popup-top">
                        <div>TÍTULO</div>
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