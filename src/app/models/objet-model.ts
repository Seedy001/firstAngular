
export class objetVente {
    title: string;
    description: string;
    imageUrl: string;
    createdAt: Date;
    id!: number;
    constructor(title: string,
                description: string,
                imageUrl: string,
                createdAt: Date) {
                    this.title = title;
                    this.description = description;
                    this.imageUrl = imageUrl;
                    this.createdAt = createdAt;
        }
    }