export interface IProfile {
    displayName: string,
    username: string,
    bio: string,
    image: string,
    photos: IPhoto[]
}

export interface IProfileFormValues{
    displayName: string,
    bio: string,
}

export class ProfileFormValues implements IProfileFormValues {
    displayName: string = "";
    bio: string = "";

    constructor(init: IProfileFormValues) {
        this.displayName = init.displayName ?? '';
        this.bio = init.bio ?? '';
       
    }
}

export interface IPhoto {
    id: string,
    url: string,
    isMain: boolean,
}