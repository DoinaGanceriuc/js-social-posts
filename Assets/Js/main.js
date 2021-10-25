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
        immagine: "https://i.picsum.photos/id/864/300/300.jpg?hmac=vS7RjFd0kISq4skaH_DLn2J_I5p5i-Z3w5Eob_LwlAk",
        nomeAutore: "Phil Mangione",
        avatarAutore: "https://i.picsum.photos/id/103/300/300.jpg?hmac=g2qp6CaucrgdrPEmPsf-cpy7hrnv6UDL3epElUsnMyQ",
        numeroLikes: 80,
        dataCreazione:"4 mesi fa"

    }, 
    {
        id: 2,
        contenuto: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, modi aliquid, ipsa voluptatum optio nihil molestiae in dolore dolores, quis omnis libero qui eaque itaque deserunt! Quisquam, at quibusdam! Cum.",
        immagine: "https://i.picsum.photos/id/184/300/300.jpg?hmac=vhW7YQcLmc_QysIuIuS8uSu6lbXS4Dw9btPbw2cQn90",
        nomeAutore: "Sofia Perlari",
        avatarAutore: "https://i.picsum.photos/id/628/300/300.jpg?hmac=ML4RdmepzVTOl4zptucXgnlwbQ8mSbJ3TiL5U5fgGvQ",
        numeroLikes: 75,
        dataCreazione:"2 mesi fa"

    },
     {
        id: 3,
        contenuto: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, modi aliquid, ipsa voluptatum optio nihil molestiae in dolore dolores, quis omnis libero qui eaque itaque deserunt! Quisquam, at quibusdam! Cum.",
        immagine: "https://i.picsum.photos/id/120/300/300.jpg?hmac=hDgY6Ddzn2TXPA1WBM44RB5mka-jShgV7sXprLSVH4Y",
        nomeAutore: "Mario Rossi",
        avatarAutore: "https://i.picsum.photos/id/845/300/300.jpg?hmac=q5XPOzz2vTZt_PpOgSI8u8tw7bnG85xz42PjWLOcJ6U",
        numeroLikes: 5,
        dataCreazione:"1 mese fa"

    },
     {
        id: 4,
        contenuto: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, modi aliquid, ipsa voluptatum optio nihil molestiae in dolore dolores, quis omnis libero qui eaque itaque deserunt! Quisquam, at quibusdam! Cum.",
        immagine: "https://i.picsum.photos/id/179/300/300.jpg?hmac=EG56WiFo72qraubmhi9W4fHqaomaMxQ3gMwo6pKvVNs",
        nomeAutore: "Federica Bianchi",
        avatarAutore: "https://i.picsum.photos/id/464/300/300.jpg?hmac=PvV-hZNabWHmZw8hesE0G3qvVAv1JoAsO_Gl4tqYJOY",
        numeroLikes: 0,
        dataCreazione:"3 mesi fa"

    }

]

const likes = [1, 2, 3];
let contatore = 1;

// seleziona elementi DOM
const spanElement = document.getElementsByClassName("newlike")
//console.log(spanElement);

for (let index = 0; index < spanElement.length; index++) {
    const element = spanElement[index];
    console.log(element);
    
}




for (let index = 0; index < posts.length; index++) {
    const singlePost = posts[index];
    // console.log(singlePost);

    let numberLikes = singlePost.numeroLikes
    //console.log(numberLikes);
    const id = singlePost.id
    //console.log(id);
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
                    <button class="addLike" id=${singlePost.id}> <i class="fas fa-thumbs-up"></i> Mi piace</button>
                    <p>Piace a <span class="newlike">${singlePost.numeroLikes}</span> persone</p>
                </div>
            </div>
    `




    document.querySelector(".container").insertAdjacentHTML("beforeend", postElement)
    document.getElementById(id).addEventListener("click",function() {
      


    if (likes.includes(id)) {
        console.log("c'è l'id del post con like");
        let addNewLike = singlePost.numeroLikes + contatore
        document.getElementById(id).classList.add("green")
       // spanElement.insertAdjacentHTML("beforeend", addNewLike)
    //console.log(addNewLike);

    }
})

}







