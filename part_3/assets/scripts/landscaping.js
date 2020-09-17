function changeShapeSystem(type) {
    var cubesInputs, cylindersInputs, sphericaInputs, coneInputs;

    cubesInputs = document.querySelectorAll('.cubes');
    cylindersInputs = document.querySelectorAll('.cylinders');
    sphericaInputs = document.querySelectorAll('.spherica');
    coneInputs = document.querySelectorAll('.cone');

    switch (type) {
        case 'Square/Rectangular Cubes':

            //console.log(impInputs);
            for (var i = 0; i < cubesInputs.length; i++) {
                cubesInputs[i].disabled = false;
            }

            for (var i = 0; i < cylindersInputs.length; i++) {
                cylindersInputs[i].disabled = true;
            }

            for (var i = 0; i < sphericaInputs.length; i++) {
                sphericaInputs[i].disabled = true;
            }

            for (var i = 0; i < coneInputs.length; i++) {
                coneInputs[i].disabled = true;
            }
            break;

        case 'Flat bottomed cylinders':

            for (var i = 0; i < cubesInputs.length; i++) {
                cubesInputs[i].disabled = true;
            }

            for (var i = 0; i < cylindersInputs.length; i++) {
                cylindersInputs[i].disabled = false;
            }

            for (var i = 0; i < sphericaInputs.length; i++) {
                sphericaInputs[i].disabled = true;
            }

            for (var i = 0; i < coneInputs.length; i++) {
                coneInputs[i].disabled = true;
            }
            break;

        case '1/2 Spherica':

            for (var i = 0; i < cubesInputs.length; i++) {
                cubesInputs[i].disabled = true;
            }

            for (var i = 0; i < cylindersInputs.length; i++) {
                cylindersInputs[i].disabled = true;
            }

            for (var i = 0; i < sphericaInputs.length; i++) {
                sphericaInputs[i].disabled = false;
            }

            for (var i = 0; i < coneInputs.length; i++) {
                coneInputs[i].disabled = true;
            }
            break;

        case 'Truncated cone':

            for (var i = 0; i < cubesInputs.length; i++) {
                cubesInputs[i].disabled = true;
            }

            for (var i = 0; i < cylindersInputs.length; i++) {
                cylindersInputs[i].disabled = true;
            }

            for (var i = 0; i < sphericaInputs.length; i++) {
                sphericaInputs[i].disabled = true;
            }

            for (var i = 0; i < coneInputs.length; i++) {
                coneInputs[i].disabled = false;
            }
            break;

        default:
            break;
    }
}

function calcCubes() {
    var shapeType;
    var dimensionType1 = null;
    var dimensionType2 = null;
    var dimensionType3 = null;
    var dimension1 = 0;
    var dimension2 = 0;
    var dimension3 = 0;
    var volume = 0;
    var cubes = {};

    shapeType = document.getElementById('shapeType').value;

    dimensionType1 = document.getElementById('cubeDimensions1').value;
    dimension1 = document.getElementById('cubeDimesions1_1').value;

    dimensionType2 = document.getElementById('cubeDimensions2').value;
    dimension2 = document.getElementById('cubeDimesions2_1').value;

    dimensionType3 = document.getElementById('cubeDimensions3').value;
    dimension3 = document.getElementById('cubeDimesions3_1').value;

    volume = dimension1 * dimension2 * dimension3;

    cost = volume * 0.10;

    cubes.shapeType = shapeType;
    cubes.dimensionType1 = dimensionType1;
    cubes.dimension1 = dimension1;
    cubes.dimensionType2 = dimensionType2;
    cubes.dimension2 = dimension2;
    cubes.dimensionType3 = dimensionType3;
    cubes.dimension3 = dimension3;
    cubes.volume = volume.toFixed(2);
    cubes.cost = cost.toFixed(2);

    return cubes;
}

function calcCylinders() {
    var shapeType;
    var dimensionType1 = null;
    var dimensionType2 = null;
    var dimension1 = 0;
    var dimension2 = 0;
    var volume = 0;
    var cylinders = {};

    shapeType = document.getElementById('shapeType').value;

    dimensionType1 = document.getElementById('cylindersDimensions1').value;
    dimension1 = document.getElementById('cylindersDimensions1_1').value;

    dimensionType2 = document.getElementById('cylindersDimensions2').value;
    dimension2 = document.getElementById('cylindersDimensions2_1').value;

    volume = Math.PI * dimension1 * dimension1 * dimension2;

    cost = volume * 0.12;

    cylinders.shapeType = shapeType;
    cylinders.dimensionType1 = dimensionType1;
    cylinders.dimension1 = dimension1;
    cylinders.dimensionType2 = dimensionType2;
    cylinders.dimension2 = dimension2;

    cylinders.volume = volume.toFixed(2);
    cylinders.cost = cost.toFixed(2);

    return cylinders;
}

function calcSpherica() {
    var shapeType;
    var dimensionType1 = null;
    var dimension1 = 0;
    var volume = 0;
    var spherica = {};

    shapeType = document.getElementById('shapeType').value;

    dimensionType1 = document.getElementById('sphericaDimensions1').value;
    dimension1 = document.getElementById('sphericaDimensions1_1').value;


    volume = 1 / 2 * (4 / 3 * Math.PI * dimension1 * dimension1 * dimension1);

    cost = volume * 0.15;

    spherica.shapeType = shapeType;
    spherica.dimensionType1 = dimensionType1;
    spherica.dimension1 = dimension1;
    spherica.volume = volume.toFixed(2);
    spherica.cost = cost.toFixed(2);

    return spherica;
}

