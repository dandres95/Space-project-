let borderDestinationColor= document.getElementById('destination');

let borderHomeColor=document.getElementById('home');

let borderCrewColor=document.getElementById('crew');

let borderTechnologyColor=document.getElementById('technology');

let borderMoonColor1=document.getElementById('moon1');

let borderMarsColor1=document.getElementById('mars1');

let borderEuropaColor1=document.getElementById('europa1');

let borderTitanColor1=document.getElementById('titan1');

let borderMoonColor2=document.getElementById('moon2');

let borderMarsColor2=document.getElementById('mars2');

let borderEuropaColor2=document.getElementById('europa2');

let borderTitanColor2=document.getElementById('titan2');

let borderMoonColor3=document.getElementById('moon3');

let borderMarsColor3=document.getElementById('mars3');

let borderEuropaColor3=document.getElementById('europa3');

let borderTitanColor3=document.getElementById('titan3');

let borderMoonColor4=document.getElementById('moon4');

let borderMarsColor4=document.getElementById('mars4');

let borderEuropaColor4=document.getElementById('europa4');

let borderTitanColor4=document.getElementById('titan4');

let moon=document.getElementById('destination01');

let mars=document.getElementById('destination02');

let europa=document.getElementById('destination03');

let titan=document.getElementById('destination04');

let home=document.getElementById('container');

let background=document.getElementById('background');

let engineerSection=document.getElementById('crew01');

let commanderSection=document.getElementById('crew02');

let pilotSection=document.getElementById('crew03');

let specialistSection=document.getElementById('crew04');

let launchSection=document.getElementById('section-technology01');

let spaceSportSection=document.getElementById('section-technology02');

let spaceCapsuleSection=document.getElementById('section-technology03');


function borderDestination(){
    borderDestinationColor.style.borderBottomColor='white';
    borderHomeColor.style.borderBottomColor='hsla(244, 28%, 29%, 0)';
    borderCrewColor.style.borderBottomColor='hsla(244, 28%, 29%, 0)';
    borderTechnologyColor.style.borderBottomColor='hsla(244, 28%, 29%, 0)';
    moon.style.display='flex';
    home.style.display='none';
    europa.style.display='none';
    titan.style.display='none';
    engineerSection.style.display='none';
    commanderSection.style.display='none';
    pilotSection.style.display='none';
    specialistSection.style.display='none';
    background.style.backgroundImage="url('../destination/background-destination-desktop.jpg')";
    background.style.backgroundSize='cover';
    background.style.backgroundRepeat='no-repeat';
    launchSection.style.display='none';
    spaceSportSection.style.display='none';
    spaceCapsuleSection.style.display='none'

}


function borderHome(){
    borderHomeColor.style.borderBottomColor='white';
    borderDestinationColor.style.borderBottomColor='hsla(244, 28%, 29%, 0)';
    borderCrewColor.style.borderBottomColor='hsla(244, 28%, 29%, 0)';
    borderTechnologyColor.style.borderBottomColor='hsla(244, 28%, 29%, 0)';
    moon.style.display='none';
    home.style.display='flex';
    mars.style.display='none';
    europa.style.display='none';
    titan.style.display='none';
    engineerSection.style.display='none';
    commanderSection.style.display='none';
    pilotSection.style.display='none';
    specialistSection.style.display='none';
    background.style.backgroundImage="url('./background-home-desktop.jpg')" ;
    background.style.backgroundSize='cover';
    background.style.backgroundRepeat='no-repeat';
    launchSection.style.display='none';
    spaceSportSection.style.display='none';
    spaceCapsuleSection.style.display='none';
}

function borderCrew(){
    borderCrewColor.style.borderBottomColor='white';
    borderDestinationColor.style.borderBottomColor='hsla(244, 28%, 29%, 0)';
    borderHomeColor.style.borderBottomColor='hsla(244, 28%, 29%, 0)';
    borderTechnologyColor.style.borderBottomColor='hsla(244, 28%, 29%, 0)';
    background.style.backgroundImage="url('/crew/background-crew-desktop.jpg')";
    background.style.backgroundSize='cover';
    background.style.backgroundRepeat='no-repeat';
    engineerSection.style.display='flex';
    moon.style.display='none';
    home.style.display='none';
    mars.style.display='none';
    europa.style.display='none';
    titan.style.display='none';
    commanderSection.style.display='none';
    pilotSection.style.display='none';
    specialistSection.style.display='none';
    launchSection.style.display='none';
    spaceSportSection.style.display='none';
    spaceCapsuleSection.style.display='none';
}

function borderTechnology(){
    borderTechnologyColor.style.borderBottomColor='white';
    borderDestinationColor.style.borderBottomColor='hsla(244, 28%, 29%, 0)';
    borderCrewColor.style.borderBottomColor='hsla(244, 28%, 29%, 0)';
    borderHomeColor.style.borderBottomColor='hsla(244, 28%, 29%, 0)';
    background.style.backgroundImage="url('/technology/background-technology-desktop.jpg')";
    background.style.backgroundSize='cover';
    background.style.backgroundRepeat='no-repeat';
    moon.style.display='none';
    home.style.display='none';
    mars.style.display='none';
    europa.style.display='none';
    titan.style.display='none';
    engineerSection.style.display='none';
    commanderSection.style.display='none';
    pilotSection.style.display='none';
    specialistSection.style.display='none';
    launchSection.style.display='block';
    spaceSportSection.style.display='none';
    spaceCapsuleSection.style.display='none';



}

