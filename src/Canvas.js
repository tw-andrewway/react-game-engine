import { Component } from "react";
import GameScreen from "./GameScreen.ts"
import DataFactory from "./DataFactory.ts"
import Pixel from "./Pixel.ts"

class Canvas extends Component {

    componentDidMount() {
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")
        const img = this.refs.image
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0)
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            
            const gameScreen = new GameScreen(img.width, img.height);
            let s = 97;
            let r = 218;
            let g = 251;
            let b = 255;
            let coeff = -1;
            const refreshRate = 30;
            const increment = 10;

            setInterval(() => {
                for(let i=0; i<img.width; i++) {
                    for(let j=0; j<img.height; j++) {
                        gameScreen.setPixel(i, j, new Pixel(s, r, g, b))
                    }
                }
    
                const dataFactory = new DataFactory(gameScreen);
    
                const newData = dataFactory.createData();
                for(let i=0; i<imageData.data.length; i++) {
                    imageData.data[i] = newData[i]
                }
    
                ctx.putImageData(imageData, 0, 0);
                b += coeff*increment;
                g += coeff*increment;

                if(b < 20 || g < 20) {
                    coeff *= -1;
                } else if(b > 255 || g > 255) {
                    coeff *= -1;
                }


            }, 1000/refreshRate);


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