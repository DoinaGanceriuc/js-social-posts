/* Creare una pagina che elenchi una lists di post socials a partire da un array di oggetti.
Gli attributi minimi del modello di un post: id, contenuto, immagine, autore (nome, avatar), numero di likes, data creazione.
Un secondo array conterrà solo gli id dei posts a cui abbiamo dato like.

Immagini: va bene utilizzare qualsiasi servizio di placeholder
ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
 */

const posts = [
    {
        id: 1,
        contenuto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, modi aliquid, ipsa voluptatum optio nihil molestiae in dolore dolores, quis omnis libero qui eaque itaque deserunt! Quisquam, at quibusdam! Cum.",
        immagine: "https://unsplash.it/300/300?image",
        nomeAutore: "Phil Mangione",
        avatarAutore: "https://unsplash.it/300/300?image",
        numeroLikes: 80,
        dataCreazione:"4 mesi fa"

    }, 
    {
        id: 2,
        contenuto: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, modi aliquid, ipsa voluptatum optio nihil molestiae in dolore dolores, quis omnis libero qui eaque itaque deserunt! Quisquam, at quibusdam! Cum.",
        immagine: "https://unsplash.it/300/300?image",
        nomeAutore: "Sofia Perlari",
        avatarAutore: "https://unsplash.it/300/300?image",
        numeroLikes: 75,
        dataCreazione:"2 mesi fa"

    },
     {
        id: 3,
        contenuto: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, modi aliquid, ipsa voluptatum optio nihil molestiae in dolore dolores, quis omnis libero qui eaque itaque deserunt! Quisquam, at quibusdam! Cum.",
        immagine: "https://unsplash.it/300/300?image",
        nomeAutore: "Mario Rossi",
        avatarAutore: "https://unsplash.it/300/300?image",
        numeroLikes: 0,
        dataCreazione:"1 mese fa"

    },
     {
        id: 4,
        contenuto: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, modi aliquid, ipsa voluptatum optio nihil molestiae in dolore dolores, quis omnis libero qui eaque itaque deserunt! Quisquam, at quibusdam! Cum.",
        immagine: "https://unsplash.it/300/300?image",
        nomeAutore: "Federica Bianchi",
        avatarAutore: "https://unsplash.it/300/300?image",
        numeroLikes: 0,
        dataCreazione:"3 mesi fa"

    }

]

const likes = [3, 4]

for (let index = 0; index < posts.length; index++) {
    const singlePost = posts[index];
    console.log(singlePost);
    const postElement = `<div class="cards">
                <div class="profile">
                    <img id="profile_img"
                        src="${singlePost.avatarAutore}"
                        alt="">
                    <div>
                        <h3>${singlePost.nomeAutore}</h3>
                        <p>${singlePost.dataCreazione}</p>
                    </div>
                </div>
                <div class="middle">
                    <p>${singlePost.contenuto}</p>
                    <div class="middle_img">
                        <img
                            src="${singlePost.immagine}"
                            alt="">
                    </div>
                    <div>
                    </div>
                </div>
                <div class="likes">
                    <p> <i class="fas fa-thumbs-up"></i> Mi piace</p>
                    <p>Piace a <span>${singlePost.numeroLikes}</span> persone</p>
                </div>
            </div>
    `




    document.querySelector(".container").insertAdjacentHTML("beforeend", postElement)
    
}