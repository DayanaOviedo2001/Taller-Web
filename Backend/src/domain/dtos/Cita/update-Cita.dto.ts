export class UpdateCitaDto {

    private constructor(
        public readonly id: number,
        public readonly fechaCreacion:Date,
        public readonly fechaProgramada:Date,
        public readonly pacienteId:number,
        public readonly doctorId: number,
        public readonly consultorioId: number,
     
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
  
      if ( this.id ) returnObj.name = this.id;
      if ( this.fechaCreacion ) returnObj.genre = this.fechaCreacion;
      if ( this.fechaProgramada ) returnObj.genre = this.fechaProgramada;
      if ( this.pacienteId ) returnObj.genre = this.pacienteId;
      if ( this.doctorId ) returnObj.genre = this.doctorId;
      if ( this.consultorioId ) returnObj.genre = this.consultorioId;
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdateCitaDto?]  {
  
      const { id, fechaCreacion, fechaProgramada, pacienteID, doctorId, consultorioId } = props;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if ( !fechaCreacion && !fechaProgramada && !pacienteID && !doctorId  && !consultorioId ) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdateCitaDto(id, fechaCreacion, fechaProgramada, pacienteID, doctorId, consultorioId )];
    }
  
  
  }