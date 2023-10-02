import { Component } from "react";
import GameScreen from "./GameScreen/GameScreen.ts"
import DataFactory from "./DataFactory.ts"
import BlinkFrameSource from "./FrameSource/BlinkFrameSource.ts";

// This should just be responsible for rendering the canvas in the DOM
// TODO move creation of image to GameScreen
class Canvas extends Component {

    componentDidMount() {
        let isOn = true;
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")
        let height = 200;
        let width = 200;
        canvas.width = width;
        canvas.height = height;

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const gameScreen = new GameScreen(
            width,
            height,
            new BlinkFrameSource(height, width)
        );
        gameScreen.turnOn();
        gameScreen.currentFrameSubject.subscribe(frame => {
            let newFrameData = DataFactory(frame);
            for (let i = 0; i < imageData.data.length; i++) {
                imageData.data[i] = newFrameData[i]
            }
            ctx.putImageData(imageData, 0, 0);
        })
    }
    render() {
        const { imageToShow, width, height } = this.props;
        return (
            <>
                <div style={{'text-align': 'center'}}>
                    <h3>Simple Demo</h3>
                    <div style={{'text-align': 'center'}} >
                        <canvas ref="canvas" width={width} height={height} />
                    </div>
                  </div>
            </>
        )
    }
}

export default Canvas;  