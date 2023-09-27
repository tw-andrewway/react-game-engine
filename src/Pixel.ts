class Pixel {
    private standard: number;
    private red: number;
    private green: number;
    private blue: number;
  
    constructor(standard: number, red: number, green: number, blue: number) {
      this.standard = standard;
      this.red = red;
      this.green = green;
      this.blue = blue;
    }
  
    public getStandard(): number {
      return this.standard;
    }
  
    public setStandard(standard: number): void {
      this.standard = standard;
    }
  
    public getRed(): number {
      return this.red;
    }
  
    public setRed(red: number): void {
      this.red = red;
    }
  
    public getGreen(): number {
      return this.green;
    }
  
    public setGreen(green: number): void {
      this.green = green;
    }
  
    public getBlue(): number {
      return this.blue;
    }
  
    public setBlue(blue: number): void {
      this.blue = blue;
    }
  }
  
  export default Pixel;