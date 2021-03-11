import React from 'react';
import pipeN from '../assets/sprites/pipeN.png'
import pipeS from '../assets/sprites/pipeS.png'

import '../sprite.css'

interface PipesProps{};

interface PipesState { pipes: Array<number>; }

class Pipes extends React.Component<PipesProps, PipesState> {
  counter: number;

  constructor(props: PipesProps){
    super(props);

      let pipes = new Array();
      
      this.counter = 0;
      pipes.push(this.counter);

      this.state = { pipes: pipes };
  }

  createPipe = () => {

      let pipes = this.state.pipes;
      pipes.push(++this.counter);

      if (pipes.length > 3) { pipes.shift(); }

      this.setState({ pipes: pipes });
  }

  componentDidMount() {

    setInterval(this.createPipe, 2000)
  }

  render()  {

    let pipeHtml = this.state.pipes.map(p => <Pipe key={p} />)
    return (<>{pipeHtml}</>);
  }
}

interface PipeProps { }

class Pipe extends React.Component<PipeProps> {
  gap: number;
  bottomY: number;
  pipeRef: any;
  private _ismounted: boolean;

  constructor(props: PipeProps) {
    super(props);

    this._ismounted = false;
    this.pipeRef = React.createRef();
    this.gap = 450
    this.bottomY = Math.random() * 170
  }

  movePipe = () => {
    if (!this._ismounted) { return; }

    let pipeId: any = this.pipeRef.current;

    let pipeDim = pipeId.getBoundingClientRect();
        
    let x: number = pipeDim.left;

    pipeId.style.left = x - 5 + "px";
  }

  removePipe = () => {

    let pipeId: any = this.pipeRef.current;

    let pipeDim = pipeId.getBoundingClientRect();

    let x: number = pipeDim.left + 60;

    if (x <= 0) {

      pipeId.remove();
    } 
  }

  componentWillUnmount() {
     this._ismounted = false;
  }

  componentDidMount() {
    this._ismounted = true;
    //setInterval(this.removePipe, 1000/60)
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