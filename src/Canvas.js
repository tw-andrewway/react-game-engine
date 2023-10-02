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
        const img = this.refs.image
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0)
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const gameScreen = new GameScreen(
                img.width, 
                img.height, 
                new BlinkFrameSource(img.height,img.width)
            );
            gameScreen.turnOn();
            gameScreen.currentFrameSubject.subscribe(frame => {
                let newFrameData = DataFactory(frame);
                for(let i=0; i<imageData.data.length; i++) {
                    imageData.data[i] = newFrameData[i]
                }
                ctx.putImageData(imageData, 0, 0);
            })
        }
    }
    render() {
        const { imageToShow, width, height } = this.props;
        return (
            <>
                <div>
                    <h3>Original Image</h3>
                    <img ref="image" src={imageToShow} width={width} height={height} />
                </div>
                <div className="canvas-container">
                    <h3>Canvas Image</h3>
                    <canvas ref="canvas" width={width} height={height} />
                </div>
            </>
        )
    }
}

export default Canvas;  