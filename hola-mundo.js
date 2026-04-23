function main() {
    // os.getenv("USERNAME") equivale a process.env.USERNAME
    const nombre = process.env.USERNAME || process.env.USER; 
    console.log(`¡Hola, ${nombre} desde GitHub!`);
}

if (require.main === module) {
    main();
}
