import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
    const [winsX, setWinX] = useState(0)
    const [winsO, setWinO] = useState(0)

    const [turn, setTurn] = useState('X')
    
    const [grid, setGrid] = useState(['','','','','','','','',''])

    return (
            <div className={styles.gameframe}>
                <header className={styles.headergame}>
                    <h1 className={styles.titlegame}>Tick-tack-toe</h1>
                </header>
                <article className={styles.bodygame}>
                    <GameGrid winsX={winsX} setWinX={setWinX} winsO={winsO} setWinO={setWinO} turn={turn} setTurn={setTurn} grid={grid} setGrid={setGrid}/>
                    <GameScore winsX={winsX} winsO={winsO}/>
                </article>
                <footer className={styles.footergame}>
                    <span>Made by <a href="">José Costa</a></span>
                </footer>
            </div>
        
  )
}

function GameGrid({winsX, setWinX, winsO, setWinO, turn, setTurn, grid, setGrid}) {

    function IsWin() {
        const winX = ((grid[0] == grid[1] && grid[2] == grid[0] && grid[0] == 'X') ||
        (grid[3] == grid[4] && grid[5] == grid[3] && grid[3] == 'X') ||
        (grid[7] == grid[8] && grid[9] == grid[7] && grid[7] == 'X') ||
        (grid[0] == grid[3] && grid[6] == grid[0] && grid[0] == 'X') ||
        (grid[1] == grid[4] && grid[7] == grid[1] && grid[1] == 'X') ||
        (grid[2] == grid[5] && grid[8] == grid[2] && grid[2] == 'X') ||
        (grid[0] == grid[4] && grid[8] == grid[0] && grid[0] == 'X') ||
        (grid[6] == grid[4] && grid[2] == grid[6] && grid[6] == 'X'))
    
        const winO = ((grid[0] == grid[1] && grid[2] == grid[0] && grid[0] == 'O') ||
        (grid[3] == grid[4] && grid[5] == grid[3] && grid[3] == 'O') ||
        (grid[7] == grid[8] && grid[9] == grid[7] && grid[7] == 'O') ||
        (grid[0] == grid[3] && grid[6] == grid[0] && grid[0] == 'O') ||
        (grid[1] == grid[4] && grid[7] == grid[1] && grid[1] == 'O') ||
        (grid[2] == grid[5] && grid[8] == grid[2] && grid[2] == 'O') ||
        (grid[0] == grid[4] && grid[8] == grid[0] && grid[0] == 'O') ||
        (grid[6] == grid[4] && grid[2] == grid[6] && grid[6] == 'O'))

        const tie = (
            (grid[0] != '') && (grid[1] != '') && (grid[2] != '') &&
            (grid[3] != '') && (grid[4] != '') && (grid[5] != '') &&
            (grid[6] != '') && (grid[7] != '') && (grid[8] != '')
        )
    
        if(winX) {
            alert('Win X')
            ResetGrid()
            CountWin('X')
            return true
        }
    
        else if(winO) {
            alert('Win O')
            ResetGrid()
            CountWin('O')
            return true
        }

        else if(tie) {
            alert('Tie')
            ResetGrid()
        }
    
        return false
    
    }
    
    function CountWin(player) {
        (player == 'X') ? setWinX(winsX + 1) : (player == 'O') ? setWinO(winsO + 1) : false
    }
    
    function ResetGrid() {
        setTimeout(() => {
            setGrid(['','','','','','','','',''])
            setTurn('X')
        }, 2000)
    }


    function handleGrid(gridPos){
        IsWin()
        if(grid[gridPos] == '' && !(IsWin()) ){
            grid[gridPos] = turn
            setGrid(grid);
            (turn == 'X') ? setTurn('O') : setTurn('X')
        }
    }
    
    return (
        <section className={styles.gamegrid}>
            <button onClick={() => {handleGrid(0)}} id={styles.row0column0} className={styles.cell}>{grid[0]}</button>
            <button onClick={() => {handleGrid(1)}} id={styles.row0column1} className={styles.cell}>{grid[1]}</button>
            <button onClick={() => {handleGrid(2)}} id={styles.row0column2} className={styles.cell}>{grid[2]}</button>
            <button onClick={() => {handleGrid(3)}} id={styles.row1column0} className={styles.cell}>{grid[3]}</button>
            <button onClick={() => {handleGrid(4)}} id={styles.row1column1} className={styles.cell}>{grid[4]}</button>
            <button onClick={() => {handleGrid(5)}} id={styles.row1column2} className={styles.cell}>{grid[5]}</button>
            <button onClick={() => {handleGrid(6)}} id={styles.row2column0} className={styles.cell}>{grid[6]}</button>
            <button onClick={() => {handleGrid(7)}} id={styles.row2column1} className={styles.cell}>{grid[7]}</button>
            <button onClick={() => {handleGrid(8)}} id={styles.row2column2} className={styles.cell}>{grid[8]}</button>
        </section>
    )
}

function GameScore({winsX, winsO}) {

    return (
        <section className={styles.gamescore}>
            <h3 className={styles.titlescore}>Score</h3>
            <div className={styles.score}>
                <div className={styles.playerx}>
                    <div className={styles.playerxtittle}>X</div>
                    <div className={styles.wins}>{winsX}</div>
                </div>
                <div className={styles.playero}>
                    <div className={styles.playerotittle}>O</div>
                    <div className={styles.wins}>{winsO}</div>
                </div>
            </div>
        </section>
    )
}


