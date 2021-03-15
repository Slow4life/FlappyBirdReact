import React from 'react';
import { MockRect, CollidingRectangles} from './MockRect'
import { render } from '@testing-library/react';
import {GameEngine} from '../gameEngine/game';

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



    expectCollision(CollidingRectangles.r0,CollidingRectangles.r0);
    expectNoCollision(CollidingRectangles.r0,CollidingRectangles.r1);
    expectNoCollision(CollidingRectangles.r0,CollidingRectangles.r2);
    expectNoCollision(CollidingRectangles.r0,CollidingRectangles.r3);
    expectNoCollision(CollidingRectangles.r0,CollidingRectangles.r4);
    expectCollision(CollidingRectangles.r0,CollidingRectangles.r5);
    expectCollision(CollidingRectangles.r0,CollidingRectangles.r6);
    expectCollision(CollidingRectangles.r0,CollidingRectangles.r7);
    expectCollision(CollidingRectangles.r0,CollidingRectangles.r8);
    expectNoCollision(CollidingRectangles.r1,CollidingRectangles.r2)
    expectCollision(CollidingRectangles.r1,CollidingRectangles.r3);
    expectNoCollision(CollidingRectangles.r1,CollidingRectangles.r4)
    expectNoCollision(CollidingRectangles.r1,CollidingRectangles.r5)
    expectNoCollision(CollidingRectangles.r1,CollidingRectangles.r6)
    expectNoCollision(CollidingRectangles.r1,CollidingRectangles.r7)
    expectNoCollision(CollidingRectangles.r1,CollidingRectangles.r8)
    expectNoCollision(CollidingRectangles.r2,CollidingRectangles.r3)
    expectCollision(CollidingRectangles.r2,CollidingRectangles.r4)
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

function expectCollision(r1: DOMRect | MockRect, r2: DOMRect | MockRect){
    expect(GameEngine.dOMRectCollision(r1,r2)).toEqual(true);
    // Symmetric relation: r1 collides with r2 <=> r2 collides with r1
    expect(GameEngine.dOMRectCollision(r2,r1)).toEqual(true);
}
function expectNoCollision(r1: DOMRect | MockRect, r2: DOMRect | MockRect){
    expect(GameEngine.dOMRectCollision(r1,r2)).toEqual(false);
    // Symmetric relation: r1 collides with r2 <=> r2 collides with r1
    expect(GameEngine.dOMRectCollision(r2,r1)).toEqual(false);
}


