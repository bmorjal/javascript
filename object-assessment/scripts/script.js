function display(){  
    const car1 = {
        name: "Toyota Supra mk4 1993",
        type: "Sports car",
        image: "images/supra.jpg",
        price: "up to $200,000",
        specs: "Engine:3.0L sequential turbo straight 6,",
        specs2: "Transmission:6-speed manual or 4-speed automatic,",
        specs3: "Horsepower:321,",
        specs4: "Torque:315 lb-ft,",
        specs5: "0-60 mph, 4.7s,",
        specs6: "1/4 mile:13.1s @109mph,",
        specs7: "Top speed: 177mph."
    };

    {
        let html1 = `<h2>${car1.name}</h2>`+
            `<h3>${car1.type}</h3>` + `<img src = ${car1.image}>` +
            `<h3>Price</h3>` +
            `<p>${car1.price}</p>` + `<h3>Specs</h3>` +
            `<p>${car1.specs}</p>` +
            `<p>${car1.specs2}</p>` +
            `<p>${car1.specs3}</p>` +
            `<p>${car1.specs4}</p>` +
            `<p>${car1.specs5}</p>` +
            `<p>${car1.specs6}</p>` +
            `<p>${car1.specs7}</p>`
        
            document.getElementById("ob1").innerHTML = html1;
    }

    const car2 = {
        name: "Nissan GTR R34 1998",
        type: "Sports car",
        image: "images/gtr.jpg",
        price: "up to $315,187",
        specs: "Engine:in-line 6 twin turbo,",
        specs2:"Transmission:6-speed manual four wheel drive,",
        specs3:"Horsepower:276,",
        specs4:"Torque:216.1 lb-ft,",
        specs5:"0-60 mph, 4.6s,",
        specs6:"1/4 mile:12.3s,",
        specs7:"Top speed: 156mph."
    };

    {
        let html2 = `<h2>${car2.name}</h2>`+
            `<h3>${car2.type}</h3>` + `<img src = ${car2.image}>` +
            `<h3>Price</h3>` +
            `<p>${car2.price}</p>` + `<h3>Specs</h3>` +
            `<p>${car1.specs}</p>` +
            `<p>${car1.specs2}</p>` +
            `<p>${car1.specs3}</p>` +
            `<p>${car1.specs4}</p>` +
            `<p>${car1.specs5}</p>` +
            `<p>${car1.specs6}</p>` +
            `<p>${car1.specs7}</p>`

        
            document.getElementById("ob2").innerHTML = html2;
    }

    const car3 = {
        name: "Honda Civic TypeR 2021",
        type: "Sports car",
        image: "images/honda.jpg",
        price: "$45,000",
        specs: "Engine:2.0L 4-cylinder turbocharged,",
        specs2:"Transmission:6-speed manual,",
        specs3:"Horsepower:306,",
        specs4:"Torque:295 lb-ft,",
        specs5:"0-60 mph, 5.15s,",
        specs6:"1/4 mile:13.2s,",
        specs7:"Top speed: 169mph."
    };

    {
        let html3 = `<h2>${car3.name}</h2>`+
            `<h3>${car3.type}</h3>` + `<img src = ${car3.image}>` +
            `<h3>Price</h3>` +
            `<p>${car3.price}</p>` + `<h3>Specs</h3>` +
            `<p>${car1.specs}</p>` +
            `<p>${car1.specs2}</p>` +
            `<p>${car1.specs3}</p>` +
            `<p>${car1.specs4}</p>` +
            `<p>${car1.specs5}</p>` +
            `<p>${car1.specs6}</p>` +
            `<p>${car1.specs7}</p>`
        
            document.getElementById("ob3").innerHTML = html3;
    }

    const car4 = {
        name: "Ford Mustang Fastback 1964",
        type: "Sports car",
        image: "images/mustang.jpg",
        price: "up to $50,000 or more",
        specs: "Engine:V-8,",
        specs2:"Transmission:4-speed manual,",
        specs3:"Horsepower:260,",
        specs4:"Torque:269 lb-ft,",
        specs5:"0-60 mph, 7.4s,",
        specs6:"1/4 mile:15.9s,",
        specs7:"Top speed: 117mph."
    };

    {
        let html4 = `<h2>${car4.name}</h2>`+
            `<h3>${car4.type}</h3>` + `<img src = ${car4.image}>` +
            `<h3>Price</h3>` +
            `<p>${car4.price}</p>` + `<h3>Specs</h3>` +
            `<p>${car1.specs}</p>` +
            `<p>${car1.specs2}</p>` +
            `<p>${car1.specs3}</p>` +
            `<p>${car1.specs4}</p>` +
            `<p>${car1.specs5}</p>` +
            `<p>${car1.specs6}</p>` +
            `<p>${car1.specs7}</p>`
        
            document.getElementById("ob4").innerHTML = html4;
    }

    const car5 = {
        name: "Chevrolet Camaro SS 1987",
        type: "Sports car",
        image: "images/chevy.jpg",
        price: "$50,000",
        specs: "Engine:V8,",
        specs2:"Transmission:3-speed manual,",
        specs3:"Horsepower:300,",
        specs4:"Torque:300 lb-ft,",
        specs5:"0-60 mph, 6.5s,",
        specs6:"1/4 mile:15s @109mph,",
        specs7:"Top speed: 135mph."
    };

    {
        let html5 = `<h2>${car5.name}</h2>`+
            `<h3>${car5.type}</h3>` + `<img src = ${car5.image}>` +
            `<h3>Price</h3>` +
            `<p>${car5.price}</p>` + `<h3>Specs</h3>` +
            `<p>${car1.specs}</p>` +
            `<p>${car1.specs2}</p>` +
            `<p>${car1.specs3}</p>` +
            `<p>${car1.specs4}</p>` +
            `<p>${car1.specs5}</p>` +
            `<p>${car1.specs6}</p>` +
            `<p>${car1.specs7}</p>`
        
            document.getElementById("ob5").innerHTML = html5;
    }
};

