import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

interface SearchSuggestion {
  id: string;
  title: string;
  url: string;
  content?: string;
}

interface SearchSuggestionsProps {
  suggestions: SearchSuggestion[];
  isVisible: boolean;
  onSuggestionClick: (suggestion: SearchSuggestion) => void;
}

export default function SearchSuggestions({
  suggestions,
  isVisible,
  onSuggestionClick,
}: SearchSuggestionsProps): React.ReactElement | null {
  if (!isVisible || suggestions.length === 0) {
    return null;
  }

  return (
    <div className={styles.suggestionsContainer}>
      <div className={styles.suggestionsWrapper}>
        {suggestions.map((suggestion) => (
          <div
            key={suggestion.id}
            className={styles.suggestionItem}
            onClick={() => onSuggestionClick(suggestion)}
          >
            <Link to={suggestion.url} className={styles.suggestionLink}>
              <div className={styles.suggestionTitle}>{suggestion.title}</div>
              {suggestion.content && (
                <div className={styles.suggestionContent}>
                  {suggestion.content}
                </div>
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
