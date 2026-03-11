function calcRadius(side, angle) {
    const rad = angle * (Math.PI / 180);

    return (side * Math.sin(rad)) / 2;
}

export { calcRadius };