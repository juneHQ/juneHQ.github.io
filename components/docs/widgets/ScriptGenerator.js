import { useEffect, useState } from 'react';
import { Center, Spinner } from '@chakra-ui/react';
import axios from 'axios';

import Widget from './Widget';
import CodeBlock, { Highlighter } from '../CodeBlock';
import { generateScript } from '../snippets';
import { useRouter } from 'next/dist/client/router';

export function ScriptGeneratorWidget({ appId }) {
  const { query } = useRouter();
  const [{ token }, setTokenState] = useState({
    isLoading: false,
    token: query.token ? query.token : null,
    error: null,
  });

  async function getToken(id) {
    try {
      setTokenState({ isLoading: true, token: 'YOUR_WRITE_KEY', error: null });
      const req = await axios.get(`${process.env.JUNE_API_HOST}/sdk_keys/0`, {
        params: {
          app_id: id,
          name: 'Write key',
        },
        withCredentials: true,
      });
      setTokenState({ isLoading: false, token: req.data.key, error: null });
    } catch (e) {
      // TODO
    }
  }

  useEffect(() => {
    if (appId && !token) getToken(appId);
  }, [appId, token]);

  return token ? (
    <CodeBlock raw={generateScript(token)}>
      <Highlighter language="html" code={generateScript(token)} />
    </CodeBlock>
  ) : (
    <CodeBlock raw={generateScript(token)}>
      <Highlighter language="html" code={generateScript('YOUR_WRITE_KEY')} />
    </CodeBlock>
  );
}

export default function ScriptGenerator() {
  const { query } = useRouter();
  return query.token ? (
    <ScriptGeneratorWidget />
  ) : (
    <Widget>
      <ScriptGeneratorWidget />
    </Widget>
  );
}
