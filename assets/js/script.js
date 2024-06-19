const propiedades_venta = [
    {
        nombre: 'Apartamento zona norte estándar alto',
        src: "./assets/img/depto1.jpg",
        descripcion: 'Este apartamento de lujo está ubicado en zona norte y es de alto estándar',
        ubicacion: 'Norte Chile 123, Region Antofagasta',
        habitaciones: 2,
        banos: 1,
        costo: 5000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento zona norte estándar medio',
        src: './assets/img/depto2.jpg',
        descripcion: 'Este apartamento residencial está ubicado en zona norte y es de medio estándar',
        ubicacion: 'Norte Chile 1233123, Region Antofagasta',
        habitaciones: 2,
        banos: 1,
        costo: 2500,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Apartamento zona centro estándar alto',
        src: './assets/img/depto3.jpg',
        descripcion: 'Este apartamento residencial está ubicado en zona centro y es de alto estándar',
        ubicacion: 'Centro Chile 1233123, Region Valparaíso',
        habitaciones: 3,
        banos: 2,
        costo: 4500,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Apartamento zona sur estándar medio',
        src: './assets/img/depto4.jpg',
        descripcion: 'Este apartamento residencial está ubicado en zona sur y es de medio estándar',
        ubicacion: 'Sur Chile 1233123, Region Bío Bío',
        habitaciones: 4,
        banos: 2,
        costo: 1500,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Apartamento zona sur estándar alto',
        src: './assets/img/depto9.jpg',
        descripcion: 'Este apartamento residencial está ubicado en zona sur y es de alto estándar',
        ubicacion: 'Sur Chile 1233123, Region Bío Bío',
        habitaciones: 3,
        banos: 2,
        costo: 1500,
        smoke: true,
        pets: false
    }
]

const propiedades_alquiler = [
    {
        nombre: 'Apartamento zona sur estándar bajo',
        src: './assets/img/depto5.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en zona sur y es de bajo estándar',
        ubicacion: 'Sur Chile 123, Region Bío Bío',
        habitaciones: 1,
        banos: 1,
        costo: 250,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento zona norte estándar medio',
        src: './assets/img/depto6.jpg',
        descripcion: 'Este apartamento residencial está ubicado en zona norte y es de medio estándar',
        ubicacion: 'Norte Chile 1233123, Region Antofagasta',
        habitaciones: 2,
        banos: 1,
        costo: 500,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Apartamento zona centro estándar medio',
        src: './assets/img/depto7.jpg',
        descripcion: 'Este apartamento residencial está ubicado en zona centro y es de medio estándar',
        ubicacion: 'Centro Chile 1233123, Region Valparaíso',
        habitaciones: 1,
        banos: 1,
        costo: 300,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Apartamento zona sur estándar alto',
        src: './assets/img/depto8.jpg',
        descripcion: 'Este apartamento residencial está ubicado en zona sur y es de alto estándar',
        ubicacion: 'Sur Chile 1233123, Region Bío Bío',
        habitaciones: 2,
        banos: 2,
        costo: 1000,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Apartamento zona sur estándar bajo',
        src: './assets/img/depto10.jpg',
        descripcion: 'Este apartamento residencial está ubicado en zona sur y es de bajo estándar',
        ubicacion: 'Sur Chile 1233123, Region Bío Bío',
        habitaciones: 1,
        banos: 1,
        costo: 200,
        smoke: true,
        pets: false
    }
]

function fumar (valor){
    if (valor==true){
        return ["Permitido fumar","text-success"]
    } else{
        return ["No se permite fumar","text-danger"]
    }
}
function mascota (valor){
    if (valor==true){
        return ["Mascotas permitidas","text-success"]
    } else{
        return ["No se permiten mascotas","text-danger"]
    }
}

var div_enalquiler=document.querySelector("#enalquiler");
var div_enventa=document.querySelector("#enventa");
var div_enalquiler_1=document.querySelector("#enalquiler_1");
var div_enventa_1=document.querySelector("#enventa_1");


console.log(div_enventa)
console.log(div_enalquiler)

div_enventa==null ? console.log("vacio") : console.log("no")

