export interface BookResponse {
    ok:     boolean;
    Libros: Libro[];
    Libro:  Libro;
}

export interface Libro {
    _id?:       string;
    name:      string;
    author:    string;
    year:      string;
    keywords:  string;
    editorial: string;
    __v?:       number;
}
