import React from 'react';
import pipeN from '../assets/sprites/pipeN.png'
import pipeS from '../assets/sprites/pipeS.png'

import { GameEngine } from '../ts/gameEngine'

import '../sprite.css'

interface PipesProps{};

interface PipesState {
  pipes: Array<number>;
}

class Pipes extends React.Component<PipesProps, PipesState> {

  constructor(props: PipesProps){
    super(props);

      let pipes = new Array();
      pipes.push(0);

      this.state = { pipes: pipes };
  }

  createPipe = () => {
      let pipes = this.state.pipes;
      pipes.push(0);
      this.setState({ pipes: pipes });
  }

  componentDidMount() {
    
    setInterval(this.createPipe, 2000)
  }

  render()  {
    let pipeHtml = this.state.pipes.map(p => <Pipe />)
    return (<>{pipeHtml}</>);
  }
}

interface PipeProps { }

class Pipe extends React.Component<PipeProps> {
  gap: number;
  bottomY: number;
  pipeRef: any;

  constructor(props: PipeProps) {
    super(props);

    this.pipeRef = React.createRef();
    this.gap = 450
    this.bottomY = Math.random() * 170
  }

  movePipe = () => {

    let pipeId: any = this.pipeRef.current;

    let pipeDim = pipeId.getBoundingClientRect();
        
    let x: number = pipeDim.left;

    pipeId.style.left = x - 5 + "px";
  }

  removePipe = () => {

    let pipeId: any = this.pipeRef.current;

    let pipeDim = pipeId.getBoundingClientRect();

    let x: number = pipeDim.left;

    if (x <= 0) {

      pipeId.remove();
    } 
  }

  componentDidMount() {

    setInterval(this.removePipe, 1000/60)
    setInterval(this.movePipe, 1000/60)
  }

  render() {
    return(
      <div className='pipesBoth' ref={this.pipeRef}>

      <div id='pipeUpper' style={{
        width: 60,
        height: 200,
        bottom: this.bottomY + this.gap // Bottom pipe y + gap
      }}><img src={pipeN}/></div>

      <div id='pipeLower' style={{
        width: 60,
        height: 200,
        bottom: this.bottomY
      }}><img src={pipeS}/></div>

    </div>
    )
  }

}

export { Pipe };
export default Pipes;
