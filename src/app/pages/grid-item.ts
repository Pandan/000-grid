export class GridItem {

    public header:string;
    public subHeader:String;
    public colorA: string;
    public id: string;

    constructor(header: string, subHeader:string, colorA:string, id?:string){
      this.header = header;
      this.subHeader = subHeader;
      this.colorA = colorA;
      this.id = id;
    }

}
