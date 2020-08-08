import project1 from '../assets/project1.jpg'
import project2 from '../assets/project2.jpg'


var Fakerator = require("fakerator");
var fakerator = Fakerator("es-ES");

export const projects = [
    {
        _id: '21212323254541',
        companyName: 'Sinergia',
        projectName: fakerator.names.name(),
        price: fakerator.random.number(1000, 5000),
        dues: fakerator.random.number(100000, 500000),
        initial: fakerator.random.number(10, 20),
        city: 'Santiago',
        address: fakerator.address.street(),
        description: fakerator.lorem.paragraph(),
        image:{project1}
    },
    {
        _id: '21212323254542',
        companyName: 'Sinergia',
        projectName: fakerator.names.name(),
        price: fakerator.random.number(1000, 5000),
        dues: fakerator.random.number(100000, 500000),
        initial: fakerator.random.number(10, 20),
        city: 'Valparaiso',
        address: fakerator.address.street(),
        description: fakerator.lorem.paragraph(),
        image:{project2}
    },
    {
        _id: '21212323254543',
        companyName: 'Sinergia',
        projectName: fakerator.names.name(),
        price: fakerator.random.number(1000, 5000),
        dues: fakerator.random.number(100000, 500000),
        initial: fakerator.random.number(10, 20),
        city: 'Talca',
        address: fakerator.address.street(),
        description: fakerator.lorem.paragraph()
    },
    {
        _id: '21212323254544',
        companyName: 'Sinergia',
        projectName: fakerator.names.name(),
        price: fakerator.random.number(1000, 5000),
        dues: fakerator.random.number(100000, 500000),
        initial: fakerator.random.number(10, 20),
        city: 'Valdivia',
        address: fakerator.address.street(),
        description: fakerator.lorem.paragraph()
    },
    //...........................
    {
        _id: '21212323254545',
        companyName: 'Construcciones Almagro',
        projectName: fakerator.names.name(),
        price: fakerator.random.number(1000, 5000),
        dues: fakerator.random.number(100000, 500000),
        initial: fakerator.random.number(10, 20),
        city: 'Santiago',
        address: fakerator.address.street(),
        description: fakerator.lorem.paragraph()
    }, 
    {
        _id: '21212323254546',
        companyName: 'Construcciones Almagro',
        projectName: fakerator.names.name(),
        price: fakerator.random.number(1000, 5000),
        dues: fakerator.random.number(100000, 500000),
        initial: fakerator.random.number(10, 20),
        city: 'Valparaiso',
        address: fakerator.address.street(),
        description: fakerator.lorem.paragraph()
    }, 
    {
        _id: '21212323254547',
        companyName: 'Construcciones Almagro',
        projectName: fakerator.names.name(),
        price: fakerator.random.number(1000, 5000),
        dues: fakerator.random.number(100000, 500000),
        initial: fakerator.random.number(10, 20),
        city: 'Talca',
        address: fakerator.address.street(),
        description: fakerator.lorem.paragraph()
    }, 
    {
        _id: '21212323254548',
        companyName: 'Construcciones AlmagroS',
        projectName: fakerator.names.name(),
        price: fakerator.random.number(1000, 5000),
        dues: fakerator.random.number(100000, 500000),
        initial: fakerator.random.number(10, 20),
        city: 'Valdivia',
        address: fakerator.address.street(),
        description: fakerator.lorem.paragraph()
    },
    //....................
    {
        _id: '21212323254549',
        companyName: 'Inmobiliria M3',
        projectName: fakerator.names.name(),
        price: fakerator.random.number(1000, 5000),
        dues: fakerator.random.number(100000, 500000),
        initial: fakerator.random.number(10, 20),
        city: 'Santiago',
        address: fakerator.address.street(),
        description: fakerator.lorem.paragraph()
    }, 
    {
        _id: '212123232545410',
        companyName: 'Inmobiliria M3',
        projectName: fakerator.names.name(),
        price: fakerator.random.number(1000, 5000),
        dues: fakerator.random.number(100000, 500000),
        initial: fakerator.random.number(10, 20),
        city: 'Valparaiso',
        address: fakerator.address.street(),
        description: fakerator.lorem.paragraph()
    }, 
    {
        _id: '212123232545411',
        companyName: 'Inmobiliria M3',
        projectName: fakerator.names.name(),
        price: fakerator.random.number(1000, 5000),
        dues: fakerator.random.number(100000, 500000),
        initial: fakerator.random.number(10, 20),
        city: 'Talca',
        address: fakerator.address.street(),
        description: fakerator.lorem.paragraph()
    }, 
    {
        _id: '212123232545412',
        companyName: 'Inmobiliria M3',
        projectName: fakerator.names.name(),
        price: fakerator.random.number(1000, 5000),
        dues: fakerator.random.number(100000, 500000),
        initial: fakerator.random.number(10, 20),
        city: 'Valdivia',
        address: fakerator.address.street(),
        description: fakerator.lorem.paragraph()
    },
    //.................
    {
        _id: '212123232545413',
        companyName: 'Construcciones Capitalizarme',
        projectName: fakerator.names.name(),
        price: fakerator.random.number(1000, 5000),
        dues: fakerator.random.number(100000, 500000),
        initial: fakerator.random.number(10, 20),
        city: 'Santiago',
        address: fakerator.address.street(),
        description: fakerator.lorem.paragraph()
    }, 
    {
        _id: '212123232545414',
        companyName: 'Construcciones Capitalizarme',
        projectName: fakerator.names.name(),
        price: fakerator.random.number(1000, 5000),
        dues: fakerator.random.number(100000, 500000),
        initial: fakerator.random.number(10, 20),
        city: 'Valparaiso',
        address: fakerator.address.street(),
        description: fakerator.lorem.paragraph()
    }, 
    {
        _id: '212123232545415',
        companyName: 'Construcciones Capitalizarme',
        projectName: fakerator.names.name(),
        price: fakerator.random.number(1000, 5000),
        dues: fakerator.random.number(100000, 500000),
        initial: fakerator.random.number(10, 20),
        city: 'Talca',
        address: fakerator.address.street(),
        description: fakerator.lorem.paragraph()
    }, {
        _id: '212123232545416',
        companyName: 'Construcciones Capitalizarme',
        projectName: fakerator.names.name(),
        price: fakerator.random.number(1000, 5000),
        dues: fakerator.random.number(100000, 500000),
        initial: fakerator.random.number(10, 20),
        city: 'Valdivia',
        address: fakerator.address.street(),
        description: fakerator.lorem.paragraph()
    },

]