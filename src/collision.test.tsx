import React from 'react';
import { render, screen } from '@testing-library/react';

// Testing collision detection, based on the game objects' getBoundingClientRect()
// does not work. In the test environment, getBoundingClientRect() always returns
// a zero size 'rectangle' positioned at (0,0)


test('collision detection',() => {
    // We do have a problem with cross domain scripting when trying to render crashTestDummies.html
    // render(<iframe id="iFrame" src="crashTestDummies.html"/>)
    // render(<iframe id="iFrame" src="file://C:/Users/janegil/WebstormProjects/FlappyBirdReact/public/crashTestDummies.html"/>)
    // Copy the R0 div from
    // const iFrame = document.getElementById("iFrame") as HTMLIFrameElement;
    // expect(iFrame).not.toBeNull();
    // const testArea = iFrame.contentDocument || iFrame.contentWindow.document
    // expect(testArea).not.toBeNull();
    // Copy the R0 div from crashTestDummies.html
    render(
    <CollidingRectangles/>
    )
    const R0div = document.getElementById("R0")
    expect(R0div).not.toBeNull()


    const R1 = (document.getElementById("R1"))
    //  const R1 = (document.getElementById("R1")as HTMLDivElement).getBoundingClientRect()
    const R2 = document.getElementById("R2").getBoundingClientRect()
    const R3 = document.getElementById("R3").getBoundingClientRect()
    const R4 = document.getElementById("R4").getBoundingClientRect()
    const R5 = document.getElementById("R5").getBoundingClientRect()
    const R6 = document.getElementById("R6").getBoundingClientRect()
    const R7 = document.getElementById("R7").getBoundingClientRect()
    const R8 = document.getElementById("R8").getBoundingClientRect()
    expectCollision(R1,R3);
    expectNoCollision(R1,R2)
    expectNoCollision(R1,R4)
    expectNoCollision(R1,R5)
    expectNoCollision(R1,R6)
    expectNoCollision(R1,R7)
    expectNoCollision(R1,R8)
    expectNoCollision(R2,R3)
    expectNoCollision(R2,R5)
    expectNoCollision(R2,R6)
    expectNoCollision(R2,R7)
    expectNoCollision(R2,R8)
    expectNoCollision(R3,R4)
    expectNoCollision(R3,R5)
    expectNoCollision(R3,R6)
    expectNoCollision(R3,R7)
    expectNoCollision(R3,R8)
    expectNoCollision(R4,R5)
    expectNoCollision(R4,R6)
    expectNoCollision(R4,R7)
    expectNoCollision(R4,R8)
    expectNoCollision(R5,R6)
    expectNoCollision(R5,R7)
    expectNoCollision(R5,R8)
    expectNoCollision(R6,R7)
    expectNoCollision(R6,R8)
    expectNoCollision(R7,R8)
})

export function collidingDOMRects(r1: DOMRect | MockRect, r2: DOMRect | MockRect){
    // Parameters should really be DOMRect,
    // but because getBoundingClientRect() does not work in the Jest test
    // environment, we also need to accept MockRect parameters.
    if (r1.left > (r2.right)){
        return false
    }
    if (r2.left > (r1.right)){
        return false
    }
    if (r1.top > (r2.bottom)){
        return false
    }
    if (r2.top > (r1.bottom)){
        return false
    }
    return true
}

function expectCollision(r1:any, r2:any){
    expect(collidingDOMRects(r1,r2)).toEqual(true);
    // Symmetric relation: r1 collides with r2 <=> r2 collides with r1
    expect(collidingDOMRects(r2,r1)).toEqual(true);
}
function expectNoCollision(r1:any, r2:any){
    expect(collidingDOMRects(r1,r2)).toEqual(false);
    // Symmetric relation: r1 collides with r2 <=> r2 collides with r1
    expect(collidingDOMRects(r2,r1)).toEqual(false);
}

class CollidingRectangles extends React.Component{
    rects:Set<MockRect>
    constructor(){
        super(props)
        this.rects.set(new MockRect({id:"R1", height:10,width:100,left:-50,top:-50}));
        this.rects.set(new MockRect({id:"R2", height:10,width:200,left:-50,top:130}));
        this.rects.set(new MockRect({id:"R3", height:180,width:10,left:-30,top:-70}));
        this.rects.set(new MockRect({id:"R4", height:180,width:10,left:130,top:-20}));
        this.rects.set(new MockRect({id:"R5", height:50,width:50,left:25,top:25}));
        this.rects.set(new MockRect({id:"R6", height:20,width:20,left:90,top:-10}));
        this.rects.set(new MockRect({id:"R7", height:20,width:20,left:90,top:50}));
        this.rects.set(new MockRect({id:"R8", height:20,width:20,left:90,top:90}));
    }
    render(){
        return(
            <div id="R0" title="R0" style={{position: "absolute",height:100,width:100,left:200,top:300}}>
                R0

            </div>
        )
    }
}

interface IMockRect{
    id:string,
    height: number,
    width: number,
    left: number,
    top: number
}

export class MockRect extends React.Component<IMockRect>{
    public readonly  left = this.props.left;
    public readonly  top = this.props.top;
    public readonly  bottom = this.props.top + this.props.height;
    public readonly  right = this.props.left + this.props.width;
    render(){
        return(`<div id={this.props.id} title={this.props.id} style={position: "absolute", height:${this.props.height}, width:${this.props.height},left:${this.props.left},top:${this.props.top}>
                {this.props.id}
            </div>`)
        }
    }
