const today = new Date();
const currentyear = document.querySelector("#currentyear");
currentyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

let text = document.lastModified;
document.getElementById("lastModified").innerHTML = text;
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const sources = [
    {
        title: "Digital Art Served",
        description: "A gallery of curated work from an online art collective, mainly 3D renders",
        type: "Collection",
        price: "Free",
        imageUrl:"https://mir-s3-cdn-cf.behance.net/projects/404/1802028.544ef2488ace5.jpg"
    },
    {
        title: "Pinterest",
        description: "A source of inspiration for beginners and advanced",
        type: "Collection",
        price: "Free",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
    },
    {
        title: "Dribbble",
        description: "Check the latest artwork in graphic design, a forum to give feedback",
        type: "Collection",
        price: "Free",
        imageUrl: "https://cdn.dribbble.com/users/12947/screenshots/14387128/media/6a8310a77fb323a4ddc0813a532f617c.jpg?resize=450x338&vertical=center"
    },
    {
        title: "Ctrl+Paint",
        description: "Design Courses depending on what kind of medium is being looked at, at different levels of advancement",
        type: "Walkthrough",
        price: "Free, $10 for 'Premium' videos",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/593a0aba2e69cf43f86c79f3/1532889237355-D49BZ6AFCAOCZS1PK130/ctrlPaint_01a.jpg"
    },
    {
        title: "Artweaver Free",
        description: "A beginner's software for digital art, only basic brushes so is great for children",
        type: "Software",
        price: "Free",
        imageUrl: "https://images.softwaresuggest.com/software_logo/1588069023_Artweaver%20logo.png"
    },
    {
        title: "CartoonSmart",
        description: "Library of tutorials and courses especially centering on different kinds of popular software",
        type: "Walkthrough",
        price: "Free, Premium is $99.98 yearly or $199 for a lifetime",
        imageUrl: "https://i.vimeocdn.com/portrait/10012534_640x640?sig=bb0a668ed5c347c63b0b56e6ca4c07111b9088f24bc25e31ea0cbb8217d2c2ba&v=1"
    },
    {
        title: "Corel Painter",
        description: "A software for digital painting, updated often. Wide array of brushes and capable of 3D effects",
        type: "Software",
        price: "Price varies depending on version and subscription access, $94.60 for 2023 edition",
        imageUrl: "https://m.media-amazon.com/images/I/81b3SBXuwhL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        title:"ImagineFX",
        description: "A magazine with references, interview, updates, and dvds of new content",
        type: "Collection",
        price: "$7.41 per issue, $24.07 per 3 issues/subscription quarterly",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/3/30/ImagineFX_August_2018_cover.jpg"
    },
    {
        title: "Paintable",
        description: "A series of videos on digital painting by David Balliveau and an academy taught by the man himself",
        type: "Walkthrough",
        price: "Free for tutorials and inspiration, $45 monthly and $399 annual for the academy",
        imageUrl: "https://paintable.cc/wp-content/uploads/2018/08/Paintable-Icon.png"
    },
    {
        title: "Sinix Design",
        description: "A Youtube channel filled to the brim with tutorials and inspiration related to digital painting",
        type: "Channel",
        price: "Free",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRROKMvdwFJNMEu2ziqQI4eLYL5H224X4mqMA&s"
    },
    {
        title: "Concept Art World",
        description: "A gallery of digital artists for inspiration with a wide array of forms",
        type: "Collection",
        price: "Free",
        imageUrl: "https://pbs.twimg.com/profile_images/949506199837265920/FH5hvV0b_400x400.jpg"
    },
    {
        title: "Ram Studio Comics",
        description: "Either through his courses or his Youtube channel, Robert Marzullo provides numerous tutorials on certain software and brushes with art style basics",
        type: "Channel",
        price: "Youtube Videos are Free, Website courses range from $6-$99",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnYvHFCWrV8D7EBs7mFJswJi_aKF-KPiCJTg&s"
    },
    {
        title: "Deviant Art",
        description: "A large open-source gallery for inspiration. Everyone and anyone can publish their work, so be discernable when viewing",
        type: "Collection",
        price: "Free",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpnM4IuvoPoMAgqQ-IDNkK2cEhFlEuZLzz3Q&s"
    },
    {
        title: "Proko",
        description: "A Youtube channel led by Stan Prokopenko with instruction videos for all artists, digital and traditional",
        type: "Channel",
        price: "Free",
        imageUrl: "https://yt3.googleusercontent.com/QJ65R-XtiNccZ8OLfQRo9uJ1H5rujWLt5bF2F1gJpOs9r2Zf4flpiCidYNLVJpws3o6D7k_g_w=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        title: "Digital Painting Studio",
        description: "Online resources with both free and paid courses on concept art and specialized software",
        type: "Walkthrough",
        price: "Free for community items, $9-39 per month courses, $29 for project kits, $250 per month or one time payment of $2850 for a mentorship program",
        imageUrl: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2149982776/settings_images/6e1b0bd-fea0-2b2d-120a-bb7551e658_DPs_Logo.png"
    },
    {
        title: "Circle Line Art School",
        description: "A Youtube channel dedicated to learning art fundamentals, especially perspectives, through numerous tutorials",
        type: "Channel",
        price: "Free",
        imageUrl: "https://yt3.googleusercontent.com/ytc/AIdro_n7u7h9wwRg02pUxXnAIcuEglvAIlkSd71zQht3WcvR6xo=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        title: "Sycra",
        description: "A Youtube channel with general art tips on design, drawings, and painting through step-by-step tutorials for novice learners",
        type: "Channel",
        price: "Free",
        imageUrl: "https://yt3.googleusercontent.com/Ge6BzREGUZGgtmApes7pHXKbEkO6iU3oPhoyqoKklXpudvHCZThT1jFiSynHbqfvW0iMo_uH=s160-c-k-c0x00ffffff-no-rj"
    },
    {
        title: "FZDSchool",
        description: "A Youtube channel built off of a no longer operating academy. The courses are still available through videos centering on concept design",
        type: "Channel",
        price: "Free",
        imageUrl: "https://yt3.googleusercontent.com/mQox6-WO8YM5jxibGunsUBtxUPQrkQMG0cOrMtyLoPRHkfjDMcC-1wBi7EZQfVqoBVewID212g=s160-c-k-c0x00ffffff-no-rj"
    },
    {
        title: "Alphonso Dunn",
        description: "A Youtube channel teaching art basics through traditional mediums, concepts that transition easily to digital art",
        type: "Channel",
        price: "Free",
        imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRxpA2h2YNIcM46iUNe6hlu0mf-LODiwKbpnPUBmUCyS1lbBZDf"
    },
    {
        title: "Jaysen Batchelor",
        description: "A Youtube channel full of masterclasses on character design, game design, and general photoshop usage",
        type: "Channel",
        price: "Free",
        imageUrl: "https://yt3.googleusercontent.com/Wnaxzo7xdA8wOmKYBSulkkBRJBzgRCvYyBorwiIchSvpOLz0oQ-wRBFuJjFArMFLVPvgnzkg_Q=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        title: "Society of Visual Storytelling",
        description: "A library of courses on illustration, visual storytelling, and other similar art concepts",
        type: "Walkthrough",
        price: "$29.95 monthly and $249.95 annually",
        imageUrl: "https://yt3.googleusercontent.com/-_uPuqesaN-tNvV1_sbQi1XDupWRsVXySoesqTkPvJLcPn9r0p6nNWFXGgmzHeL9nUJttrlTvA=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        title: "Inkscape",
        description: "An open source software with an extensive range of tools and effects",
        type: "Software",
        price: "Free",
        imageUrl: "https://i0.wp.com/morristownmakers.com/wp-content/uploads/2020/08/inkscape-logo.png?resize=298%2C314"
    },
    {
        title: "Pixbuilder Studio",
        description: "An image editing software with easy image manipulation through colors, fonts, and effects",
        type: "Software",
        price: "Free",
        imageUrl: "https://images.sftcdn.net/images/t_app-icon-s/p/6f693f64-9b32-11e6-a347-00163ec9f5fa/164266651/pixbuilder-studio-7378b7be3cfffd25.jpg"
    },
    {
        title: "Gravit Designer",
        description: "A drawing software usable through online and desktop version with only essential vector tools. Best for very beginners",
        type: "Software",
        price: "Free",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXWNco2sMBFiUitpBNG7-wFkSS_WpoTNWmyw&s"
    },
    {
        title: "MediBang Paint Pro",
        description: "Meant for anime and comics, a digital painting software with pre-installed backgrounds and templates with varying brushes and fonts",
        type: "Software",
        price: "Free",
        imageUrl: "https://medibangpaint.com/static/images/en/tutorial/pc/introduction/thumbnail.png"
    },
    {
        title: "Krita",
        description: "An open-source painting program for professional artist to provide tools to beginners. Tools are available for all kinds of digital art forms",
        type: "Software",
        price: "Free",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF79KpY3-vJq2gYOmDDmfRxR80nlgfK5YkQw&s"
    },
    {
        title: "Myfonts.com",
        description: "Numerous fonts that can be downloaded and added to digital art",
        type: "Collection",
        price: "Free-$40 depending on type",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_sJvvlBQRnHxwXgzRuhBEMIrv60OSfhmZdA&s"
    },
    {
        title: "Sketchpad",
        description: "An online based drawing software with tools available offline",
        type: "Software",
        price: "Free",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIf7gXa91hBIl190h74HmnSgk_-PfX_ZRtZQ&s"
    },
    {
        title: "Vectr",
        description: "A powerful software to help create vector art comparable to Adobe Illustrator that can be used online and downloaded",
        type: "Software",
        price: "Free to $7.99 per month",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTApYvgxkrax-ppr4wJj48wPzMgM-woZFiEJA&s"
    },
    {
        title: "FireAlpaca",
        description: "A digital painting software with new tools being added daily",
        type: "Software",
        price: "Free",
        imageUrl: "https://pbs.twimg.com/profile_images/1012601064749535232/jDuRaXDH_400x400.jpg"
    },
    {
        title: "jacksonpollock.org",
        description: "An online painting software meant entirely for children, the site acts as a digital canvas to play with colors and lines",
        type: "Software",
        price: "Free",
        imageUrl: "https://www.jacksonpollock.org/imgs/sig.png"
    },
    {
        title: "Pixilart",
        description: "An online software with a built in community around pixel art, any art can also be used on T-shirts, mugs and other merchandise",
        type: "Software",
        price: "Free",
        imageUrl: "https://www.pixilart.com/images/public/branding/pixilart-background-colors.png"
    },
    {
        title: "markcrilley",
        description: "A Youtube channel by a comic artist, dedicated to tutorials on basic art principles as well as storytelling element",
        type: "Channel",
        price: "Free",
        imageUrl: "https://i.ytimg.com/vi/lIBfYW-jRxU/hqdefault.jpg"
    },
    {
        title: "Danny Mac 3D",
        description: "A Youtube channel specializing in 3D sculpting tutorials, differing based on software used",
        type: "Channel",
        price: "Free",
        imageUrl: "https://yt3.googleusercontent.com/ityfokhjUr3ucOOPSAmR-sAWScukr4jLpEFhA72sZsGCEL2kxJCPRVfE_i8NiY20Xj2qaeDp=s160-c-k-c0x00ffffff-no-rj"
    },
    {
        title: "Ross Draws",
        description: "A Youtube channel filled with digital painting projects as well as walkthroughs and tips",
        type: "Channel",
        price: "Free",
        imageUrl: "https://yt3.googleusercontent.com/YdyJGJf_9k60bPoyE6SVN_kWL4WthZr9TGqGfVUknwycAk_bv6pQ3iLqP-9N-0XZxSnaD-hue6o=s160-c-k-c0x00ffffff-no-rj"
    },
    {
        title: "Clip Studio Paint",
        description: "A Japanese software developed for comics, illustrations, and 2D animation with open source materials and tools",
        type: "Software",
        price: "Price depends on how limited the tools are, $26.99-76.99 annually",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/6/66/Clip_Studio_Paint_app_logo.png"
    },
    {
        title: "Adobe Illustrator",
        description: "A vector graphic editor and design software, one of many digital art softwares by Adobe",
        type: "Software",
        price: "$263.88",
        imageUrl: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRP10l6ItHrlU5rSdhFvYhbMaD4oJh0_6VWgJrJG6Y9ToEB_lO-HBT3ec3DJOZXPCuOHUsc9SWQr86afM2Duq6ZAUE1nEou6Q"
    },
    {
        title: "Adobe Photoshop",
        description: "A raster graphic editor and one of many Adobe softwares",
        type: "Software",
        price: "$263.88",
        imageUrl: "https://yt3.googleusercontent.com/ytc/AIdro_keG95kcun6Bg2BCPgHNt0b7Gi9ST3ylBP_xE9NM2RfVNqK=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        title: "Adobe Fresco",
        description: "A vector and rastor graphic editor intended for mobile tablets for digital painting and is one of many softwares",
        type: "Software",
        price: "Free",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAptzSmphD8GTrol-71TREQ6bSwSvrrQFqoA&s"
    },
    {
        title: "Adobe Animate",
        description: "A computer animation program meant for vector graphics and is one of many Adobe softwares",
        type: "Software",
        price: "$263.88",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Adobe_Animate_CC_icon.svg"
    },
    {
        title: "Procreate",
        description: "A raster graphics editor for digital painting only available to Apple products",
        type: "Software",
        price: "$12.99",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMMx6m-qkaz24FvYIoPx0kckW-6s_hq-PhQg&s"
    },
    {
        title: "Blender",
        description: "An open-source 3D graphic tool for animation, VFX, virtual reality, and modeling",
        type: "Software",
        price: "Free",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/2503px-Blender_logo_no_text.svg.png"
    },
    {
        title: "Maya Autodesk",
        description: "A 3D computer graphic program to create assets",
        type: "Software",
        price: "$235 per month, $1875 annually",
        imageUrl: "https://i.pinimg.com/originals/a6/a4/bf/a6a4bfb514e96ecf6fdbb6cce692cc48.png"
    },
    {
        title: "Chaotica",
        description: "A fractal art program, usable for any level of expertise",
        type: "Software",
        price: "$45-109 depending on which license is chosen",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh7BXNmuI9LGeXn45kgvRnSgZYdYsvApb6vw&s"
    },
    {
        title: "Apophysis",
        description: "An open-source fractal flame editor and renderer",
        type: "Software",
        price: "Free",
        imageUrl:"https://media.codeweavers.com/pub/crossover/website/appdb/2b04e522fd14e627c5d47cda80ecc30a.png"
    },
    {
        title: "Terragen",
        description: "A powerful tool meant to build, render and animate realistic natural locations",
        type: "Software",
        price:"Free download, premium subscription is $10+/month and $96+/year, license is $199+",
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2BYvXiyCtL_s9UiQBGLleSLaUZj9QPOMt3A&s"
    },
    {
        title: "Aseprite",
        description: "An animated sprite editor and pixel art tool",
        type: "Software",
        price: "$19.99",
        imageUrl: "https://pbs.twimg.com/profile_images/875731732389146624/-UznwnAx_400x400.jpg"
    },
    {
        title: "ZBrush",
        description: "A digital sculpting tool combining 3D and 2.5D modeling and painting",
        type: "Software",
        price: "Free for non-commercial use",
        imageUrl: "https://e7.pngegg.com/pngimages/390/378/png-clipart-zbrush-digital-sculpting-human-anatomy-logo-cad-3d-computer-graphics-text.png"
    },
    {
        title: "iPad Pro with Apple Pen",
        description: "One of the newest Apple tablets made to be compatible with the apple pencil, has software specialized only for it",
        type: "Material",
        price: "Tablet-$999 + Pen-$129, Total of $1128",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw9KahrUekSxO_E_UfG8uMtFx2TTybVaei4w&s"
    },
    {
        title: "Galaxy Tablet S10 with S Pen",
        description: "A mobile tablet series compatible with a separated pen, meant to compete with the Apple equivalent",
        type: "Material",
        price: "$999+ depending on version",
        imageUrl: "https://cdn.mos.cms.futurecdn.net/2MsjxgsLU6hiTrvMNueEKm-320-80.jpg"
    },
    {
        title: "XP-Pen Deco",
        description: "A responsive bluetooth drawing tablet, lightweight and comparatively cheap",
        type: "Material",
        price: "$69.99",
        imageUrl:"https://cdn.mos.cms.futurecdn.net/T3QG62cCJc5HhRiPTrKekF-970-80.jpg.webp"
    },
    {
        title: "Wacom Intuos Pro (large)",
        description: "Best large bluetooth pen tablet, but some pen issues",
        type: "Material",
        price: "$499.95",
        imageUrl: "https://cdn.mos.cms.futurecdn.net/B7P4f5EdqvhmrtN7GkDYUK-970-80.jpg.webp"
    },
    {
        title: "Xencelabs Pen Tablet Medium",
        description: "A decent tablet for the price and provides two different stylus types",
        type: "Material",
        price: "$249.99",
        imageUrl: "https://cdn.mos.cms.futurecdn.net/BBMhfUKGxVjYW5vBPMon9a-970-80.jpeg.webp"
    },
    {
        title: "Xencelabs Pen Display 16",
        description: "A good tablet with a display for the price and incorporates ergonomics in the design",
        type: "Material",
        price: "$1249",
        imageUrl: "https://cdn.mos.cms.futurecdn.net/i5KGETXwRd8mbds5XTiT63-970-80.jpg.webp"
    },
    {
        title: "Wacom Cintiq 22",
        description: "Not great spec wise for a tablet with a display, but is still useful price wise and does its job",
        type: "Material",
        price: "$1299.95",
        imageUrl: "https://cdn.mos.cms.futurecdn.net/XZJmJgo43L9ag7WqN9CT3g-970-80.jpg.webp"
    },
    {
        title: "XP-Pen Artist Pro 16",
        description: "Well-balanced tablet with a display, competitive price-wise",
        type: "Material",
        price: "$599.99",
        imageUrl: "https://cdn.mos.cms.futurecdn.net/DWrhXDZDqXG2PqXvzURY8e-970-80.jpg.webp"
    },
    {
        title: "Wacom Mobile Studio",
        description: "A wacom entry in pen computers with a heavier, less portable side, but is able to run larger software",
        type: "Material",
        price: "$3499.95",
        imageUrl: "https://cdn.mos.cms.futurecdn.net/qjjzukptDnAZbMgyJWFDdK-970-80.jpg.webp"
    },
    {
        title: "XP-Pen Magic Drawing Pad",
        description: "XP-Pen's alternative to the iPad, made to be affordable with lower functionality",
        type: "Material",
        price: "$499.99",
        imageUrl: "https://cdn.mos.cms.futurecdn.net/W4wCKWqfP9iZNs5MgQDGPk-970-80.jpg.webp"
    },
    {
        title: "QuickPoses",
        description: "A library full of challenges and references for anatomy and figure drawing",
        type: "Collection",
        price: "Free",
        imageUrl: "https://quickposes.com/images/logo/qp-logo.svg"
    },
    {
        title: "Sketchdaily.net",
        description: "A random generator of images to study anatomy and challenge artists to do quicker sketches",
        type: "Collection",
        price: "Free",
        imageUrl: "https://64.media.tumblr.com/6b757607c4de2ebd0b171f540706b58e/68e3393689926de3-77/s1280x1920/018a08ba9efe6377acf2f4e333f4a8b571399004.png"
    },
    {
        title: "Adorkastock",
        description: "A library of pose references made by freelance models",
        type: "Collection",
        price: "Free",
        imageUrl:"https://www.adorkastock.com/wp-content/uploads/2020/12/cropped-cropped-shutter-heart-icon-1-100x100.png"
    }
];

