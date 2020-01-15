import React from "react";

import Tag, { TagData } from "./Tag";

interface TagListProps {
  tags: Array<TagData>;
  onAddTag: () => void;
  onRemoveTag: () => void;
}

export default function TagList({ tags, onAddTag, onRemoveTag }: TagListProps) {
  const events = {
    onAddTag,
    onRemoveTag
  };

  if (tags.length === 0) {
    return <div>No Tags</div>;
  }

  return (
    <ul>
      {tags.map(tag => (
        <li key={tag.id}>
          <Tag tag={tag} {...events} />
        </li>
      ))}
    </ul>
  );
}
