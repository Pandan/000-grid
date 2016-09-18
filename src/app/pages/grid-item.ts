export class GridItem {

    public header:string;
    public subHeader:String;
    public colorA: string;
    public id: string;
    public gitUrl:string;

    constructor(header: string, subHeader:string, colorA:string, id?:string, gitUrl?:string){
      this.header = header;
      this.subHeader = subHeader;
      this.colorA = colorA;
      this.id = id;
      this.gitUrl = gitUrl;
    }

}