createCards(sources);

function filterSources(condition){
    const filteredSources = sources.filter(condition);
    createCards(filteredSources);
}

document.querySelector('#all').addEventListener('click', () => {
    createCards(sources);
})

document.querySelector('#walkthroughs').addEventListener('click', () => {
    filterSources(source => source.type == "Walkthrough");
})

document.querySelector('#channels').addEventListener('click', () => {
    filterSources(source => source.type == "Channel");
})

document.querySelector('#materials').addEventListener('click', () => {
    filterSources(source => source.type == "Material");
})

document.querySelector('#softwares').addEventListener('click', () => {
    filterSources(source => source.type == "Software");
})

document.querySelector('#collections').addEventListener('click', () => {
    filterSources(source => source.type == "Collection");
})

function createCards(filteredSources) {
    const cardContainer = document.querySelector('#image-card-container');
    cardContainer.innerHTML = '' 
      filteredSources.forEach(source =>{
        const cardElement = document.createElement('div');
          cardElement.classList.add('card');
          cardElement.innerHTML=`
          <h3 class="card-title">${source.title}</h3> 
          <p class="card-data"><span>Description: </span>${source.description}</p>
          <p class="card-data"><span>Type: </span>${source.type}</p> 
          <p class="card-data"><span>Price: </span>${source.price}</p>
          <img class="card-img"  loading= "lazy" src=\"${source.imageUrl}" width=\"400px\" height=\"150px\" alt="sources images">
          `
          cardContainer.appendChild(cardElement)
      })
}