function borderMars(){

    borderMarsColor2.style.borderBottomColor='white';
    borderMoonColor2.style.borderBottomColor='hsla(244, 28%, 29%, 0)';
    borderEuropaColor2.style.borderBottomColor='hsla(244, 28%, 29%, 0)';
    borderTitanColor2.style.borderBottomColor='hsla(244, 28%, 29%, 0)';
    moon.style.display='none';
    mars.style.display='flex';
    europa.style.display='none';
    titan.style.display='none';
    engineerSection.style.display='none';
    commanderSection.style.display='none';
    pilotSection.style.display='none';
    specialistSection.style.display='none';
    launchSection.style.display='none';
    spaceSportSection.style.display='none';
    spaceCapsuleSection.style.display='none';
    

}

function borderMoon(){

    borderMoonColor1.style.borderBottomColor='white';
    borderMarsColor1.style.borderBottomColor='hsla(244, 28%, 29%, 0)';
    borderEuropaColor1.style.borderBottomColor='hsla(244, 28%, 29%, 0)';
    borderTitanColor1.style.borderBottomColor='hsla(244, 28%, 29%, 0)';
    moon.style.display='flex';
    mars.style.display='none';
    europa.style.display='none';
    titan.style.display='none';
    engineerSection.style.display='none';
    commanderSection.style.display='none';
    pilotSection.style.display='none';
    specialistSection.style.display='none';
    launchSection.style.display='none';
    spaceSportSection.style.display='none';
    spaceCapsuleSection.style.display='none';
    

}

function borderEuropa(){

    borderEuropaColor3.style.borderBottomColor='white';
    borderMarsColor3.style.borderBottomColor='hsla(244, 28%, 29%, 0)';
    borderMoonColor3.style.borderBottomColor='hsla(244, 28%, 29%, 0)';
    borderTitanColor3.style.borderBottomColor='hsla(244, 28%, 29%, 0)';
    moon.style.display='none';
    mars.style.display='none';
    europa.style.display='flex';
    titan.style.display='none';
    engineerSection.style.display='none';
    commanderSection.style.display='none';
    pilotSection.style.display='none';
    specialistSection.style.display='none';
    launchSection.style.display='none';
    spaceSportSection.style.display='none';
    spaceCapsuleSection.style.display='none';
    

}

function borderTitan(){

    borderTitanColor4.style.borderBottomColor='white';
    borderMarsColor4.style.borderBottomColor='hsla(244, 28%, 29%, 0)';
    borderMoonColor4.style.borderBottomColor='hsla(244, 28%, 29%, 0)';
    borderEuropaColor4.style.borderBottomColor='hsla(244, 28%, 29%, 0)';
    moon.style.display='none';
    mars.style.display='none';
    europa.style.display='none';
    titan.style.display='flex';
    engineerSection.style.display='none';
    commanderSection.style.display='none';
    pilotSection.style.display='none';
    specialistSection.style.display='none';
    launchSection.style.display='none';
    spaceSportSection.style.display='none';
    spaceCapsuleSection.style.display='none';
    

}

function engineer(){
    engineerSection.style.display='flex';
    commanderSection.style.display='none';
    pilotSection.style.display='none';
    specialistSection.style.display='none';
    launchSection.style.display='none';
    spaceSportSection.style.display='none';
    spaceCapsuleSection.style.display='none';
    

}

function commander(){
    engineerSection.style.display='none';
    commanderSection.style.display='flex';
    pilotSection.style.display='none';
    specialistSection.style.display='none';
    launchSection.style.display='none';
    spaceSportSection.style.display='none';
    spaceCapsuleSection.style.display='none';
    


}

function pilot(){
    pilotSection.style.display='flex';
    engineerSection.style.display='none';
    commanderSection.style.display='none';
    specialistSection.style.display='none';
    launchSection.style.display='none';
    spaceSportSection.style.display='none';
    spaceCapsuleSection.style.display='none';
    
    
}

function specialist(){
    specialistSection.style.display='flex'
    pilotSection.style.display='none';
    engineerSection.style.display='none';
    commanderSection.style.display='none';
    launchSection.style.display='none';
    spaceSportSection.style.display='none';
    spaceCapsuleSection.style.display='none';
    

}

function spacesport(){
    spaceSportSection.style.display='block';
    launchSection.style.display='none';
    spaceCapsuleSection.style.display='none';

}

function launch(){
    launchSection.style.display='block';
    spaceCapsuleSection.style.display='none';
    spaceSportSection.style.display='none';


}

function capsule(){
    spaceCapsuleSection.style.display='block';
    launchSection.style.display='none';
    spaceSportSection.style.display='none';


}


