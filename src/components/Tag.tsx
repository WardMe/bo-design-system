import React from "react";
import styled from "styled-components";
import { color, space } from "styled-system";

const Button = styled("button")<{ bg: string; px: number; py: number }>`
  ${color}
  ${space}
`;

export const TagStates = {
  TAG_UNSELECTED: "TAG_UNSELECTED",
  TAG_SELECTED: "TAG_SELECTED"
};

export interface TagData {
  id: string;
  title: string;
  state?: string;
}

interface TagProps {
  tag: TagData;
  onAddTag: () => void;
  onRemoveTag: () => void;
}

export default function Tag({ tag, onAddTag, onRemoveTag }: TagProps) {
  return (
    <Button
      px={3}
      py={2}
      bg="blue"
      color="white"
      type="button"
      onClick={tag.state === TagStates.TAG_SELECTED ? onRemoveTag : onAddTag}
    >
      {tag.title}
      {tag.state === TagStates.TAG_SELECTED && `X`}
    </Button>
  );
}
