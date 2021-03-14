import React from "react";

interface IMockRect{
    id:string,
    height: number,
    width: number,
    left: number,
    top: number
}

export class MockRect extends React.Component<IMockRect>{
    // Stand-in class for DOMRect in test, because
    // getBoundingClientRect() does not work in the Jest environment.
    // (It always returns a point at Origin (0,0).)
    public readonly  left = this.props.left;
    public readonly  top = this.props.top;
    public readonly  bottom = this.props.top + this.props.height;
    public readonly  right = this.props.left + this.props.width;
    render(){
        return(
            <div>dummy</div>
        )
    }
}

export class CollidingRectangles extends React.Component{
    rects = [
        new MockRect({id:"R1", height:10,width:100,left:-50,top:-50}),
        new MockRect({id:"R2", height:10,width:200,left:-50,top:130}),
        new MockRect({id:"R3", height:180,width:10,left:-30,top:-70}),
        new MockRect({id:"R4", height:180,width:10,left:130,top:-20}),
        new MockRect({id:"R5", height:50,width:50,left:25,top:25}),
        new MockRect({id:"R6", height:20,width:20,left:90,top:-10}),
        new MockRect({id:"R7", height:20,width:20,left:90,top:50}),
        new MockRect({id:"R8", height:20,width:20,left:90,top:90})
    ]



    render(){
        let result =
            <div>
                <p>If you see this page, but want to play FlappyBird,
                have someone edit <i>App.tsx</i> like this:<br/>
                <code>return ( &lt;Flappybird&gt;&lt;/Flappybird&gt; )<br/>
                    // return ( &lt;CollidingRectangles/&gt; )</code>
                </p>
                <p>Otherwise, these are the rectangles defined in <i>MockRect.tsx</i>
                and used to test …() in <i>collision.test.tsx</i></p>
                <div id="R0" title="R0" style={{position: "absolute",height:100,width:100,left:200,top:300,border:"thin solid silver"}}>
                R0
                {React.createElement(MockRect,({id:"R1", height:10,width:100,left:-50,top:-50}))}
                {React.createElement(MockRect,({id:"R2", height:10,width:200,left:-50,top:130}))}
                {React.createElement(MockRect,({id:"R3", height:180,width:10,left:-30,top:-70}))}
                {React.createElement(MockRect,({id:"R4", height:180,width:10,left:130,top:-20}))}
                {React.createElement(MockRect,({id:"R5", height:50,width:50,left:25,top:25}))}
                {React.createElement(MockRect,({id:"R6", height:20,width:20,left:90,top:-10}))}
                {React.createElement(MockRect,({id:"R7", height:20,width:20,left:90,top:50}))}
                {React.createElement(MockRect,({id:"R8", height:20,width:20,left:90,top:90}))}
                </div>
            </div>
        //result.appendChild(<div>a child</div>)
        return(result)
    }
}
