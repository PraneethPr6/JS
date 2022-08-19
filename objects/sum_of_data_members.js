function Check(obj1) {
    return Object.values(obj1).reduce((a, b) => a + b, 0);
}
