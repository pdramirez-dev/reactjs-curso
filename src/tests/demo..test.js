
test('Deve ser True', () => {
    const isActive = true;
    if(!isActive){
        throw new Error('No esta Activo')
    }
});