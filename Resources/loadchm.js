function load() {
    var div = document.getElementById("PhysicLoad");
    // var div2 =document.getElementById("PhysicLoad2");
    // var div3 =document.getElementById("PhysicLoad3");
    // var div4 =document.getElementById("PhysicLoad4");



    let data = [
        {
            title: "Separate the given mixture of alcohol and water by distillation",
            link: "../simulations/Chemistry/BoilingPointofEthylAlchohol.html"
        },
        {
            title: "To determine the boiling point of ethyl alcohol",
            link: "../simulations/Chemistry/BPofEthlyAlcohol.html"
        },
        {
            title: "To determine the melting point of naphthalene",
            link: "../simulations/Chemistry/BPofnapthelene.html"
        },
        {
            title: `Prepare pure copper sulphate crystal from the given impure sample`,
            link: "../simulations/Chemistry/Preparepurecoppersulphatecrystal.html"
        },

        {
            title: `To demonstrate sublimation using Solid Ammonium Chloride`,
            link: "../simulations/Chemistry/sublimation.html"
        },
        // {
        //     title: `AC Sonometer`,
        //     link: "ohm.html"
        // },
        // {
        //     title: `Concave Mirror-Focal
        //     Length by u-v Method`,
        //     link: "ohm.html"
        // },
        // {
        //     title: `Convex Mirror-Focal
        //     Length`,
        //     link: "ohm.html"
        // },
        // {
        //     title: `Concave Lens-Focal Length`,
        //     link: "ohm.html"
        // },
        // {
        //     title: `Spectrometer-Prism`,
        //     link: "ohm.html"
        // },
        // {
        //     title: `Refractive Index of Liquid`,
        //     link: "ohm.html"
        // },
        // {
        //     title: `Metre bridge-Resistance
        //     of a wire`,
        //     link: "ohm.html"
        // },
        // {
        //     title: `MetreBridge-Law of
        //     Combination of resistors`,
        //     link: "ohm.html"
        // }, {
        //     title: `Diode Characteristics`,
        //     link: "ohm.html"
        // },
        // {
        //     title: `Zener Diode`,
        //     link: "ohm.html"
        // },
        // {
        //     title: `Transistor Characteristics`,
        //     link: "ohm.html"
        // }
    ]
    let HtmlText = "";
    data.map((d, i) => {

        HtmlText += `
        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4  mx-auto"
        style="">
        <a href="${d.link}" style="text-decoration:none; color:white">
        <div class="card" style="border:1px solid #71AF06; z-index:111;">

            <img class="imagestyle" src="../pictures/chem/${i + 1}.png"
                class="card-img-top"
                style="width:100%; height: auto; object-fit:cover;" alt=" the experminent Picture of" +${d.title}>

            <div class="card-body position-relative overflow-hidden" style="padding-bottom:65px;">
                <h1 class="card-title" style="font-size:
                    16px; line-height:16px; font-weight: 700; padding-bottom: 20px;">
                    <!--${d.title.slice(0, 50)} --!>
                    ${d.title}

                </h1>
                
                <p class="card-text d-flex justify-content-end "
                    style="width:100%;">
                    
                </p>
            </div>
        </div>
        </a>
    </div>
`
    })

    div.innerHTML = HtmlText;
    // div2.innerHTML = HtmlText;
    // div3.innerHTML = HtmlText;
    // div4.innerHTML = HtmlText;
}


load()