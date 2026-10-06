import { AspectRatio, Box, Grid, GridItem, Select, Spinner, StackDivider, Text, VStack } from '@chakra-ui/react';
import { PERSONA_CONFIGS, PERSONA_CONFIG_LIBRARY } from 'components/core/constants/persona-configs';
import React, { useState } from 'react';
import ReactPlayer, { FilePlayerProps } from 'react-player/file';
import { PersonaCard } from './persona-card';

const SHOWN_PERSONA_CONFIGS = PERSONA_CONFIGS.filter((persona) => !persona.isHiddenOnHome);
const INITIAL_TAB = SHOWN_PERSONA_CONFIGS[0].route;

export const PersonaAccordions = () => {
  const [currentTab, setCurrentTab] = useState(INITIAL_TAB);
  const [progress, setProgress] = useState(0);
  const [buffering, setBuffering] = useState(false);

  const handleVideoProgress: FilePlayerProps['onProgress'] = (state) => {
    setProgress((state.playedSeconds / state.loadedSeconds) * 100);
  };

  const handleCurrentTabChange = (tab: string) => {
    setProgress(0);
    setCurrentTab(tab);
  };

  const handleVideoEnded: FilePlayerProps['onEnded'] = () => {
    const currentIndex = SHOWN_PERSONA_CONFIGS.findIndex((p) => p.route === currentTab);
    if (currentIndex === -1) return;

    if (currentIndex < SHOWN_PERSONA_CONFIGS.length - 1) {
      const nextPersona = SHOWN_PERSONA_CONFIGS[currentIndex + 1];
      handleCurrentTabChange(nextPersona.route);
    } else {
      handleCurrentTabChange(INITIAL_TAB);
    }
  };

  return (
    <Grid
      templateColumns={['1fr', '1fr', '2fr 1fr']}
      gridTemplateAreas={[
        "'persona-list' 'single-persona'",
        "'persona-list' 'single-persona'",
        "'single-persona persona-list'",
      ]}
      gap={[4, 4, 6]}
    >
      <GridItem gridArea="single-persona">
        <Box
          pos="relative"
          w="full"
          borderRadius="lg"
          background={PERSONA_CONFIG_LIBRARY[currentTab]?.gradient}
          p={[4, 4, 6]}
        >
          <Box pos="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
            <Spinner color="white" />
          </Box>
          <AspectRatio
            boxShadow="0px 4px 12px rgba(0, 0, 0, 0.15);"
            borderRadius="lg"
            overflow="hidden"
            ratio={366 / 295}
          >
            <ReactPlayer
              width="100%"
              height="100%"
              url={PERSONA_CONFIG_LIBRARY[currentTab]?.videoSrc}
              muted={true}
              playing={true}
              playsinline={true}
              progressInterval={60}
              onBuffer={() => {
                setBuffering(true);
              }}
              onBufferEnd={() => {
                setBuffering(false);
              }}
              onProgress={handleVideoProgress}
              onEnded={handleVideoEnded}
            />
          </AspectRatio>
          {buffering && (
            <Box pos="absolute" bottom={8} right={9}>
              <Spinner size="sm" />
            </Box>
          )}
        </Box>
      </GridItem>
      <GridItem gridArea="persona-list" flexShrink={0}>
        {/* Desktop list of personas */}
        <VStack
          display={['none', 'none', 'flex']}
          spacing={0}
          align="flex-start"
          divider={<StackDivider borderColor="landing.borderGray" />}
        >
          {SHOWN_PERSONA_CONFIGS.map((persona, i) => (
            <Box
              key={persona.route}
              pt={i !== 0 ? 6 : 0}
              pb={6}
              role="group"
              width="full"
              {...(currentTab !== persona.route && {
                cursor: 'pointer',
                onClick: () => handleCurrentTabChange(persona.route),
              })}
            >
              {currentTab === persona.route ? (
                <PersonaCard
                  progress={progress}
                  {...{
                    name: persona.name,
                    title: persona.title,
                    subtitle: persona.subtitle,
                    moreLinkText: `More for ${persona.footerTitle}`,
                    moreLink: `/personas/${persona.route}`,
                    accentColor: persona.accentColorScheme,
                  }}
                />
              ) : (
                <Text
                  m={3}
                  fontSize={18}
                  fontWeight="semibold"
                  color="landing.gray"
                  _groupHover={{ color: 'landing.black' }}
                >
                  {persona.name}
                </Text>
              )}
            </Box>
          ))}
        </VStack>
        {/* Mobile list of personas */}
        <VStack display={['flex', 'flex', 'none']} spacing={4}>
          <Select onChange={(e) => handleCurrentTabChange(e.target.value)}>
            {SHOWN_PERSONA_CONFIGS.map((persona) => (
              <option key={persona.route} value={persona.route}>
                {persona.name}
              </option>
            ))}
          </Select>
          {!!PERSONA_CONFIG_LIBRARY[currentTab] && (
            <PersonaCard
              progress={progress}
              {...{
                name: PERSONA_CONFIG_LIBRARY[currentTab].name,
                title: PERSONA_CONFIG_LIBRARY[currentTab].title,
                subtitle: PERSONA_CONFIG_LIBRARY[currentTab].subtitle,
                moreLinkText: `More for ${PERSONA_CONFIG_LIBRARY[currentTab].name}`,
                moreLink: `/personas/${PERSONA_CONFIG_LIBRARY[currentTab].route}`,
                accentColor: PERSONA_CONFIG_LIBRARY[currentTab].accentColorScheme,
              }}
            />
          )}
        </VStack>
      </GridItem>
    </Grid>
  );
};
