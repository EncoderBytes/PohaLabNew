function load() {
    var div = document.getElementById("PhysicLoad");
    // var div2 =document.getElementById("PhysicLoad2");
    // var div3 =document.getElementById("PhysicLoad3");
    // var div4 =document.getElementById("PhysicLoad4");



    let data = [
        {
            title: "Boiling Point of Alcohol by Distillation",
            link: "../simulations/Chemistry/BoilingPointofEthylAlchohol.html"
        },
        {
            title: "Boiling Point of Ethyle Alcohol",
            link: "../simulations/Chemistry/BPofEthlyAlcohol.html"
        },
        {
            title: "Boiling Point of Nepthalene",
            link: "../simulations/Chemistry/BPofnapthelene.html"
        },
        {
            title: `Prepare pure copper sulphate crystal from the given impure sample`,
            link: "../simulations/Chemistry/Preparepurecoppersulphatecrystal.html"
        },

        {
            title: `Sublimation`,
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
                        <div class="card" style="border:1px solid #F99B27; z-index:111;">

                            <img src="../pictures/chem/${i + 1}.png"
                                class="card-img-top"
                                style="width:100%; height: auto; object-fit:cover;" alt=" the experminent Picture of" +${d.title}>

                            <div class="card-body position-relative overflow-hidden" style="padding-bottom:65px;">
                                <h1 class="card-title" style="font-size:
                                    16px; line-height:16px; font-weight: 700;">
                                    <!--${d.title.slice(0, 50)} --!>
                                    ${d.title}

                                </h1>
                                
                                <p class="card-text d-flex justify-content-end "
                                    style="width:100%;">
                                    <span style="width:fit-content;
                                        padding:1px 8px;
                                        background: linear-gradient(135deg,
                                        #F99B27 0%, #F99B20 100%);
                                        color:white; border-radius: 8px;
                                        font-weight: bold; position: absolute;
                                        bottom:0px; right:0px;">
                                       <a href="${d.link}" style="text-decoration:none; color:white"> <i class="bi bi-arrow-right"></i> </a>
                                    </span>
                                </p>
                            </div>

                        </div>
                    </div>
        `
    })

    div.innerHTML = HtmlText;
    // div2.innerHTML = HtmlText;
    // div3.innerHTML = HtmlText;
    // div4.innerHTML = HtmlText;
}


load()