export type BookShelfType = 'currentlyReading' | 'read' | 'wantToRead' | 'none';

export interface BookInterface {
    authors: string[];
    categories: string[];
    description: string;
    id: string;
    imageLinks: {
        smallThumnail: string;
        thumbnail: string;
    };
    shelf: BookShelfType;
    title: string;
    subtitle: string;
}
