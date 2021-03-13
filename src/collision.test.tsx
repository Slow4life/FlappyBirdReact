import React from 'react';
import { render, screen } from '@testing-library/react';

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
    // render(
    <CollidingRectangles/>
    )
    const R0div = document.getElementById("R0")
    expect(R0div).not.toBeNull()


    const R1 = (screen.getByTitle("R1")as HTMLDivElement).getBoundingClientRect()
    //  const R1 = (document.getElementById("R1")as HTMLDivElement).getBoundingClientRect()
    const R2 = document.getElementById("R2").getBoundingClientRect()
    const R3 = document.getElementById("R3").getBoundingClientRect()
    const R4 = document.getElementById("R4").getBoundingClientRect()
    const R5 = document.getElementById("R5").getBoundingClientRect()
    const R6 = document.getElementById("R6").getBoundingClientRect()
    const R7 = document.getElementById("R7").getBoundingClientRect()
    const R8 = document.getElementById("R8").getBoundingClientRect()
    expectCollision(R1,R3);
    expectCollision(R2,R4)
    expectCollision(R0,R5)
    expectCollision(R0,R6)
    expectCollision(R0,R7)
    expectCollision(R0,R8)
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

export function collidingDOMRects(r1:DOMRect, r2:DOMRect){
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

function expectCollision(r1:DOMRect, r2:DOMRect){
    expect(collidingDOMRects(r1,r2)).toEqual(true)
    // Symmetric relation: r1 collides with r2 <=> r2 collides with r1
    expect(collidingDOMRects(r2,r1)).toEqual(true)
}
function expectNoCollision(r1:DOMRect, r2:DOMRect){
    expect(collidingDOMRects(r1,r2)).toEqual(false)
    // Symmetric relation: r1 collides with r2 <=> r2 collides with r1
    expect(collidingDOMRects(r2,r1)).toEqual(false)
}

class CollidingRectangles extends React.Component{
    render(){
        return(
            <div id="R0" title="R0" style={{position: "absolute",height:100,width:100,left:200,top:300}}>
                R0
                <div id="R1" title="R1" style={{position: "absolute",height:10,width:200,left:-50,top:-50}}>R1</div>
                <div id="R2" title="R2" style={{position: "absolute",height:10,width:200,left:-50,top:130}}>R2</div>
                <div id="R3" title="R3" style={{position: "absolute",height:180,width:10,left:-30,top:-70}}>R3</div>
                <div id="R4" title="R4" style={{position: "absolute",height:180,width:10,left:130,top:-20}}>R4</div>
                <div id="R5" title="R5" style={{position: "absolute",height:50,width:50,left:25,top:25}}>R5</div>
                <div id="R6" title="R6" style={{position: "absolute",height:20,width:20,left:90,top:-10}}>R6</div>
                <div id="R7" title="R7" style={{position: "absolute",height:20,width:20,left:90,top:50}}>R7</div>
                <div id="R8" title="R8" style={{position: "absolute",height:20,width:20,left:90,top:90}}>R8</div>
            </div>
        )
    }

}
