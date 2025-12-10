import TagListItem from './TagListItem';

type Props = {
    tags: string[];
    selectedTags?: string[];
    onTagClick?: (tag: string) => void;
}

export default function TagList({ tags, selectedTags, onTagClick }: Props) {
    return (
        <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
                <TagListItem 
                    key={index} 
                    text={tag}
                    onClick={onTagClick ? () => onTagClick(tag) : undefined}
                    isSelected={selectedTags?.includes(tag)}
                />
            ))}
        </div>
    );
}
