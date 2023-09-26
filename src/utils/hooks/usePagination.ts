import { useState } from "react"

export interface propsPagination  {
    arrayPagesComplet : number[], 
    pageCorrect: number,
    setArrayPages: React.Dispatch<React.SetStateAction<number[]>>
}

const usePagination = () => {

    const totalPagesAtTime = 10
   
    const [initialNext, setInitialNext] = useState(11)
    const [finalNext, setFinalNext] = useState(initialNext + totalPagesAtTime)
    const [limitPageNext, setlimitPageNext] = useState(10)

    const [limitPagePrevius, setlimitPagePrevius] = useState<number>(11)
    const [initialPrevius, setInitialPrevius] = useState<number>(initialNext - 10)
    const [finalPrevius, setFinalPrevius] = useState<number>(initialNext)

    const calculatePagination = ({arrayPagesComplet, pageCorrect, setArrayPages}: propsPagination) => {
        if (pageCorrect && pageCorrect === limitPageNext + 1) {
            returnNewArrayPages(initialNext, finalNext, setArrayPages, arrayPagesComplet)
            returnValuesAfterAdvancing(initialNext, finalNext, limitPageNext)
        } else if (pageCorrect === limitPagePrevius - 1) {
            returnNewArrayPages(initialPrevius, finalPrevius, setArrayPages, arrayPagesComplet)
            returnValuesAfterReturning(initialNext, initialPrevius, finalNext, limitPageNext)
        }
    }

    const returnNewArrayPages = (initial: number, final: number, setArrayPages: React.Dispatch<React.SetStateAction<number[]>>, arrayPagesComplet: number[]) => {
        setArrayPages(arrayPagesComplet.slice(initial, final))
    }

    const returnValuesAfterReturning = (initialNext: number, initialPrevius: number, finalNext: number, limitPageNext: number) => {
        setInitialNext(initialNext - totalPagesAtTime)
        setFinalNext(finalNext - totalPagesAtTime)
        setlimitPageNext(limitPageNext - totalPagesAtTime)

        setlimitPagePrevius(initialPrevius)
        setInitialPrevius(initialPrevius - totalPagesAtTime)
        setFinalPrevius(initialPrevius)
    }

    const returnValuesAfterAdvancing = (initialNext: number, finalNext: number, limitPageNext: number) => {
        setlimitPagePrevius(initialNext)
        setInitialPrevius(initialNext - totalPagesAtTime)
        setFinalPrevius(initialNext)

        setInitialNext(initialNext + totalPagesAtTime)
        setFinalNext(finalNext + totalPagesAtTime)
        setlimitPageNext(limitPageNext + totalPagesAtTime)
    }

 
    return {
        calculatePagination
    }

}
export default usePagination