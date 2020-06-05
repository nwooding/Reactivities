export interface IProfile {
    displayName: string,
    username: string,
    bio: string,
    image: string,
    following: boolean,
    followersCount: number,
    followingCount: number,
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

export interface IUserActivity {
    id: string,
    title: string,
    category: string,
    date: Date
}