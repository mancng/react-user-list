const generateRandomItem = (items: string[]) => {
    return items[Math.floor(Math.random()*items.length)];
}

export { generateRandomItem }