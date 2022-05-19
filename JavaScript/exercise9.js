



function petla(h) {     //  pętla rekurencyjna
    console.log(h);

    if (h >= 255) {     //  warunek, do kiedy pętla ma trwać
        return;     //  przeranie pętli
    }
    petla(h + 1);       //  iteracja pętli
}

petla(22);       //  wywołanie pętli