function calcCone() {
    var shapeType;
    var dimensionType1 = null;
    var dimensionType2 = null;
    var dimensionType3 = null;
    var dimension1 = 0;
    var dimension2 = 0;
    var dimension3 = 0;
    var volume = 0;
    var cone = {};

    shapeType = document.getElementById('shapeType').value;

    dimensionType1 = document.getElementById('coneDimensions1').value;
    dimension1 = document.getElementById('coneDimesions1_1').value;

    dimensionType2 = document.getElementById('coneDimensions2').value;
    dimension2 = document.getElementById('coneDimesions2_1').value;

    dimensionType3 = document.getElementById('coneDimensions3').value;
    dimension3 = document.getElementById('coneDimesions3_1').value;

    volume = 1 / 3 * Math.PI * (dimension1 * dimension1 + dimension1 * dimension2 + dimension2 * dimension2) * dimension3

    cost = volume * 0.20;

    cone.shapeType = shapeType;
    cone.dimensionType1 = dimensionType1;
    cone.dimension1 = dimension1;
    cone.dimensionType2 = dimensionType2;
    cone.dimension2 = dimension2;
    cone.dimensionType3 = dimensionType3;
    cone.dimension3 = dimension3;
    cone.volume = volume.toFixed(2);
    cone.cost = cost.toFixed(2);

    return cone;
}

function calcOrder() {

    var cubes = calcCubes();
    var cylinders = calcCylinders();
    var spherica = calcSpherica();
    var cone = calcCone();


    dispOrder(cubes, cylinders, spherica, cone);


}

function dispOrder(cubesObj, cylindersObj, sphericaObj, coneObj) {
    var fName, lName, address, postalCode;
    var receipt = '';

    fName = document.getElementById('firstName').value;
    lName = document.getElementById('lastName').value;
    address = document.getElementById('address').value;
    postalCode = document.getElementById('postalCode').value;


    receipt += '<h4>Customer Information</h4>';
    receipt += '<p>Last Name: ' + lName + '  First Name: ' + fName + '</p>';
    receipt += '<p>Address: ' + address + '</p>';
    receipt += '<p>Postal Code: ' + postalCode + '</p>';
    receipt += '<h4>Order Details</h4>';

    if (cubesObj.cost != 0) {
        console.log(cubesObj.cost);
        receipt += '<p>' + 'Type of Planter: ' + cubesObj.shapeType + '</p>';
        receipt += '<p>' + 'Dimensions and Volume' + '</p>';
        receipt += '<ul>';

        receipt += '<li>' + cubesObj.dimensionType1 + ': ' + cubesObj.dimension1 + 'cm' + '</li>';
        receipt += '<li>' + cubesObj.dimensionType2 + ': ' + cubesObj.dimension2 + 'cm' + '</li>';
        receipt += '<li>' + cubesObj.dimensionType3 + ': ' + cubesObj.dimension3 + 'cm' + '</li>';
        receipt += '<li>' + 'volume: ' + cubesObj.volume + 'cm3' + '</li>';

        receipt += '</ul>';
        receipt += '<p>' + 'Total cost: ' + '$' + cubesObj.cost + '</p>';

    }
    
    if (cylindersObj.cost != 0) {

        receipt += '<p>' + 'Type of Planter: ' + cylindersObj.shapeType + '</p>';
        receipt += '<p>' + 'Dimensions and Volume' + '</p>';
        receipt += '<ul>';

        receipt += '<li>' + cylindersObj.dimensionType1 + ': ' + cylindersObj.dimension1 + 'cm' + '</li>';
        receipt += '<li>' + cylindersObj.dimensionType2 + ': ' + cylindersObj.dimension2 + 'cm' + '</li>';
   
        receipt += '<li>' + 'volume: ' + cylindersObj.volume + 'cm3' + '</li>';

        receipt += '</ul>';
        receipt += '<p>' + 'Total cost: ' + '$' + cylindersObj.cost + '</p>';

    }
  
    if (sphericaObj.cost != 0) {

        receipt += '<p>' + 'Type of Planter: ' + sphericaObj.shapeType + '</p>';
        receipt += '<p>' + 'Dimensions and Volume' + '</p>';
        receipt += '<ul>';

        receipt += '<li>' + sphericaObj.dimensionType1 + ': ' + sphericaObj.dimension1 + 'cm' + '</li>';
        
   
        receipt += '<li>' + 'volume: ' + sphericaObj.volume + 'cm3' + '</li>';

        receipt += '</ul>';
        receipt += '<p>' + 'Total cost: ' + '$' + sphericaObj.cost + '</p>';

    }

    if (coneObj.cost != 0) {

        receipt += '<p>' + 'Type of Planter: ' + coneObj.shapeType + '</p>';
        receipt += '<p>' + 'Dimensions and Volume' + '</p>';
        receipt += '<ul>';

        receipt += '<li>' + coneObj.dimensionType1 + ': ' + coneObj.dimension1 + 'cm' + '</li>';
        receipt += '<li>' + coneObj.dimensionType2 + ': ' + coneObj.dimension2 + 'cm' + '</li>';
        receipt += '<li>' + coneObj.dimensionType3 + ': ' + coneObj.dimension3 + 'cm' + '</li>';
        receipt += '<li>' + 'volume: ' + coneObj.volume + 'cm3' + '</li>';

        receipt += '</ul>';
        receipt += '<p>' + 'Total cost: ' + '$' + coneObj.cost + '</p>';

    }
    console.log(receipt);
    document.getElementById('displayOrder').innerHTML = receipt;

}