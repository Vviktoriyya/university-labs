console.log("Використання: triangle(value1, \"type1\", value2, \"type2\")");
console.log("---------------------------------------------------------");
console.log("Позначення:");
console.log("leg            - катет");
console.log("hypotenuse     - гіпотенуза");
console.log("adjacent angle - прилеглий до катета кут");
console.log("opposite angle - протилежний до катета кут");
console.log("angle          - один з двох гострих кутів (коли задана гіпотенуза)");
console.log("---------------------------------------------------------");
console.log("Аргументи: значення1, тип1, значення2, тип2");
console.log("---------------------------------------------------------");
console.log("Приклади:");
console.log("triangle(4, \"leg\", 8, \"hypotenuse\");");
console.log("triangle(8, \"hypotenuse\", 4, \"leg\");");

function triangle(value1, type1, value2, type2) {
    type1 = String(type1).toLowerCase();
    type2 = String(type2).toLowerCase();
    const allowedTypes = ["leg", "hypotenuse", "adjacent angle", "opposite angle", "angle"];

    if (!allowedTypes.includes(type1) || !allowedTypes.includes(type2)) {
        console.log("ERROR, this type is not in the instruction!!!");
        return "failed";
    }

    if (value1 <= 0 || value2 <= 0) {
        console.log("ERROR, the value should be more than 0!!!");
        return "failed";
    }

    if ((type1.includes("angle") && (value1 <= 0 || value1 >= 90)) ||
        (type2.includes("angle") && (value2 <= 0 || value2 >= 90))) {
        console.log("ERROR, acute angles should be between 0° and 90°!!!");
        return "failed";
    }


    let a, b, c, alpha, beta;

    // leg + leg
    if (type1 === 'leg' && type2 === 'leg') {
        a = value1;
        b = value2;
        c = Math.sqrt(a**2 + b**2);
        alpha = Math.asin(a / c) * 180 / Math.PI;
        beta = Math.asin(b / c) * 180 / Math.PI;
    }

    // leg + hypotenuse
    else if ((type1 === 'leg' && type2 === 'hypotenuse') || (type1 === 'hypotenuse' && type2 === 'leg')) {
        let leg = type1 === 'leg' ? value1 : value2;
        let hyp = type1 === 'hypotenuse' ? value1 : value2;
        if (leg >= hyp) {
            console.log("ERROR, the leg cannot be more than or equal to the hypotenuse!!!");
            return "failed";
        }
        a = type1 === 'leg' ? value1 : value2;
        c = type1 === 'hypotenuse' ? value1 : value2;
        b = Math.sqrt(c**2 - a**2);
        alpha = Math.asin(a / c) * 180 / Math.PI;
        beta = 90 - alpha;
    }
    // leg + angle (adjacent/opposite/angle)
    else if ((type1 === 'leg' && type2.includes('angle')) || (type2 === 'leg' && type1.includes('angle'))) {
        let leg = type1 === 'leg' ? value1 : value2;
        let angleType = type1.includes('angle') ? type1 : type2;
        let angleValue = type1.includes('angle') ? value1 : value2;

        if (angleType === 'opposite angle') {
            alpha = angleValue;
            c = leg / Math.sin(alpha * Math.PI / 180);
            b = Math.sqrt(c**2 - leg**2);
            a = leg;
            beta = 90 - alpha;
        } else if (angleType === 'adjacent angle' || angleType === 'angle') {
            alpha = angleValue;
            c = leg / Math.cos(alpha * Math.PI / 180);
            b = leg;
            a = Math.sqrt(c**2 - b**2);
            beta = 90 - alpha;
        }
    }
    // hypotenuse + angle
    else if ((type1 === 'hypotenuse' && type2.includes('angle')) || (type2 === 'hypotenuse' && type1.includes('angle'))) {
        c = type1 === 'hypotenuse' ? value1 : value2;
        alpha = type1.includes('angle') ? value1 : value2;
        a = c * Math.sin(alpha * Math.PI / 180);
        b = c * Math.cos(alpha * Math.PI / 180);
        beta = 90 - alpha;
    }

    else {
        console.log("ERROR, combination of parameters not allowed");
        return "failed";
    }

    console.log(`Results: a = ${a.toFixed(2)}, b = ${b.toFixed(2)}, c = ${c.toFixed(2)}, alpha = ${alpha.toFixed(2)}°, beta = ${beta.toFixed(2)}° — success`);
    return "success";
}

triangle(4, "leg", 3, "leg");
triangle(5, "leg", 13, "hypotenuse");
triangle(13, "hypotenuse", 5, "leg");
triangle(13, "hypotenuse", 5, "leg");
triangle(10, "hypotenuse", 30, "angle");
triangle(7, "leg", 30, "opposite angle");
triangle(7, "leg", 30, "adjacent angle");

triangle(8, "hypotenuse", 10, "hypotenuse");
triangle(200, "angle", 4, "leg");
triangle(100, "angle", 13, "hypotenuse");
triangle(0, "leg", -7, "leg");
triangle(13, "leg", 10, "hypotenuse");
triangle(5, "anglee", 10, "leg");

