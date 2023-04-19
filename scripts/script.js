import datas from './data.js';

const menuBars = document.querySelector('.menu-bars');
const sidebar = document.querySelector('.sidebar');
const body = document.querySelector('body');
const cross = document.querySelector('.cross');
const athleteWrapper = document.querySelector('.athlete-wrapper');
const navigation = document.querySelector('.navigation');

// sticky navbar
window.onscroll = () => {
  if (window.scrollY > 30) {
    navigation.style.backgroundColor = 'white';
    navigation.style.boxShadow = '1px 0 5px grey';
  } else {
    navigation.style.backgroundColor = 'rgb(255, 255, 255, 0.4)';
    navigation.style.boxShadow = 'unset';
  }
};
// sticky navbar

// side menu
const closeSide = () => {
  sidebar.classList.remove('open-side');
  body.style.overflow = 'unset';
};

const openSide = () => {
  sidebar.classList.add('open-side');
  body.style.overflow = 'hidden';
};

menuBars.addEventListener('click', openSide);
cross.addEventListener('click', closeSide);
// side menu

// famous athlete
for (let index = 0; index < datas.length; index += 1) {
  const data = datas[index];
  const athlete = document.createElement('div');
  athlete.classList.add('athlete');
  if (index > 1) {
    athlete.classList.add('athlete-hide');
  }
  athlete.innerHTML = `
    <div class="athlete-picture">
                        <img src="./images/mozaic_thumbnail.png" class="picture-corner" alt = "mozaic"/>
                        <img src=${data.image} class="athlete-image" alt = ${data.name} />
                    </div>

                    <div class="athlete-infos">
                        <h4 class="athlete-name">${data.name}</h4>
                        <h5 class="athlete-sport">${data.sport}</h5>
                        <hr>
                        <p class="athlete-history">${data.history}</p>
                    </div>
    `;
  athleteWrapper.appendChild(athlete);
}

// famous athlete