if (div_enalquiler==null & div_enventa!= null){
    for (en_venta of propiedades_venta){
        let fumar_desc= fumar(en_venta.smoke)
        let mascota_desc= mascota(en_venta.pets)
    
        div_enventa.innerHTML+=
        `
        <div class="col-md-4 mb-4">
        <div class="card">
            <img
            src=${en_venta.src}
            class="card-img-top"
            alt="Imagen del departamento"
            />
            <div class="card-body">
            <h5 class="card-title">${en_venta.nombre}</h5>
            <p class="card-text">
                ${en_venta.descripcion}
            </p>
            <p>
                <i class="fas fa-map-marker-alt"></i> ${en_venta.ubicacion}
            </p>
            <p>
                <i class="fas fa-bed"></i> ${en_venta.habitaciones} |
                <i class="fas fa-bath"></i> ${en_venta.banos}
            </p>
            <p><i class="fas fa-dollar-sign"></i>${en_venta.costo}</p>
            <p class=${fumar_desc[1]}>
                <i class="fas fa-smoking"></i> ${fumar_desc[0]}
            </p>
            <p class=${mascota_desc[1]}>
                <i class="fas fa-paw"></i> ${mascota_desc[0]}
            </p>
            </div>
        </div>
        </div>
            `
    }
} else if (div_enventa==null & div_enalquiler!=null){
    for (en_alquiler of propiedades_alquiler){
        let fumar_desc= fumar(en_alquiler.smoke)
        let mascota_desc= mascota(en_alquiler.pets)
    
        div_enalquiler.innerHTML+=
        `
        <div class="col-md-4 mb-4">
        <div class="card">
            <img
            src=${en_alquiler.src}
            class="card-img-top"
            alt="Imagen del departamento"
            />
            <div class="card-body">
            <h5 class="card-title">${en_alquiler.nombre}</h5>
            <p class="card-text">
                ${en_alquiler.descripcion}
            </p>
            <p>
                <i class="fas fa-map-marker-alt"></i> ${en_alquiler.ubicacion}
            </p>
            <p>
                <i class="fas fa-bed"></i> ${en_alquiler.habitaciones} |
                <i class="fas fa-bath"></i> ${en_alquiler.banos}
            </p>
            <p><i class="fas fa-dollar-sign"></i>${en_alquiler.costo}</p>
            <p class=${fumar_desc[1]}>
                <i class="fas fa-smoking"></i> ${fumar_desc[0]}
            </p>
            <p class=${mascota_desc[1]}>
                <i class="fas fa-paw"></i> ${mascota_desc[0]}
            </p>
            </div>
        </div>
        </div>
            `
    }
} else if(div_enventa==null & div_enalquiler==null){
    for (var i=0;i<3;i++){
        let fumar_desc= fumar(propiedades_venta[i].smoke)
        let mascota_desc= mascota(propiedades_venta[i].pets)
    
        div_enventa_1.innerHTML+=
        `
        <div class="col-md-4 mb-4">
        <div class="card">
            <img
            src=${propiedades_venta[i].src}
            class="card-img-top"
            alt="Imagen del departamento"
            />
            <div class="card-body">
            <h5 class="card-title">${propiedades_venta[i].nombre}</h5>
            <p class="card-text">
                ${propiedades_venta[i].descripcion}
            </p>
            <p>
                <i class="fas fa-map-marker-alt"></i> ${propiedades_venta[i].ubicacion}
            </p>
            <p>
                <i class="fas fa-bed"></i> ${propiedades_venta[i].habitaciones} |
                <i class="fas fa-bath"></i> ${propiedades_venta[i].banos}
            </p>
            <p><i class="fas fa-dollar-sign"></i>${propiedades_venta[i].costo}</p>
            <p class=${fumar_desc[1]}>
                <i class="fas fa-smoking"></i> ${fumar_desc[0]}
            </p>
            <p class=${mascota_desc[1]}>
                <i class="fas fa-paw"></i> ${mascota_desc[0]}
            </p>
            </div>
        </div>
        </div>
            `

    fumar_desc= fumar(propiedades_alquiler[i].smoke)
    mascota_desc= mascota(propiedades_alquiler[i].pets)

    div_enalquiler_1.innerHTML+=
    `
    <div class="col-md-4 mb-4">
    <div class="card">
        <img
        src=${propiedades_alquiler[i].src}
        class="card-img-top"
        alt="Imagen del departamento"
        />
        <div class="card-body">
        <h5 class="card-title">${propiedades_alquiler[i].nombre}</h5>
        <p class="card-text">
            ${propiedades_alquiler[i].descripcion}
        </p>
        <p>
            <i class="fas fa-map-marker-alt"></i> ${propiedades_alquiler[i].ubicacion}
        </p>
        <p>
            <i class="fas fa-bed"></i> ${propiedades_alquiler[i].habitaciones} |
            <i class="fas fa-bath"></i> ${propiedades_alquiler[i].banos}
        </p>
        <p><i class="fas fa-dollar-sign"></i>${propiedades_alquiler[i].costo}</p>
        <p class=${fumar_desc[1]}>
            <i class="fas fa-smoking"></i> ${fumar_desc[0]}
        </p>
        <p class=${mascota_desc[1]}>
            <i class="fas fa-paw"></i> ${mascota_desc[0]}
        </p>
        </div>
    </div>
    </div>
        `    

    }
}








