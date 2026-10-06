import { useCallback, useState } from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import axios from 'axios';
import { uniqBy } from 'lodash';
import moment from 'moment';
import Widget from './Widget';
import { EVENT_TYPE_TO_NAME } from 'unbundled-core/constants/event-types';

function SandboxWidget({ appId, onEvent }) {
  const [isLoading, setIsLoading] = useState(false);
  const [events, setEvents] = useState([]);

  const refreshEvents = useCallback(async () => {
    try {
      setIsLoading(true);
      const req = await axios.get(`${process.env.JUNE_API_HOST}/event_logs_feed?app_id=${appId}`, {
        withCredentials: true,
        mode: 'cors',
      });
      if (req.data?.event_logs !== null) {
        setEvents(uniqBy([...events, ...req.data.event_logs], 'message_id'));
        if (req.data.event_logs.length !== 0 && onEvent) {
          onEvent();
        }
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, [appId, events, onEvent]);

  const hasEvents = events && events !== null && events.length > 0;

  return (
    <Box
      mt={4}
      color="white"
      fontSize="sm"
      background={'purple.900'}
      py={6}
      rounded={'lg'}
      overflowX={'auto'}
      whiteSpace={'pre-line'}
      px={6}
    >
      <Flex direction="column" alignItems="center" justifyContent="center">
        {!hasEvents && (
          <Flex mb={4}>
            <div className="sdk-ellipsis">
              <div>
                <div></div>
              </div>
            </div>
          </Flex>
        )}
        {hasEvents && (
          <Flex width="100%" direction="column" px={4} mb={6}>
            {events.map((event) => (
              <Flex alignItems="center" key={event.timestamp}>
                <Text fontSize="sm" color="white" mr={1}>
                  {event.event.type === 0 && '/'}
                  {event.event.name}
                </Text>
                <Text fontSize="xs" color="gray.400">{` · ${EVENT_TYPE_TO_NAME[event.event.type]} event`}</Text>
                <Text fontSize="xs" color="gray.400" px={1}>
                  {` · ${moment(event.timestamp).fromNow()}`}
                </Text>
              </Flex>
            ))}
          </Flex>
        )}
        <Button
          size="sm"
          color="white"
          colorScheme="whiteAlpha"
          backgroundColor="rgba(255, 255, 255, 0.1)"
          onClick={refreshEvents}
          isLoading={isLoading}
        >
          Refresh
        </Button>
      </Flex>
    </Box>
  );
}

export default function Sandbox() {
  return (
    <Widget>
      <SandboxWidget />
    </Widget>
  );
}
