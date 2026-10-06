import { chakra } from '@chakra-ui/react';
import { PersonaPageCopy } from 'types/models/persona-config';

export const renderTagline = (tagline: PersonaPageCopy['tagline'], accentColor) =>
  tagline.map((line) =>
    line.highlighted ? (
      <chakra.span color={accentColor ? accentColor : 'primary'}>{line.value}</chakra.span>
    ) : (
      line.value
    ),
  );
