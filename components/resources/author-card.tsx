import { Author } from '@tryghost/content-api';
// Types
import { Avatar } from '@chakra-ui/react';

type AuthorCardProps = {
    author: Author
}

export const AuthorCard = ({ author }: AuthorCardProps) => {
    return (
        <div className='flex items-center flex-row mb-6 gap-4'>
            <Avatar
                src={author.profile_image}
            />
            <div className='flex flex-col gap-1 leading-none'>
                <b className='font-black text-[1.1rem]'>{author.name}</b>
                <span>
                    {author.bio}
                </span>
                
            </div>
            
        </div>
    )
}