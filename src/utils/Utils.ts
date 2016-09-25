export class Utils{

  static logObj(obj:Object):any{
    for (var key in obj) {
      console.log("logObj: " + key + ":" + obj[key]);
    }
  }

}
