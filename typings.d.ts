export interface Tweet extends TweetBody {
    // image: JSX.Element
    // text: ReactNode
    // username: ReactNode
    // profileImg: string | undefined
    _id: string
    _createdAt: string
    _updatedAt: string
    _rev: string
    _type: 'tweet'
    blockTweet: boolean
}

export type TweetBody = {
    text: string
    username: string
    profileImg: string
    image?: string
}

export type CommentBody = {
    comment: string
    tweetId: string
    username: string
    profileImg: string
}

export interface Comment extends Commentbody {
    comment: ReactNode
    username: any
    profileImg: {} | undefined
    _createdAt: string
    _id: string
    _rev: string
    _type: 'comment'
    _updatedAt: string
    tweet: {
        _ref: string
        _type: 'reference'
    }
}