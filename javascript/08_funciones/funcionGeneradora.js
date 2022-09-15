function* idsPares() {
    let id = 0;
    while(true){
        yield id += 2;
    }
}

idsPares();