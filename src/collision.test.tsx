import React from 'react';
import { render, screen } from '@testing-library/react';

test('render([raw html])',() => {
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
      <div id="R0" title="R0" style={{height:100,width:100,left:200,top:300}}>
        R0
        <div id="R1" title="R1" style={{height:10,width:200,left:-50,top:-50}}>R1</div>
        <div id="R2" title="R2" style={{height:10,width:200,left:-50,top:130}}>R2</div>
        <div id="R3" title="R3" style={{height:180,width:10,left:-30,top:-70}}>R3</div>
        <div id="R4" title="R4" style={{height:180,width:10,left:130,top:-20}}>R4</div>
        <div id="R5" title="R5" style={{height:50,width:50,left:25,top:25}}>R5</div>
        <div id="R6" title="R6" style={{height:20,width:20,left:90,top:-10}}>R6</div>
        <div id="R7" title="R7" style={{height:20,width:20,left:90,top:50}}>R7</div>
        <div id="R8" title="R8" style={{height:20,width:20,left:90,top:90}}>R8</div>
      </div>
  )
  const R0 = document.getElementById("R0").getBoundingClientRect()
  expect(R0).not.toBeNull()
  const R1 = document.getElementById("R1").getBoundingClientRect()
  const R2 = document.getElementById("R2").getBoundingClientRect()
  const R3 = document.getElementById("R3").getBoundingClientRect()
  const R4 = document.getElementById("R4").getBoundingClientRect()
  const R5 = document.getElementById("R5").getBoundingClientRect()
  const R6 = document.getElementById("R6").getBoundingClientRect()
  const R7 = document.getElementById("R7").getBoundingClientRect()
  const R8 = document.getElementById("R8").getBoundingClientRect()
})

