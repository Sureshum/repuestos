export declare class CreateRepuestoDto {
    readonly nombre: string;
    readonly marca: string;
    readonly modelo: string;
    readonly anio: number;
    readonly precio: number;
    readonly foto: string;
}
export declare class UpdateRepuestoDto {
    readonly nombre?: string;
    readonly marca?: string;
    readonly modelo?: string;
    readonly anio?: number;
    readonly precio?: number;
    readonly foto?: string;
}
