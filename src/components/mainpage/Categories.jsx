import React from "react";

const Categories = () => {
    const data = [
        {
            cateImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRIuTNck_93OR0Q84sIot8B2kUFidTWdHoEw&usqp=CAU",
            cateName: "Fashion",
        },
        {
            cateImg: "https://media.istockphoto.com/photos/silver-fridge-an-oven-and-dryer-lined-up-side-by-side-picture-id165789002?k=20&m=165789002&s=612x612&w=0&h=o4TAMWfvq-dGjS001yFKCIaiHqEBW1Mi24y_U2w1WhY=",
            cateName: "Electrodomesticos",
          },
          {
            cateImg: "https://media.istockphoto.com/photos/generic-red-suv-on-a-white-background-side-view-picture-id1157655660?k=20&m=1157655660&s=612x612&w=0&h=WOtAthbmJ9iG1zbKo4kNUsAGMe6-xM-E7a8TMxb5xmk=",
            cateName: "Carros",
          },
          {
            cateImg: "https://media.istockphoto.com/photos/cute-teddy-bear-isolated-on-white-background-picture-id167154546?k=20&m=167154546&s=612x612&w=0&h=ohSaOggNpDrAoixfDG-aaT3QDRD8uc8pRYQvAbmrYPw=",
            cateName: "Hogar & Jardin",
          },
          {
            cateImg: "https://media.istockphoto.com/vectors/realistic-detailed-3d-gift-box-vector-vector-id1305342849?k=20&m=1305342849&s=612x612&w=0&h=SujoHVveMC78cMY6cJQEjo-x-WqXf2BXmHY5hflRHuE=",
            cateName: "Regalos",
          },
          {
            cateImg: "https://media.istockphoto.com/photos/golden-music-notes-isolated-on-white-background-picture-id1182235520?k=20&m=1182235520&s=612x612&w=0&h=oRvvDAb-7qCCRmAoWkQC1FJCAl7RG4YjSvihdpV9SEI=",
            cateName: "Musica",
          },
          {
            cateImg: "https://media.istockphoto.com/vectors/abstract-woman-face-with-wavy-hair-black-and-white-hand-drawn-line-vector-id1257298287?k=20&m=1257298287&s=612x612&w=0&h=irBmZ9dwLgsCjzjtbPtW_FZvBKnLKUvUJ_eyMiRpeN4=",
            cateName: "Salud & Belleza",
          },
          {
            cateImg: "https://media.istockphoto.com/photos/portrait-of-funny-dog-jack-russell-terrier-and-cheerful-cat-scottish-picture-id1215945146?k=20&m=1215945146&s=612x612&w=0&h=-aTkbY1Q07HX4HkQMVrx11n6_kWv060k9uizyoEHNfk=",
            cateName: "Mascotas",
          },
          {
            cateImg: "https://media.istockphoto.com/photos/little-baby-smiling-under-a-white-towel-bath-time-concept-picture-id626089510?k=20&m=626089510&s=612x612&w=0&h=C9CH9rIEMbfd7h1i1dHrxZoc9EZEW9gjyxgi3hXWc_8=",
            cateName: "Bebes",
          },
          {
            cateImg: "https://media.istockphoto.com/photos/shopping-basket-with-variety-of-grocery-products-isolated-on-whi-picture-id639928744?k=20&m=639928744&s=612x612&w=0&h=VNSPaPxE9q9IO_Pwfa6Sh1uqG3G-kWeXY2fI3UvCTBM=",
            cateName: "Comestibles",
          },
          {
            cateImg: "https://media.istockphoto.com/photos/open-vintage-book-isolated-on-a-white-background-image-picture-id1169699948?k=20&m=1169699948&s=612x612&w=0&h=_q6r_JZdgvJQSu4CZcSKQBkdnz06MGXotAqxH9lRUMo=",
            cateName: "Libros",
          },
    ]
    return (
        <>
            <div className="category">
                {
                    data.map((value, index ) => {
                        return(
                            <div className="box f_flex" key={index}>
                                <img src={value.cateImg} alt='' />
                                <span>{value.cateName}</span>
                                
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}


export default Categories