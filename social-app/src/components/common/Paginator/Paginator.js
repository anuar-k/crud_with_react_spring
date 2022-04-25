import React, {useState} from "react";
import classes from "./Paginator.module.css";

const Paginator = ({currentPage, onChangePage, totalItemsCount, pageSize, portionSize = 10}) => {
    const pageCount = Math.ceil(totalItemsCount / pageSize)
    const pages = []
    for (let i = 1; i <= pageCount; i++) pages.push(i)

    const portionCount = Math.ceil(pageCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionSize * portionNumber;

    const portion = []
    for (let i = 1; i <= portionCount; i++) portion.push(i)
    return (
        <div className={classes.Paginator}>
            <br/>
            <div style={{display: "flex", justifyContent: "space-around", color: 'white', fontWeight: 'bold'}}>
                {
                    pages.filter(p => leftPortionPageNumber <= p && p <= rightPortionPageNumber).map(page => {
                        const style = currentPage === page ? classes.activePage : ""
                        return (
                            <span className={style}
                                  onClick={(e) => onChangePage(page)}
                                  key={page + Math.random() * 1.2}> {page}
                </span>
                        )
                    })
                }
            </div>
            <br/>
            <div style={{display: "flex"}}>
                <button onClick={() => setPortionNumber(1)} disabled={portionNumber === 1}>{"<<"}</button>
                {portionNumber > 1 ? <button onClick={() => setPortionNumber(portionNumber - 1)}> {"<"}</button>
                    : <button disabled> {"<"}</button>
                }
                {portion.map(i => <button key={i} onClick={() => setPortionNumber(i)}
                                          disabled={portionNumber === i}>{i}
                </button>)
                }

                {portionCount > portionNumber ?
                    <button onClick={() => setPortionNumber(portionNumber + 1)}> {">"}</button>
                    : <button disabled>{">"}</button>
                }
                <button onClick={() => setPortionNumber(portionCount)} disabled={portionNumber === portionCount}>{">>"}
                </button>
            </div>
        </div>
    )
}

export default Paginator