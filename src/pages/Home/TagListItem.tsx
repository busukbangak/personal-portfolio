type Props = {
    text: string;
    onClick?: () => void;
    isSelected?: boolean;
}

export default function TagListItem({ text, onClick, isSelected = false }: Props) {
    const baseClasses = 'inline-block text-sm font-medium px-3 py-1 rounded-full';
    
    if (onClick) {
        // Clickable tag (for filter)
        return (
            <button
                onClick={onClick}
                className={`${baseClasses} transition-all ${
                    isSelected
                        ? 'bg-[#5B9FD7] text-white'
                        : 'bg-white/10 text-white/60 hover:bg-white/20'
                }`}
            >
                {text}
            </button>
        );
    }
    
    // Non-clickable tag (for display)
    return (
        <span className={`${baseClasses} bg-white/10 text-white/80`}>
            {text}
        </span>
    );
}

