const testimonials = [
  {
    testimonyHead: {
      profilePic: "images/profile1.jpg",
      nameAgePet: "Max (9 años)",
      lostAddress: "Ofra, Tenerife"
    },
    testimonyBody: {
      testimonyPic: "images/testimony1.webp",
      ownerThanks: "Gracias a esta maravillosa comunidad, encontramos a Max en menos de 48 horas. ¡No puedo expresar mi gratitud suficiente!"
    },
    testimonyCardStats: {
      viewsNumber: 1200,
      numberCollaborations: 45
    }
  },
  {
    testimonyHead: {
      profilePic: "images/profile2.jpg",
      nameAgePet: "Luna (2 años)",
      lostAddress: "Moya, Las Palmas"
    },
    testimonyBody: {
      testimonyPic: "images/testimony2.jpg",
      ownerThanks: "Después de 5 días de angustia, una vecina que vio la publicación nos contactó. ¡Luna está en casa sana y salva!"
    },
    testimonyCardStats: {
      viewsNumber: 890,
      numberCollaborations: 32
    }
  },
  {
    testimonyHead: {
      profilePic: "images/profile3.jpg",
      nameAgePet: "Coco (3 años)",
      lostAddress: "Telde, Las Palmas"
    },
    testimonyBody: {
      testimonyPic: "images/testimony3.webp",
      ownerThanks: "Nunca pensé que volvería a ver a Coco. ¡Gracias a todos los que compartieron y ayudaron en la búsqueda!"
    },
    testimonyCardStats: {
      viewsNumber: 1570,
      numberCollaborations: 78
    }
  }
];

const usingBenefits = [
  {
    title: "Crea un anuncio en minutos",
    description: "Cuéntanos sobre tu mascota, agrega fotos y detalles. ¡Así todos pueden ayudarte!"
  },
  {
    title: "Hazte parte de la búsqueda:",
    description: "Echa un vistazo a los anuncios de otros usuarios. Si ves a una mascota que te suena familiar, ¡avísales!"
  },
  {
    title: "Recibe alertas y actualizaciónes instantáneas",
    description: "Mantente informado sobre cualquier nueva pista o avistamiento, ¡sin perder ningún segundo!"
  }

];

const testimonialsContainer = document.querySelector(".landing-page-3.testimonials");

testimonials.forEach(testimony => {
  testimonialsContainer.innerHTML += `
      <div class="testimony-card">
        <div class="testimony-head">
          <img src="${testimony.testimonyHead.profilePic}" alt="Foto de perfil" class="testimony-profile-pic">
          <hgroup>
            <h1 class="name-age-pet">${testimony.testimonyHead.nameAgePet}</h1>
            <p class="lost-address">${testimony.testimonyHead.lostAddress}</p>
          </hgroup>
        </div>
        <div class="pet-image">
          <img src="${testimony.testimonyBody.testimonyPic}" alt="Imagen del testimonio" class="testimony-pic">
          <p class="owner-thanks">${testimony.testimonyBody.ownerThanks}</p>
        </div>
        <div class="testimony-card-stats">
          <div class="views">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svg-icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <p class="views-number">${testimony.testimonyCardStats.viewsNumber}</p>
          </div>
          <div class="people">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svg-icon">
            <path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clip-rule="evenodd" />
            <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
            </svg>
            <p class="number-collaborations">${testimony.testimonyCardStats.numberCollaborations}</p>
          </div>
        </div>
      </div>`;
});

const usingBenefitsContainer = document.querySelector(".card-container");

usingBenefits.forEach(benefits => {
  usingBenefitsContainer.innerHTML += `<div class='card'><h2>${benefits.title}</h2><p>${benefits.description}</p></h2></div>`;
});
