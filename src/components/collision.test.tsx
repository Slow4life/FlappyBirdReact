import React from 'react';
import { MockRect, CollidingRectangles} from './MockRect'
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
    expectCollision(CollidingRectangles.r1,CollidingRectangles.r3);
    expectNoCollision(CollidingRectangles.r1,CollidingRectangles.r2)
    expectNoCollision(CollidingRectangles.r1,CollidingRectangles.r4)
    expectNoCollision(CollidingRectangles.r1,CollidingRectangles.r5)
    expectNoCollision(CollidingRectangles.r1,CollidingRectangles.r6)
    expectNoCollision(CollidingRectangles.r1,CollidingRectangles.r7)
    expectNoCollision(CollidingRectangles.r1,CollidingRectangles.r8)
    expectNoCollision(CollidingRectangles.r2,CollidingRectangles.r3)
    expectNoCollision(CollidingRectangles.r2,CollidingRectangles.r5)
    expectNoCollision(CollidingRectangles.r2,CollidingRectangles.r6)
    expectNoCollision(CollidingRectangles.r2,CollidingRectangles.r7)
    expectNoCollision(CollidingRectangles.r2,CollidingRectangles.r8)
    expectNoCollision(CollidingRectangles.r3,CollidingRectangles.r4)
    expectNoCollision(CollidingRectangles.r3,CollidingRectangles.r5)
    expectNoCollision(CollidingRectangles.r3,CollidingRectangles.r6)
    expectNoCollision(CollidingRectangles.r3,CollidingRectangles.r7)
    expectNoCollision(CollidingRectangles.r3,CollidingRectangles.r8)
    expectNoCollision(CollidingRectangles.r4,CollidingRectangles.r5)
    expectNoCollision(CollidingRectangles.r4,CollidingRectangles.r6)
    expectNoCollision(CollidingRectangles.r4,CollidingRectangles.r7)
    expectNoCollision(CollidingRectangles.r4,CollidingRectangles.r8)
    expectNoCollision(CollidingRectangles.r5,CollidingRectangles.r6)
    expectNoCollision(CollidingRectangles.r5,CollidingRectangles.r7)
    expectNoCollision(CollidingRectangles.r5,CollidingRectangles.r8)
    expectNoCollision(CollidingRectangles.r6,CollidingRectangles.r7)
    expectNoCollision(CollidingRectangles.r6,CollidingRectangles.r8)
    expectNoCollision(CollidingRectangles.r7,CollidingRectangles.r8)
})

export function collidingDOMRects(r1: DOMRect | MockRect, r2: DOMRect | MockRect){
    // Parameters should really be DOMRect,
    // but because getBoundingClientRect() does not work in the Jest test
    // environment, we also need to accept MockRect parameters.
    // TODO to be replaced with function from the engine.
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


