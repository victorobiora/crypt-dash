const pagination = array => {
   
    const pageOne = array.slice(0, 20)
    const pageTwo = array.slice(22, 20)
    const pageThree = array.slice(42, 20)
    const pageFour = array.slice(62, 20)
    const pageFive = array.slice(82, 20)

    return {
        pageOne,
        pageTwo,
        pageThree,
        pageThree,
        pageFour, 
        pageFive
    }
}