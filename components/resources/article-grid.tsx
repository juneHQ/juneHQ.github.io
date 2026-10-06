import { classNames } from 'lib/utils';
// Core
import { PostOrPage } from '@tryghost/content-api';
// Components
import { ArticlePreviewCard } from './article-preview-card';

type ArticleGridProps = {
    posts: PostOrPage[]
    maxColumns?: number
    className?: string
}

export const ArticleGrid = ({ className, maxColumns = 3, ...props }: ArticleGridProps) => {

    const columns: PostOrPage[][] = [];

    for(let col = 0; col < maxColumns; col++) {
        columns[col] = props.posts.filter((_, index) => index % maxColumns === col);
    }

    return (
        <div className={classNames(`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-cols-[repeat(${maxColumns},_auto)] gap-10`, className)}>
            {columns.map((column, col_number) => (
                <div 
                    key={col_number}
                    className="flex flex-col gap-10"
                >
                    {column.map((post) => (
                        <ArticlePreviewCard key={post.id} post={post} />
                    ))}
                </div>
            ))}
        </div>
    );
}